import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import postLogin from '../services/postLogin';

const useLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bool, setBool] = useState(true);

  const navigate = useNavigate();

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

  return { handleChange, email, password, userLogin, bool };
};

export default useLogin;
