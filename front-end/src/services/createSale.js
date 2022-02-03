import api from './API';

const createSale = async (body) => {
  try {
    const bodyConfig = body;

    const axiosPost = await api.post('/sales', bodyConfig);

    return { data: axiosPost.data };
  } catch (err) {
    console.log(err);
    return { error: err };
  }
};

export default createSale;
