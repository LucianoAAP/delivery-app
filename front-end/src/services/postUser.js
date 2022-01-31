import axios from 'axios';

const postUser = async (name, email, password) => {
  try {
    const axiosPost = await axios.post('http://localhost:3001/users', {
      name,
      email,
      password,
      role: 'customer',
    });

    return axiosPost.data;
  } catch (err) {
    return err;
  }
};

export default postUser;
