import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import CustomerOrders from '../../pages/CustomerOrders';
import usersAPI from './mocks/usersMock';
import customerOrdersMock from './mocks/ordersMock';
import { customerUserInfoMock } from './mocks/localStorageMock';

jest.mock('socket.io-client', () => jest.fn(() => ({
  emit: jest.fn(),
  on: jest.fn(),
})));

jest.mock("axios", () => ({
  create: jest.fn().mockReturnThis(),
  interceptors: {
    request: { eject: jest.fn(), use: jest.fn() },
    response: { eject: jest.fn(), use: jest.fn() },
  },
  get: jest.fn(() => Promise.resolve()),
}));

describe('Testa CustomerOrders', () => {
  beforeEach(async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(customerUserInfoMock);
    axios.get.mockImplementation((path) => Promise
      .resolve(path === '/users' ? { data: usersAPI } : { data: customerOrdersMock }));
    await act(async () => renderWithReduxAndRouter(<CustomerOrders />));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Renderiza os componentes', () => {
    const productsNav = screen
      .getByTestId('customer_products__element-navbar-link-products');
    const ordersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    const userName = screen
      .getByTestId('customer_products__element-navbar-user-full-name');
      const logoutNav = screen
      .getByTestId('customer_products__element-navbar-link-logout');
    const orderNumber = screen.getByTestId('customer_orders__element-order-id-1');
    const orderStatus = screen.getByTestId('customer_orders__element-delivery-status-1');
    const orderDate = screen.getByTestId('customer_orders__element-order-date-1');
    const cardPrice = screen.getByTestId('customer_orders__element-card-price-1');
    expect(productsNav).toBeInTheDocument();
    expect(ordersNav).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(logoutNav).toBeInTheDocument();
    expect(orderNumber).toBeInTheDocument();
    expect(orderStatus).toBeInTheDocument();
    expect(orderDate).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
  });

  it('Renderiza as informações corretas', async () => {
    const userName = screen
      .getByTestId('customer_products__element-navbar-user-full-name');
    const orderNumber = screen.getByTestId('customer_orders__element-order-id-1');
    const orderStatus = screen.getByTestId('customer_orders__element-delivery-status-1');
    expect(userName.innerHTML).toBe('Cliente Zé Birita');
    expect(orderNumber.innerHTML).toBe('0001');
    expect(orderStatus.innerHTML).toBe('Pendente');
  });
});
