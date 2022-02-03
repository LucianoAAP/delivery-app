import api from './API';

const getSaleFromCustomer = async (customer) => {
  try {
    const result = await api.get('/sales');

    return result.data.filter((sale) => sale.userId === customer);
  } catch (err) {
    console.log({ error: err });
  }
};

export default getSaleFromCustomer;
