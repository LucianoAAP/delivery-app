import api from './API';

const getSalesFromSeller = async (seller) => {
  try {
    const result = await api.get('/sales');

    return result.data.filter((sale) => sale.sellerId === seller);
  } catch (err) {
    console.log({ error: err });
  }
};

export default getSalesFromSeller;
