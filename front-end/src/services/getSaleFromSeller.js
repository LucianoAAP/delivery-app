import api from './API';

const getSaleFromSeller = async (seller) => {
  try {
    const result = await api.get('/sales');

    return result.data.filter((sale) => sale.sellerId === seller);
  } catch (err) {
    console.log({ error: err });
  }
};

export default getSaleFromSeller;
