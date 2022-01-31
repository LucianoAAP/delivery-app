import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';
import { Div, Section, H1, Input, Label, BtnRegister, P } from './style';

const RegisterForm = () => {
  const { info, bool, handleChange, checkLogin, handleClick } = useRegisterForm();

  return (
    <Div>
      <Section>
        <H1>Cadastro</H1>
        <Label htmlFor="name">
          Nome
          <Input
            id="name"
            name="name"
            onChange={ ({ target }) => handleChange(target) }
            value={ info.name }
            type="text"
            data-testid="common_register__input-name"
          />
        </Label>
        <Label htmlFor="email">
          Email
          <Input
            id="email"
            name="email"
            onChange={ ({ target }) => handleChange(target) }
            value={ info.email }
            type="text"
            data-testid="common_register__input-email"
          />
        </Label>
        <Label htmlFor="password">
          Senha
          <Input
            id="password"
            name="password"
            onChange={ ({ target }) => handleChange(target) }
            value={ info.password }
            type="password"
            data-testid="common_register__input-password"
          />
        </Label>
        <BtnRegister
          data-testid="common_register__button-register"
          type="button"
          disabled={ checkLogin(info) }
          onClick={ () => handleClick(info) }
        >
          CADASTRAR
        </BtnRegister>
        <P
          data-testid="common_register__element-invalid_register"
          hidden={ bool }
        >
          Nome ou Email já cadastrado
        </P>
      </Section>
    </Div>
  );
};

export default RegisterForm;
