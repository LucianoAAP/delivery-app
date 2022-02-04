const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa GET /users', () => {
  describe('Testa GET /users com sucesso', () => {
    let response = {};

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app).get('/users').set('authorization', token);
    });

    it('Retorna status 200', () => {
      expect(response).to.have.status(200);
    });

    it('Retorna array de usuários', () => {
      expect(response.body).to.be.an('array');
    });

    it('Retorna token', () => {
      expect(response.body[0]).to.have.all.keys('email', 'id', 'name', 'role');
    });

    it('Verifica inexistência de password', () => {
      expect(response.body[0]).not.to.have.key('password');
    });
  });
});
