const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa ReadProductById', () => {
  let response = {};
  const product = {
    id: 1,
    name: "Skol Lata 250ml",
    price: "2.20",
    urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg"
  };

  describe('Quando o produto não existe', () => {
    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);
    
      response = await chai.request(app).get('/products/237').set('authorization', token);
    });

    it('Retorna a mensagem de erro correta', () => {
      expect(response).to.have.status(404);
      expect(response.body).to.be.equal('Product does not exist');
    });
  });

  describe('Quando o produto existe', () => {
    before(async () => {
      const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);
    
      response = await chai.request(app).get('/products/1').set('authorization', token);
    });

    it('Retorna a receita correta', () => {
      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal(product);
    });
  });
});