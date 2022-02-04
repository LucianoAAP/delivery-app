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

describe('Testa CreateSales', () => {
  describe('Quando as entradas são inválidas', () => {
    let response = {};
    let sales = [];

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
          .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
          .then((res) => res.body.token);
        
        response = await chai.request(app).post('/sales').send({
          ...sale,
          deliveryAddress: '',
        }).set('authorization', token);

        sales = await chai.request(app).get('/sales').set('authorization', token)
          .then((res) => res.body);
      } catch (e) {
        console.log(e.message);
      }
    });

    it('Retorna a mensagem de erro correta', () => {
      expect(response).to.have.status(400);
      expect(response.body).to.be
        .deep.equal('"deliveryAddress" is not allowed to be empty');
    });

    it('Não cria venda no banco', async () => {
      const wasCreated = sales.some((sale) => sale.sellerId === 2);
      expect(wasCreated).to.be.false;
    });
  });

  describe('Quando é criada com sucesso', () => {
    let response = {};
    let newSale = {};

    before(async () => {
      try {
        const token = await chai.request(app).post('/login')
          .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
          .then((res) => res.body.token);
        
        response = await chai.request(app).post('/sales').send(sale)
          .set('authorization', token);

        const { body : { id } } = response;

        newSale = await chai.request(app).get(`/sales/${id}`)
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

    it('Cria venda no banco', async () => {
      expect(newSale).to.be.not.null;
    });

    it('Retorna a resposta correta', () => {
      expect(response).to.have.status(201);
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.property('userId');
      expect(response.body.userId).to.be.equal(3);
    });
  });
});
