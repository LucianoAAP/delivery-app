import axios from 'axios';

const createSale = async (body) => {
  try {
    const { token, id } = JSON.parse(localStorage.getItem('user'));
    const headersconfig = {
      headers: {
        Authorization: token,
      },
    };

    const bodyConfig = {
      userId: id,
      status: 'Pendente',
      ...body,
    };

    const axiosPost = await axios.post('http://localhost:3001/sales', bodyConfig, headersconfig);

    return axiosPost.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default createSale;
