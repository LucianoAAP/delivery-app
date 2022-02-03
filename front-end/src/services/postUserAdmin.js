import api from './API';

const postUserAdmin = async (adminBody) => {
  try {
    const axiosPost = await api.post('/users/admin', adminBody);

    return axiosPost.data;
  } catch (err) {
    return err;
  }
};

export default postUserAdmin;
