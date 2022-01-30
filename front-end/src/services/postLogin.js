import axios from 'axios';

const postLogin = async (email, password) => {
  try {
    const axiosPost = await axios.post('http://localhost:3001/login', {
      email,
      password,
    });

    return axiosPost.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default postLogin;
