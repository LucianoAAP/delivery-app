const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa updateSale', () => {
  let response = {};
  let sale = {};
  const newSale = {
    userId: 3,
    sellerId: 2,
    totalPrice: '30.00',
    deliveryAddress: 'Rua Xablau',
    deliveryNumber: '237',
    status: 'Preparando',
    products: [{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }],
  };

  before(async () => {
    try {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      const createdSale = await chai.request(app).post('/sales').send({
        userId: 3,
        sellerId: 2,
        totalPrice: 30,
        deliveryAddress: 'Rua Xablau',
        deliveryNumber: '237',
        status: 'Pendente',
        products: [{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }],
      }).set('authorization', token);

      const { body : { id } } = createdSale;

      response = await chai.request(app).put(`/sales/${id}`).send(newSale)
        .set('authorization', token);
      
      sale = await chai.request(app).get(`/sales/${id}`)
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

      await chai.request(app).delete(`/sales/${id}`).set('authorization', token);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('Atualiza venda no banco', async () => {
    expect(sale).to.be.an('object');
    expect(sale).to.have.property('status');
    expect(sale.status).to.be.equal('Preparando');
  });

  it('Retorna a venda correta', () => {
    expect(response).to.have.status(200);
    expect(response.body).to.be.deep.equal({});
  });
});
