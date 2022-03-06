import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import usersAPI from './mocks/usersMock';
import productMock from './mocks/productMock';
import { customerUserInfoMock } from './mocks/localStorageMock';
import LoginPage from '../../pages/LoginPage';

jest.mock("axios", () => ({
  create: jest.fn().mockReturnThis(),
  interceptors: {
    request: { eject: jest.fn(), use: jest.fn() },
    response: { eject: jest.fn(), use: jest.fn() },
  },
  get: jest.fn(() => Promise.resolve()),
  post: jest.fn(() => Promise.resolve()),
}));

describe('Testa página de <Login />', () => {
  it('Testa se consta input para email', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    expect(inputEmail).toBeDefined();
  });

  it('Testa se conta input para senha', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const inputPassword = screen.getByTestId('common_login__input-password');
    expect(inputPassword).toBeDefined();
  });

  it('Testa se botão de login está na tela', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const loginBtn = screen.getByTestId('common_login__button-login');
    expect(loginBtn).toBeDefined();
    expect(loginBtn.innerHTML).toBe('LOGIN');
  });

  it('Testa se botão de cadastrar está na tela', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const register = screen.getByTestId('common_login__button-register');
    expect(register).toBeDefined();
    expect(register.innerHTML).toBe('Ainda não possuo conta');
  });

  it('Testa se as descrições estão na tela', () => {
    renderWithReduxAndRouter(<LoginPage />);
    const title = screen.getByText('Login');
    expect(title).toBeInTheDocument();
    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
    const passwordLabel = screen.getByText('Senha');
    expect(passwordLabel).toBeInTheDocument();
    const copyright = screen.getByText('Fast Delivery');
    expect(copyright).toBeInTheDocument();
  });

  it('Testa botão de logar', async () => {
    axios.get.mockImplementation((path) => Promise
      .resolve(path === '/users' ? { data: usersAPI } : { data: productMock }));
    axios.post.mockResolvedValue({ data: customerUserInfoMock });
    renderWithReduxAndRouter(<LoginPage />);
    const inputEmail = screen.getByTestId('common_login__input-email');
    const inputPassword = screen.getByTestId('common_login__input-password');
    const loginBtn = screen.getByTestId('common_login__button-login');
    userEvent.type(inputEmail, usersAPI[2].email);
    userEvent.type(inputPassword, usersAPI[2].password);
    expect(loginBtn).not.toBeDisabled();
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(customerUserInfoMock);
    await act(async () => userEvent.click(loginBtn));
    expect(axios.post).toHaveBeenCalled();
  });
});
