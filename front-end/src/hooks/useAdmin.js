import { useState } from 'react';
import postUserAdmin from '../services/postUserAdmin';
import getUserInfo from '../utils/getLocalStorage';

const useAdmin = () => {
  const [bool, setBool] = useState(true);
  const [info, setInfo] = useState({
    name: '', email: '', password: '', role: 'administrator',
  });

  const handleChange = (target) => {
    const { name, value } = target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const submitUser = async (admInfo) => {
    const token = getUserInfo('token');
    const result = await postUserAdmin(admInfo, token);
    if (!result) return setBool(false);
    setInfo({
      name: '', email: '', password: '', role: 'administrator',
    });
    return setBool(true);
  };

  const checkAdmin = (admInfo) => {
    const { name, email, password } = admInfo;
    const minPass = 6;
    const maxName = 12;
    const regex = /^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/;

    if (!name || name.length < maxName) return true;

    if (!email || !regex.test(email)) {
      return true;
    }

    if (!password || password.length < minPass) {
      return true;
    }
  };

  return { handleChange, checkAdmin, submitUser, info, bool };
};

export default useAdmin;
