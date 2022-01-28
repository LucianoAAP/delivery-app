import axios from 'axios';

const postLogin = async (email, password) => {
  try {
    const axiosPost = await axios.post('http://localhost:3001/login', {
      email,
      password,
    });

    console.log(axiosPost.data);
    return axiosPost.data;
  } catch (err) {
    return err;
  }
};

export default postLogin;
