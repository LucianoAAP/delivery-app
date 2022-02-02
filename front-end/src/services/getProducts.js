import api from './API';

const getProducts = async () => {
  try {
    const result = await api.get('/products');

    return result.data;
  } catch (err) {
    console.log({ error: err });
  }
};

export default getProducts;
