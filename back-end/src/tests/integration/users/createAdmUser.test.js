const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);
const { expect } = chai;

const app = require('../../../api/app');

describe('Testa criação de usuário Admin', () => {
  describe('Testa rota sem enviar nome', () => {
    let response;

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app)
        .post('/users/admin')
        .set('authorization', token)
        .send({
          email: 'emailteste007@email.com',
          password: '244466666',
          role: 'administrator',
        });
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna mensagem: "name" is required', () => {
      expect(response.body).to.be.equal('"name" is required');
    });
  });

  describe('Testa rota sem enviar email', () => {
    let response;

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app)
        .post('/users/admin')
        .set('authorization', token)
        .send({
          name: 'John Doe Foo Bar',
          password: '244466666',
          role: 'administrator',
        });
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna mensagem: "email" is required', () => {
      expect(response.body).to.be.equal('"email" is required');
    });
  });

  describe('Testa rota sem enviar password', () => {
    let response;

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app)
        .post('/users/admin')
        .set('authorization', token)
        .send({
          name: 'John Doe Foo Bar',
          email: 'emailteste007@email.com',
          role: 'administrator',
        });
    });

    it('Retorna status 400', () => {
      expect(response).to.have.status(400);
    });

    it('Retorna mensagem: "password" is required', () => {
      expect(response.body).to.be.equal('"password" is required');
    });
  });

  describe('Testa criação com email duplicado', () => {
    let response;

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app)
        .post('/users/admin')
        .set('authorization', token)
        .send({
          name: 'John Doe Foo Bar',
          email: 'adm@deliveryapp.com',
          password: '244466666',
          role: 'administrator',
        });
    });

    it('Retorna status 409', () => {      
      expect(response).to.have.status(409);
    });

    it('Retorna mensagem: Email already registered', () => {
      expect(response.body).to.be.equal('Email already registered');
    });
  });

  describe('Testa criação com sucesso', () => {
    let response;

    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      response = await chai.request(app)
        .post('/users/admin')
        .set('authorization', token)
        .send({
          name: 'John Doe Foo Bar',
          email: 'emailteste007@email.com',
          password: '244466666',
          role: 'administrator',
        });
    });

    after(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);

      const { body : { id } } = response;

      await chai.request(app).delete(`/users/${id}`).set('authorization', token);
    });

    it('Retorna status 201', () => {
      expect(response).to.have.status(201);
    });

    it('Confere chaves id, name, email, role', () => {
      expect(response.body).to.have.all.keys('id', 'name', 'email', 'role');
    });
  });
});
