import axios from 'axios';

const postUserAdmin = async ({ name, email, password, role }, token) => {
  try {
    const axiosPost = await axios.post('http://localhost:3001/users/admin',
      { name, email, password, role },
      { headers: { authorization: token } });

    return axiosPost.data;
  } catch (err) {
    return err;
  }
};

export default postUserAdmin;
