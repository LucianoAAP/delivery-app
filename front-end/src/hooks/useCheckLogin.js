import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';
import getUsers from '../services/getUsers';

const useCheckLogin = (role) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthorization = async (userInfo) => {
      const users = await getUsers();
      if (users.error || !userInfo.id) {
        localStorage.removeItem('user');
        return navigate('/login');
      }
      const user = users.find((userData) => userData.id === userInfo.id);
      if (!user) {
        localStorage.removeItem('user');
        return navigate('/login');
      }
    };

    const userInfo = getUserInfo();

    if (!userInfo.role || userInfo.role !== role) return navigate('/login');

    checkAuthorization(userInfo);
  }, [navigate, role]);
};

export default useCheckLogin;
