import React from 'react';
import { FormLogin, RegisterButton } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const Login = () => (
  <MainTag>
    <FormLogin />
    <RegisterButton />
  </MainTag>
);

export default Login;
