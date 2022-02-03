import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';

const useCheckLogin = (role) => {
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = getUserInfo();

    if (!userInfo.role || userInfo.role !== role) return navigate('/login');
  }, [navigate, role]);
};

export default useCheckLogin;
