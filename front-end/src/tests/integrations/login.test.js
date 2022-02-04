import React from 'react';
import { screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import Login from '../../pages/LoginPage';

describe('Testa página de <Login />', () => {
  it('Testa se consta input para email', () => {
    renderWithReduxAndRouter(<Login />);
    const inputEmail = screen.getByRole('textbox');
    expect(inputEmail).toBeInTheDocument();
  });

  it('Testa se conta input para senha', () => {
    renderWithReduxAndRouter(<Login />);
    const inputPassword = screen.getByPlaceholderText(/\*\*\*\*\*\*/i);
    expect(inputPassword).toBeDefined();
  });

  it('Testa se botão de login está na tela', () => {
    renderWithReduxAndRouter(<Login />);
    const loginBtn = screen.getByRole('button', {  name: /login/i });
    expect(loginBtn).toBeDefined();
  });
});
