import React from 'react';
import { screen } from '@testing-library/react';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import usersAPI from './mocks/users';
import { admUserInfoMock } from './mocks/localStorageMock';
import getUsers from '../../services/getUsers';
import AdmScreen from '../../pages/AdmScreen';
jest.mock('../../services/getUsers');

describe('Testa página de <AdmScreen />', () => {
  beforeAll(async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(admUserInfoMock);

    getUsers.mockResolvedValue(usersAPI);
    renderWithReduxAndRouter(<AdmScreen />);
  });

  describe('Testa elementos do header', () => {
    it('Testa botões do header', async () => {
      const headerUserName = await screen
      .findByTestId('customer_products__element-navbar-user-full-name');

      const headerManageUser = await screen
        .findByTestId('customer_products__element-navbar-link-orders');

      const headerUserLogout = await screen
        .findByTestId('customer_products__element-navbar-link-logout');

      expect(headerUserName).toBeDefined();
      expect(headerManageUser).toBeDefined();
      expect(headerUserLogout).toBeDefined();
    });
  });
});
