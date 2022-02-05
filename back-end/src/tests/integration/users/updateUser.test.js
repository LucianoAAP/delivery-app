const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa updateUser', () => {
  let response = {};
  let getUser = {};
  let createdUser = {};

  let newUser = {
    name: 'John Wick da Silva',
    email: 'jhonwicksilva@continental.com',
    password: 'parabellum',
    role: 'seller',
  };

  before(async () => {
    try {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      createdUser = await chai.request(app).post('/users').send({
        name: 'John Doe Foo Bar',
        email: 'newemailtest@email.com',
        password: 'abcdefgh',
        role: 'customer',
      }).set('authorization', token);

      const { body : { id } } = createdUser;

      response = await chai.request(app).put(`/users/${id}`).send(newUser)
        .set('authorization', token);
      
      getUser = await chai.request(app).get(`/users/${id}`)
        .set('authorization', token).then((res) => res.body);
    } catch (e) {
      console.log(e.message);
    }
  });

  after(async () => {
    try {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);

      const { body : { id } } = createdUser;

      await chai.request(app).delete(`/users/${id}`).set('authorization', token);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('Atualiza usuário no banco', () => {
    expect(response).to.have.status(204);
    expect(response.body).to.be.deep.equal({});
  });
});
