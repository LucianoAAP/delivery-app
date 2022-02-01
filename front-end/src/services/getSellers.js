import axios from 'axios';

const USERS_ENDPOINTS = 'http://localhost:3001/users';

const getSellers = async () => {
  try {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: {
        Authorization: token,
      },
    };

    const result = await axios.get(USERS_ENDPOINTS, config);

    const filteredSellers = await result.data.filter((e) => e.role === 'seller');

    return filteredSellers;
  } catch (err) {
    console.log({ error: err });
  }
};

export default getSellers;
