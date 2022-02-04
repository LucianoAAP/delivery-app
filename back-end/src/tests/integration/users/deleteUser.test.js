const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa DELETE /users/id', () => {
  describe('Testa DELETE /users/id com sucesso', () => {
    let response = {};
    let missingUser = {};

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);

        const newUser = await chai.request(app)
          .post('/users')
          .set('authorization', token)
          .send({
            name: 'John Doe Foo Bar',
            email: 'emailteste007@email.com',
            password: '32165487',
            role: 'customer',
          });

        const { body: { id } } = newUser;

        response = await chai.request(app).delete(`/users/${id}`).set('authorization', token);

        missingUser = await chai.request(app).get(`/users/${id}`).set('authorization', token);
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Verifica usuário no banco', () => {
      expect(missingUser).to.have.status(400);
      expect(missingUser.body).to.be.equal('User not found!');
    });

    it('Retorna status 204', () => {
      expect(response).to.have.status(204);
      expect(response.body).to.be.deep.equal({});
    });
  });
});
