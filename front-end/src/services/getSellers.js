import api from './API';

const getSellers = async () => {
  try {
    const result = await api.get('/users');

    const filteredSellers = await result.data.filter((e) => e.role === 'seller');

    return filteredSellers;
  } catch (err) {
    console.log({ error: err });
  }
};

export default getSellers;
