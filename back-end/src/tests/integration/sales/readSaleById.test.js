const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa ReadSaleById', () => {
  let response = [];
  const sales = [
    {
      id: 1,
      totalPrice: "30.00",
      deliveryAddress: "Rua Xablau",
      deliveryNumber: "237",
      saleDate: "1900-01-01T00:00:00.000Z",
      status: "Pendente",
      userId: 3,
      sellerId: 2,
      customer: {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer"
      },
      seller: {
        id: 2,
        name: "Fulana Pereira",
        email: "fulana@deliveryapp.com",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller"
      },
      products: [
        {
          id: 1,
          name: "Skol Lata 250ml",
          price: 2.20,
          urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg",
          orderInfo: {
            quantity: 2
          }
        },
        {
          id: 2,
          name: "Heineken 600ml",
          price: 7.50,
          urlImage: "http://localhost:3001/images/heineken_600ml.jpg",
          orderInfo: {
              quantity: 2
          }
        }
      ]
    }
  ];

  const sale = {
    userId: 3,
    sellerId: 2,
    totalPrice: 30,
    deliveryAddress: 'Rua Xablau',
    deliveryNumber: '237',
    status: 'Pendente',
    products: [{ id: 1, quantity: 2 }, { id: 2, quantity: 2 }],
  };

  before(async () => {
    const token = await chai.request(app).post('/login')
      .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
      .then((res) => res.body.token);
    
    const createdSale = await chai.request(app).post('/sales')
      .send(sale).set('authorization', token);

    const { body: { id } } = createdSale;
    
    response = await chai.request(app).get(`/sales/${id}`)
      .set('authorization', token);
  });

  it('Retorna a lista de vendas correta', () => {
    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
    expect(response.body).to.have.property('userId');
    expect(response.body.userId).to.be.equal(sales[0].userId);
  });
});
