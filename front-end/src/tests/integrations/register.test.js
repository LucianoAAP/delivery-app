import React from 'react';
import { screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import Register from '../../pages/Register';

describe('Testa página de <Register />', () => {
  it('Testa se consta input para nome', () => {
    renderWithReduxAndRouter(<Register />);
    const inputName = screen.getByTestId('common_register__input-name');
    expect(inputName).toBeDefined();
  });

  it('Testa se consta input para email', () => {
    renderWithReduxAndRouter(<Register />);
    const inputEmail = screen.getByTestId('common_register__input-email');
    expect(inputEmail).toBeDefined();
  });

  it('Testa se consta input para senha', () => {
    renderWithReduxAndRouter(<Register />);
    const inputPassword = screen.getByTestId('common_register__input-password');
    expect(inputPassword).toBeDefined();
  });

  it('Testa se consta botão para cadastro', () => {
    renderWithReduxAndRouter(<Register />);
    const registerBtn = screen.getByTestId('common_register__button-register');
    expect(registerBtn).toBeDefined();
  });
});
