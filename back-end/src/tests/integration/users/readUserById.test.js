const chai = require('chai');
const chaiHttp = require('chai-http');
const { response } = require('../../../api/app');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa GET /users/id', () => {
  describe('Testa GET /users/id com sucesso', () => {
    let response = {};

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app).get('/users/1').set('authorization', token);
    });

    it('Retorna status 200', () => {
      expect(response).to.have.status(200);
    });
  });

  describe('Testa GET /users/id com erro', () => {
    let response = {};

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app).get('/users/1000').set('authorization', token);
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });
  });
});
