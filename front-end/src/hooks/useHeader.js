import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getUserInfo';

const useHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    const userName = getUserInfo('name');
    setUser(userName);
  }, []);

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return { user, logout, navigate };
};

export default useHeader;
