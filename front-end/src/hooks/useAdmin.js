import { useState } from 'react';
import { useDispatch } from 'react-redux';
import postUserAdmin from '../services/postUserAdmin';
import { addNewUser } from '../redux/actions/users';

const useAdmin = () => {
  const [bool, setBool] = useState(true);
  const [info, setInfo] = useState({
    name: '', email: '', password: '', role: 'administrator',
  });
  const dispatch = useDispatch();

  const handleChange = (target) => {
    const { name, value } = target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const submitUser = async (admInfo) => {
    const result = await postUserAdmin(admInfo);
    if (!result) return setBool(false);
    if (!result.id) return setBool(false);
    setInfo({
      name: '', email: '', password: '', role: 'administrator',
    });
    dispatch(addNewUser(result));
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

  return {
    handleChange, checkAdmin, submitUser, info, bool,
  };
};

export default useAdmin;
