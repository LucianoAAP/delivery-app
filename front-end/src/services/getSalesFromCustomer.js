import api from './API';

const getSalesFromCustomer = async (customer) => {
  try {
    const result = await api.get('/sales');

    return result.data.filter((sale) => sale.userId === customer);
  } catch (err) {
    console.log({ error: err });
    return { error: err.response };
  }
};

export default getSalesFromCustomer;
