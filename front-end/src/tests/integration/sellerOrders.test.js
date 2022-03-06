import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import usersAPI from './mocks/usersMock';
import SellerOrders from '../../pages/SellerOrders';
import sellerOrdersMock from './mocks/ordersMock';
import { sellerUserInfoMock } from './mocks/localStorageMock';

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

describe('Testa SellerOrders', () => {
  beforeEach(async () => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(sellerUserInfoMock);
    axios.get.mockImplementation((path) => Promise
      .resolve(path === '/users' ? { data: usersAPI } : { data: sellerOrdersMock }));
    await act(async () => renderWithReduxAndRouter(<SellerOrders />));
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Renderiza os componentes', () => {
    const ordersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    const userName = screen
      .getByTestId('customer_products__element-navbar-user-full-name');
      const logoutNav = screen
      .getByTestId('customer_products__element-navbar-link-logout');
    const orderNumber = screen.getByTestId('seller_orders__element-order-id-1');
    const orderStatus = screen.getByTestId('seller_orders__element-delivery-status-1');
    const orderDate = screen.getByTestId('seller_orders__element-order-date-1');
    const cardPrice = screen.getByTestId('seller_orders__element-card-price-1');
    const cardAddress = screen.getByTestId('seller_orders__element-card-address-1');
    expect(ordersNav).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(logoutNav).toBeInTheDocument();
    expect(orderNumber).toBeInTheDocument();
    expect(orderStatus).toBeInTheDocument();
    expect(orderDate).toBeInTheDocument();
    expect(cardPrice).toBeInTheDocument();
    expect(cardAddress).toBeInTheDocument();
  });

  it('Renderiza as informações corretas', () => {
    const userName = screen
      .getByTestId('customer_products__element-navbar-user-full-name');
    const orderNumber = screen.getByTestId('seller_orders__element-order-id-1');
    const orderStatus = screen.getByTestId('seller_orders__element-delivery-status-1');
    expect(userName.innerHTML).toBe('Fulana Pereira');
    expect(orderNumber.innerHTML).toBe('0001');
    expect(orderStatus.innerHTML).toBe('Pendente');
  });
});
