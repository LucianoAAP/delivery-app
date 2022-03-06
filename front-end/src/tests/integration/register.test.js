import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import usersAPI from './mocks/usersMock';
import productMock from './mocks/productMock';
import newUserMock from './mocks/newUserMock';
import Register from '../../pages/Register';

jest.mock("axios", () => ({
  create: jest.fn().mockReturnThis(),
  interceptors: {
    request: { eject: jest.fn(), use: jest.fn() },
    response: { eject: jest.fn(), use: jest.fn() },
  },
  get: jest.fn(() => Promise.resolve()),
  post: jest.fn(() => Promise.resolve()),
}));

describe('Testa página de <Register />', () => {
  beforeEach(async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(newUserMock);

    axios.get.mockImplementation((path) => Promise
      .resolve(path === '/users' ? { data: usersAPI } : { data: productMock }));
    axios.post.mockResolvedValue({ data: newUserMock });
    renderWithReduxAndRouter(<Register />);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Testa se consta input para nome', () => {
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeDefined();
    const nameLabel = screen.getByText('Nome');
    expect(nameLabel).toBeInTheDocument();
  });

  it('Testa se consta input para email', () => {
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeDefined();
    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
  });

  it('Testa se consta input para senha', () => {
    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeDefined();
    const passwordLabel = screen.getByText('Senha');
    expect(passwordLabel).toBeInTheDocument();
  });

  it('Testa se consta botão para cadastro', () => {
    const registerBtn = screen.getByTestId('common_register__button-register');
    expect(registerBtn).toBeDefined();
    expect(registerBtn.innerHTML).toBe('CADASTRAR');
  });

  it('Testa chamada à API', async () => {
    const inputName = screen.getByTestId('common_register__input-name');
    const inputEmail = screen.getByTestId('common_register__input-email');
    const inputPassword = screen.getByTestId('common_register__input-password');
    const registerBtn = screen.getByTestId('common_register__button-register');
    userEvent.type(inputName, 'Novo Usuário');
    userEvent.type(inputEmail, 'newuser@deliveryapp.com');
    userEvent.type(inputPassword, 'xablau');
    await act(async () => userEvent.click(registerBtn));
    expect(axios.post).toHaveBeenCalled();
  });
});
