import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import CustomerOrders from '../../pages/CustomerOrders';
import customerOrdersMock from './mocks/ordersMock';
import { customerUserInfoMock } from './mocks/localStorageMock';
import getSalesFromCustomer from '../../services/getSalesFromCustomer';
jest.mock('../../services/getSalesFromCustomer');

jest.mock('socket.io-client', () => jest.fn(() => ({
  emit: jest.fn(),
  on: jest.fn(),
})));

describe('Testa CustomerOrders', () => {
  beforeEach(() => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(customerUserInfoMock);
    getSalesFromCustomer.mockResolvedValue(customerOrdersMock);
    renderWithReduxAndRouter(<CustomerOrders />);
  });

  it('Renderiza os componentes', () => {
    const productsNav = screen
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
    userEvent.click(orderNumber);
    expect(window.location.pathname).toBe('/customer/orders/1');
    // const title = await screen.findByText('Detalhes do produto');
    // expect(title).toBeInTheDocument();
  });
});
