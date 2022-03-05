import React from 'react';
import { screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import usersAPI from './mocks/usersMock';
import { admUserInfoMock } from './mocks/localStorageMock';
import getUsers from '../../services/getUsers';
import AdmScreen from '../../pages/AdmScreen';
jest.mock('../../services/getUsers');

describe('Testa página de <AdmScreen />', () => {
  beforeEach(async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(admUserInfoMock);

    getUsers.mockResolvedValue(usersAPI);
    renderWithReduxAndRouter(<AdmScreen />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Testa se botões do header aparecem na tela', async () => {
    const headerUserName = await screen
      .findByTestId('customer_products__element-navbar-user-full-name');

    const headerManageUser = await screen
      .findByTestId('customer_products__element-navbar-link-orders');

    const headerUserLogout = await screen
      .findByTestId('customer_products__element-navbar-link-logout');

    expect(headerUserName).toBeDefined();
    expect(headerUserName.innerHTML).toBe('Delivery App Admin');
    expect(headerManageUser).toBeDefined();
    expect(headerManageUser.innerHTML).toBe('Gerenciar Usuários');
    expect(headerUserLogout).toBeDefined();
    expect(headerUserLogout.innerHTML).toBe('Sair');
  });

  it('Testa formulário de novo usuário aparece na tela', () => {
    const title = screen.getByText('Cadastrar novo usuário');
    expect(title).toBeInTheDocument();
    const newUserName = screen.getByLabelText('Nome');
    expect(newUserName).toBeInTheDocument();
    const newUserEmail = screen.getByLabelText('Email');
    expect(newUserEmail).toBeInTheDocument();
    const newUserPassword = screen.getByLabelText('Senha');
    expect(newUserPassword).toBeInTheDocument();
    const newUserRole = screen.getByLabelText('Função');
    expect(newUserRole).toBeInTheDocument();
    const registerButton = screen.getByTestId('admin_manage__element-invalid-register');
    expect(registerButton).toBeInTheDocument();
  });

  it('Testa se a tabela de usuários aparece na tela', async () => {
    const itemHead = screen.getByRole('row', { name: /Id/ });
    expect(itemHead).toBeInTheDocument();
    const nameHead = screen.getByRole('row', { name: /Nome/ });
    expect(nameHead).toBeInTheDocument();
    const emailHead = screen.getByRole('row', { name: /E-mail/ });
    expect(emailHead).toBeInTheDocument();
    const roleHead = screen.getByRole('row', { name: /Tipo/ });
    expect(roleHead).toBeInTheDocument();
    const deleteInstances = screen.getAllByRole('row', { name: /Excluir/ });
    expect(deleteInstances).toHaveLength(4);
    const userNumber1 = screen.getByTestId('admin_manage__element-user-table-item-number-0');
    expect(userNumber1).toBeInTheDocument();
    expect(userNumber1.innerHTML).toBe('1');
    const userNumber2 = screen.getByTestId('admin_manage__element-user-table-item-number-1');
    expect(userNumber2).toBeInTheDocument();
    expect(userNumber2.innerHTML).toBe('2');
    const userNumber3 = screen.getByTestId('admin_manage__element-user-table-item-number-2');
    expect(userNumber3).toBeInTheDocument();
    expect(userNumber3.innerHTML).toBe('3');
    const userName1 = screen.getByTestId('admin_manage__element-user-table-name-0');
    expect(userName1).toBeInTheDocument();
    expect(userName1.innerHTML).toBe('Delivery App Admin');
    const userName2 = screen.getByTestId('admin_manage__element-user-table-name-1');
    expect(userName2).toBeInTheDocument();
    expect(userName2.innerHTML).toBe('Fulana Pereira');
    const userName3 = screen.getByTestId('admin_manage__element-user-table-name-2');
    expect(userName3).toBeInTheDocument();
    expect(userName3.innerHTML).toBe('Cliente Zé Birita');
    const userEmail1 = screen.getByTestId('admin_manage__element-user-table-email-0');
    expect(userEmail1).toBeInTheDocument();
    expect(userEmail1.innerHTML).toBe('adm@deliveryapp.com');
    const userEmail2 = screen.getByTestId('admin_manage__element-user-table-email-1');
    expect(userEmail2).toBeInTheDocument();
    expect(userEmail2.innerHTML).toBe('fulana@deliveryapp.com');
    const userEmail3 = screen.getByTestId('admin_manage__element-user-table-email-2');
    expect(userEmail3).toBeInTheDocument();
    expect(userEmail3.innerHTML).toBe('zebirita@email.com');
    const userRole1 = screen.getByTestId('admin_manage__element-user-table-role-0');
    expect(userRole1).toBeInTheDocument();
    expect(userRole1.innerHTML).toBe('administrator');
    const userRole2 = screen.getByTestId('admin_manage__element-user-table-role-1');
    expect(userRole2).toBeInTheDocument();
    expect(userRole2.innerHTML).toBe('seller');
    const userRole3 = screen.getByTestId('admin_manage__element-user-table-role-2');
    expect(userRole3).toBeInTheDocument();
    expect(userRole3.innerHTML).toBe('customer');
    const removeButton1 = screen.getByTestId('admin_manage__element-user-table-remove-0');
    expect(removeButton1).toBeInTheDocument();
    expect(removeButton1.innerHTML).toContain('Excluir');
    const removeButton2 = screen.getByTestId('admin_manage__element-user-table-remove-1');
    expect(removeButton2).toBeInTheDocument();
    expect(removeButton2.innerHTML).toContain('Excluir');
    const removeButton3 = screen.getByTestId('admin_manage__element-user-table-remove-2');
    expect(removeButton3).toBeInTheDocument();
    expect(removeButton3.innerHTML).toContain('Excluir');
  });
});
