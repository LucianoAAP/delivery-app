import React from 'react';
import { useLogin } from '../../hooks';
import checkForm from '../../utils';
import { Button, Section, Input,
  Label, Main, H1, P, Logo, ButtonsContainer, Typography } from './style';
import RegisterButton from '../RegisterButton';

const FormLogin = () => {
  const { handleChange, email, password,
    userLogin, bool, generateCopyright } = useLogin();

  return (
    <Main>
      <Section>
        <Logo src="https://cdn.discordapp.com/attachments/888025163139002382/939188740331536384/logoDelivery.png" alt="Logo" />
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
        <ButtonsContainer>
          <Button
            disabled={ checkForm(email, password) }
            type="button"
            data-testid="common_login__button-login"
            onClick={ () => userLogin(email, password) }
          >
            LOGIN
          </Button>
          <RegisterButton />
          <P
            data-testid="common_login__element-invalid-email"
            hidden={ bool }
          >
            Usuário inválido
          </P>
        </ButtonsContainer>
        <Typography>{generateCopyright()}</Typography>
      </Section>
    </Main>
  );
};

export default FormLogin;
