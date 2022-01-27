import axios from 'axios';

const PRODUCTS_ENDPOINT = 'http://localhost:3001/products';

const getProducts = async () => {
  try {
    const result = await axios.get(PRODUCTS_ENDPOINT);

    return result.data;
  } catch (err) {
    console.log({ error: err });
  }
};

export default getProducts;
