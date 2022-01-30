import { useNavigate } from 'react-router-dom';

const useRegisterButton = () => {
  const navigate = useNavigate();

  const redirectRegister = () => navigate('/register');

  return { redirectRegister };
};

export default useRegisterButton;
