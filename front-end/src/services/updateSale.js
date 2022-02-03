import api from './API';

const updateSale = async (sale) => {
  try {
    const axiosPut = await api.put(`http://localhost:3001/sales/${sale.id}`, sale);

    return axiosPut.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default updateSale;
