import React from 'react';
import useLogin from '../../hooks/useLogin';
import checkForm from '../../utils';
import { Button, Section, Input, Label, Main, H1, P } from './style';

const FormLogin = () => {
  const { handleChange, email, password, userLogin, bool } = useLogin();

  return (
    <Main>
      <Section>
        <H1>Login</H1>
        <Label htmlFor="inputEmail">
          Email
          <Input
            name="email"
            value={ email }
            type="text"
            placeholder="email@trybeer.com.br"
            data-testid="common_login__input-email"
            onChange={ ({ target }) => handleChange(target) }
          />
        </Label>
        <Label htmlFor="inputPassword">
          Senha
          <Input
            name="password"
            value={ password }
            type="password"
            placeholder="******"
            data-testid="common_login__input-password"
            onChange={ ({ target }) => handleChange(target) }
          />
        </Label>
        <Button
          disabled={ checkForm(email, password) }
          type="button"
          data-testid="common_login__button-login"
          onClick={ () => userLogin(email, password) }
        >
          LOGIN
        </Button>
        <P
          data-testid="common_login__element-invalid-email"
          hidden={ bool }
        >
          Usuário inválido
        </P>
      </Section>
    </Main>
  );
};

export default FormLogin;
