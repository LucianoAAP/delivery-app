const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa CreateProduct', () => {
  describe('Quando não há token de autenticação', () => {
    let response = {};

    before(async () => {
      try {
        response = await chai.request(app).post('/products').send({
          name: 'Weissbier 1l',
          price: 23.70,
          urlImage: 'http://localhost:3001/images/weissbier.jpg',
        });
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem de erro correta', () => {
      expect(response).to.have.status(401);
      expect(response.body).to.be.deep.equal('Token not found');
    });
  });

  describe('Quando as entradas são inválidas', () => {
    let response = {};
    let products = [];

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
          .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
          .then((res) => res.body.token);
        
        response = await chai.request(app).post('/products').send({
          name: '',
          price: 23.70,
          urlImage: 'http://localhost:3001/images/weissbier.jpg',
        }).set('authorization', token);

        products = await chai.request(app).get('/products').set('authorization', token)
          .then((res) => res.body);
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem de erro correta', () => {
      expect(response).to.have.status(400);
      expect(response.body).to.be.deep.equal('"name" is not allowed to be empty');
    });

    it('Não cria produto no banco', async () => {
      const wasCreated = products.some((product) => product.name === 'Weissbier 1l');
      expect(wasCreated).to.be.false;
    });
  });

  describe('Quando o produto já existe', () => {
    let response = {};
    let products = [];

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
          .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
          .then((res) => res.body.token);
        
        response = await chai.request(app).post('/products').send({
          name: 'Skol Lata 250ml',
          price: 2.20,
          urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        }).set('authorization', token);

        products = await chai.request(app).get('/products').set('authorization', token)
          .then((res) => res.body);
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem de erro correta', () => {
      expect(response).to.have.status(409);
      expect(response.body).to.be.deep.equal('Product already exists');
    });

    it('Não cria produto no banco', async () => {
      const beerArray = products.filter((product) => product.name === 'Skol Lata 250ml');
      expect(beerArray.length).to.be.equal(1);
    });
  });

  describe('Quando é criado com sucesso', () => {
    let response = {};
    let product = {};

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
          .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
          .then((res) => res.body.token);
        
        response = await chai.request(app).post('/products').send({
          name: 'Weissbier 1l',
          price: 23.70,
          urlImage: 'http://localhost:3001/images/weissbier.jpg',
        }).set('authorization', token);

        const { body : { id } } = response;

        product = await chai.request(app).get(`/products/${id}`)
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

        const { body : { id } } = response;

        await chai.request(app).delete(`/products/${id}`).set('authorization', token);
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Cria produto no banco', async () => {
      expect(product).to.be.not.null;
    });

    it('Retorna a resposta correta', () => {
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('name');
      expect(response.body).to.have.property('price');
      expect(response.body).to.have.property('urlImage');
      expect(response.body.name).to.be.equal('Weissbier 1l');
      expect(response.body.price).to.be.equal(23.70);
      expect(response.body.urlImage).to.be.equal('http://localhost:3001/images/weissbier.jpg');
    });
  });
});