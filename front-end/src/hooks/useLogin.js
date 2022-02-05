import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import postLogin from '../services/postLogin';
import getUserInfo from '../utils/getUserInfo';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bool, setBool] = useState(true);

  const navigate = useNavigate();

  const generateCopyright = () => (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      style={ { fontSize: '12px' } }
    >
      {'Copyright © '}
      <Link to="/" color="inherit" href="https://material-ui.com/" style={ { fontSize: '14px' } }>
        Fast Delivery
      </Link>
      {' '}
      {new Date().getFullYear()}
      .
    </Typography>
  );

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo) {
      switch (userInfo.role) {
      case 'customer':
        navigate('/customer/products');
        break;
      case 'seller':
        navigate('/seller/orders');
        break;
      case 'administrator':
        navigate('/admin/manage');
        break;
      default:
        break;
      }
    }
  }, [navigate]);

  const handleChange = (target) => {
    if (target.name === 'email') {
      return setEmail(target.value);
    }

    return setPassword(target.value);
  };

  const userLogin = async (emailUser, passwordUser) => {
    const result = await postLogin(emailUser, passwordUser);
    if (!result.token) return setBool(false);

    const userInfo = JSON.stringify(result);
    localStorage.setItem('user', userInfo);

    switch (result.role) {
    case 'customer':
      return navigate('/customer/products');
    case 'seller':
      return navigate('/seller/orders');
    default:
      return navigate('/admin/manage');
    }
  };

  return { handleChange, email, password, userLogin, bool, generateCopyright };
};

export default useLogin;
