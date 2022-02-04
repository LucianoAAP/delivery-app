const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa updateProduct', () => {
  let response = {};
  let product = {};
  const newProduct = {
    name: 'Weissbier 2l',
    price: '7.23',
    urlImage: 'http://localhost:3001/images/weissbier2.jpg',
  };

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

      response = await chai.request(app).put(`/products/${id}`).send(newProduct)
        .set('authorization', token);
      
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

  it('Atualiza produto no banco', async () => {
    const { id } = product;
    expect(product).to.be.deep.equal({ id, ...newProduct });
  });

  it('Retorna o produto correto', () => {
    expect(response).to.have.status(204);
    expect(response.body).to.be.deep.equal({});
  });
});
