import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../utils/getLocalStorage';

const useHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const userName = getUserInfo('name');
    setUser(userName);
  }, []);

  const logout = () => {
    localStorage.removeItem('userInfo');
    navigate('/login');
  };

  return { user, sideBar, setSideBar, logout, navigate };
};

export default useHeader;
