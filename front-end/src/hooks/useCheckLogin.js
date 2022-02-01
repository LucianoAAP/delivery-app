import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getLocalStorage';

const useCheckLogin = (role) => {
  const navigate = useNavigate();
  useEffect(() => {
    const getUser = getUserInfo();

    if (!getUser.role || getUser.role !== role) return navigate('/login');
  }, [navigate, role]);
};

export default useCheckLogin;
