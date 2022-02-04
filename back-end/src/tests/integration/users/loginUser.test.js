const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;
const app = require('../../../api/app');

describe('Testa login de usuários', () => {
  describe('Quando o login é feito com sucesso', () => {
    let response = {};

    before(async () => {
      response = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' });
    });

    it('retorna status 200 - OK', () => {
      expect(response).to.be.have.status(200);
    });

    it('retorna um objeto', () => {
      expect(response).to.be.a('object');
    });

    it('objeto possui token', () => {
      expect(response.body).to.have.property('token');
    });

    it('objeto possui id', () => {
      expect(response.body).to.have.property('id');
    });

    it('objeto possui nome', () => {
      expect(response.body).to.have.property('name');
    });

    it('objeto possui role', () => {
      expect(response.body).to.have.property('role');
    });
  });

  describe('Quando a pessoa usuária insere dados inválidos', () => {
    let response = {};

    before(async () => {   
      response = await chai.request(app).post('/login')
        .send({ email: 'admin@deliveryapp.com', password: '--adm2@21!!--' });
    });

    it('retorna status 404 - Not Found', () => {
      expect(response).to.have.status(404);
    });

    it('espera mensagem: "usuário não encontrado"', () => {
      expect(response.body).to.be.equal('usuário não encontrado');
    });
  });

  describe('Quando o usuário não insere email', () => {
    let response = {};

    before(async () => {    
      response = await chai.request(app).post('/login')
      .send({ password: '--adm2@21!!--' });
    });

    it('retorna status 400 - Bad Request', () => {
      expect(response).to.have.status(400);
    });

    it('espera mensagem: "email" is required', () => {
      expect(response.body).to.be.equal('"email" is required');
    });
  });

  describe('Quando a pessoa usuária não insere senha', () => {
    let response = {};

    before(async () => {    
      response = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com' });
    });

    it('retorna status 400 - Bad Request', () => {
      expect(response).to.have.status(400);
    });

    it('espera a mensagem: "password" is required', () => {
      expect(response.body).to.be.equal('"password" is required');
    });
  });
});
