import axios from 'axios';

const USERS_ENDPOINT = 'http://localhost:3001/users';

const getUsers = async () => {
  try {
    const result = await axios.get(USERS_ENDPOINT);

    return result.data;
  } catch (err) {
    console.log({ error: err });
  }
};

export default getUsers;
