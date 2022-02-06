const orders = [
  {
    id: 1,
    totalPrice: '30.00',
    deliveryAddress: 'Rua Xablau',
    deliveryNumber: '237',
    saleDate: '1900-01-01T00:00:00.000Z',
    status: 'Pendente',
    userId: 3,
    sellerId: 2,
    customer: {
      id: 3,
      name: 'Cliente Zé Birita',
      email: 'zebirita@email.com',
      password: '1c37466c159755ce1fa181bd247cb925',
      role: 'customer',
    },
    seller: {
      id: 2,
      name: 'Fulana Pereira',
      email: 'fulana@deliveryapp.com',
      password: '3c28d2b0881bf46457a853e0b07531c6',
      role: 'seller',
    },
    products: [
      {
        id: 1,
        name: 'Skol Lata 250ml',
        price: '2.20',
        urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
        orderInfo: {
          quantity: 2,
        },
      },
      {
        id: 2,
        name: 'Heineken 600ml',
        price: 7.50,
        urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
        orderInfo: {
          quantity: 2,
        },
      },
    ],
  },
];

export default orders;
