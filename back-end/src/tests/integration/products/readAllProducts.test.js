const chai = require('chai');
// const { stub } = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

const app = require('../../../api/app');

describe('Testa ReadAllProducts', () => {
  let response = [];
  const products = [
    {
        id: 1,
        name: "Skol Lata 250ml",
        price: "2.20",
        urlImage: "http://localhost:3001/images/skol_lata_350ml.jpg"
    },
    {
        id: 2,
        name: "Heineken 600ml",
        price: "7.50",
        urlImage: "http://localhost:3001/images/heineken_600ml.jpg"
    },
    {
        id: 3,
        name: "Antarctica Pilsen 300ml",
        price: "2.49",
        urlImage: "http://localhost:3001/images/antarctica_pilsen_300ml.jpg"
    },
    {
        id: 4,
        name: "Brahma 600ml",
        price: "7.50",
        urlImage: "http://localhost:3001/images/brahma_600ml.jpg"
    },
    {
        id: 5,
        name: "Skol 269ml",
        price: "2.19",
        urlImage: "http://localhost:3001/images/skol_269ml.jpg"
    },
    {
        id: 6,
        name: "Skol Beats Senses 313ml",
        price: "4.49",
        urlImage: "http://localhost:3001/images/skol_beats_senses_313ml.jpg"
    },
    {
        id: 7,
        name: "Becks 330ml",
        price: "4.99",
        urlImage: "http://localhost:3001/images/becks_330ml.jpg"
    },
    {
        id: 8,
        name: "Brahma Duplo Malte 350ml",
        price: "2.79",
        urlImage: "http://localhost:3001/images/brahma_duplo_malte_350ml.jpg"
    },
    {
        id: 9,
        name: "Becks 600ml",
        price: "8.89",
        urlImage: "http://localhost:3001/images/becks_600ml.jpg"
    },
    {
        id: 10,
        name: "Skol Beats Senses 269ml",
        price: "3.57",
        urlImage: "http://localhost:3001/images/skol_beats_senses_269ml.jpg"
    },
    {
        id: 11,
        name: "Stella Artois 275ml",
        price: "3.49",
        urlImage: "http://localhost:3001/images/stella_artois_275ml.jpg"
    }
  ];

  describe('Quando não há busca por termo', () => {
    before(async () => {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      response = await chai.request(app).get('/products').set('authorization', token);
    });
  
    it('Retorna a lista de produtos', () => {
      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal(products);
    });
  });

  describe('Quando não há busca por termo', () => {
    before(async () => {
      const token = await chai.request(app).post('/login')
        .send({ email: 'adm@deliveryapp.com', password: '--adm2@21!!--' })
        .then((res) => res.body.token);
      
      response = await chai.request(app).get('/products/?q=Skol Lata 250ml')
        .set('authorization', token);
    });

    it('Retorna a lista de produtos correta', () => {
      expect(response).to.have.status(200);
      expect(response.body).to.be.deep.equal([products[0]]);
    });
  });
});
