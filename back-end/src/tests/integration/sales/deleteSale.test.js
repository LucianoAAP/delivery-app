const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

const sale = {
  userId: 3,
  sellerId: 2,
  totalPrice: 30.00,
  deliveryAddress: 'Rua Xablau',
  deliveryNumber: '237',
  status: 'Pendente',
  products: [{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }],
};

describe('Testa DeleteSale', () => {
  let response = {};
  let missingSale = {};

  before(async () => {
    try {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      const createdSale = await chai.request(app).post('/sales').send(sale)
        .set('authorization', token);

      const { body : { id } } = createdSale;

      response = await chai.request(app).delete(`/sales/${id}`)
        .set('authorization', token);

      missingSale = await chai.request(app)
        .get(`/sales/${id}`).set('authorization', token);
    } catch (e) {
      console.log(e.message);
    }
  });

  it('Deleta venda no banco', async () => {
    expect(missingSale).to.have.status(404);
    expect(missingSale.body).to.be.deep.equal('not found');
  });

  it('Retorna a resposta correta', () => {
    expect(response).to.have.status(204);
    expect(response.body).to.be.deep.equal({});
  });
});
