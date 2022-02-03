import api from './API';

const deleteUser = async (id) => {
  try {
    const deletedUser = await api.delete(`/users/${id}`);
    return deletedUser.data;
  } catch (error) {
    console.log(error);
  }
};

export default deleteUser;
