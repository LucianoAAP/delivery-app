import React from 'react';
import { screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import LoginPage from '../../pages/LoginPage';

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
});
