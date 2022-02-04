const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa DeleteProduct', () => {
  let response = {};
  let missingProduct = {};

  before(async () => {
    try {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      const createdProduct = await chai.request(app).post('/products').send({
        name: 'Weissbier 1l',
        price: 23.70,
        urlImage: 'http://localhost:3001/images/weissbier.jpg',
      }).set('authorization', token);

      const { body : { id } } = createdProduct;

      response = await chai.request(app).delete(`/products/${id}`)
        .set('authorization', token);

      missingProduct = await chai.request(app)
        .get(`/products/${id}`).set('authorization', token);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('Deleta produto no banco', () => {
    expect(missingProduct).to.have.status(404);
    expect(missingProduct.body).to.be.equal('Product does not exist');
  });

  it('Retorna a resposta correta', () => {
    expect(response).to.have.status(204);
    expect(response.body).to.be.deep.equal({});
  });
});
