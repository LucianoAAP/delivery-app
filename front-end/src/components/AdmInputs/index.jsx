import React from 'react';
import { useAdmin } from '../../hooks';
import { H1, P } from '../FormLogin/style';
import { AdmSection, Select, Form, Input, Button, Label } from './styles';

const AdmInputs = () => {
  const { handleChange, checkAdmin, submitUser, info, bool } = useAdmin();

  return (
    <AdmSection>
      <H1>Cadastrar novo usuário</H1>
      <Form>
        <Label htmlFor="adminName">
          Nome
          <Input
            name="name"
            value={ info.name }
            type="text"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
            onChange={ ({ target }) => handleChange(target) }
          />
        </Label>
        <Label htmlFor="admEmail">
          Email
          <Input
            data-testid="admin_manage__input-email"
            type="email"
            name="email"
            value={ info.email }
            placeholder="seu-email@site.com.br"
            onChange={ ({ target }) => handleChange(target) }
          />
        </Label>
        <Label htmlFor="admPassword">
          Senha
          <Input
            data-testid="admin_manage__input-password"
            type="password"
            name="password"
            placeholder="******"
            value={ info.password }
            onChange={ ({ target }) => handleChange(target) }
          />
        </Label>
        <Label htmlFor="role-select">
          Função
          <Select
            id="role-select"
            name="role"
            value={ info.role }
            onChange={ ({ target }) => handleChange(target) }
            data-testid="admin_manage__select-role"
          >
            <option value="administrator">Administrador</option>
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
          </Select>
        </Label>
        <Button
          type="button"
          data-testid="admin_manage__button-register"
          onClick={ () => submitUser(info) }
          disabled={ checkAdmin(info) }
        >
          Cadastrar
        </Button>
        <P
          data-testid="admin_manage__element-invalid-register"
          hidden={ bool }
        >
          Email já cadastrado
        </P>
      </Form>
    </AdmSection>
  );
};

export default AdmInputs;
