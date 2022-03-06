import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import App from '../../App';
import usersAPI from './mocks/usersMock';
import productMock from './mocks/productMock';
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
  put: jest.fn(() => Promise.resolve()),
}));

describe('Testa SellerOrderDetails', () => {
  beforeEach(() => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(sellerUserInfoMock);
    axios.get.mockImplementation((path) => {
      if (path === '/users') return Promise.resolve({ data: usersAPI });
      if (path === '/products') return Promise.resolve({ data: productMock });
      return Promise.resolve({ data: sellerOrdersMock });
    });
    axios.put.mockResolvedValue({ data: true });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('Renderiza os componentes', async () => {
    renderWithReduxAndRouter(<App />);
    const sellerOrdersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    userEvent.click(sellerOrdersNav);
    expect(window.location.pathname).toBe('/seller/orders');
    const orderNumber = await screen.findByTestId('seller_orders__element-order-id-1');
    userEvent.click(orderNumber);
    expect(window.location.pathname).toBe('/seller/orders/1');
    const ordersNav = await screen
      .findByTestId('customer_products__element-navbar-link-orders');
    const userName = await screen
      .findByTestId('customer_products__element-navbar-user-full-name');
    const logoutNav = await screen
      .findByTestId('customer_products__element-navbar-link-logout');
    const title = await screen.findByText('Detalhes do pedido');
    const orderLabel = await screen
      .findByTestId('seller_order_details__element-order-details-label-order-id');
    const orderDate = await screen
      .findByTestId('seller_order_details__element-order-details-label-order-date');
    const status = await screen
      .findByTestId('seller_order_details__element-order-details-label-delivery-status');
    const prepareButton = await screen
      .findByTestId('seller_order_details__button-preparing-check');
    const sendButton = await screen
      .findByTestId('seller_order_details__button-dispatch-check');
    const totalPrice = await screen
      .findByTestId('seller_order_details__element-order-total-price');
    const item = await screen.findByText('Item');
    const description = await screen.findByText('Descrição');
    const quantity = await screen.findByText('Quantidade');
    const unitValue = await screen.findByText('Valor Unitário');
    const subTotal = await screen.findByText('Sub-total');
    const itemNumber1 = await screen
      .findByTestId('seller_order_details__element-order-table-item-number-1');
    const itemName1 = await screen
      .findByTestId('seller_order_details__element-order-table-name-1');
    const itemQty1 = await screen
      .findByTestId('seller_order_details__element-order-table-quantity-1');
    const itemPrice1 = await screen
      .findByTestId('seller_order_details__element-order-table-unit-price-1');
    const itemSubTotal1 = await screen
      .findByTestId('seller_order_details__element-order-table-sub-total-1');
    const itemNumber2 = await screen
      .findByTestId('seller_order_details__element-order-table-item-number-2');
    const itemName2 = await screen
      .findByTestId('seller_order_details__element-order-table-name-2');
    const itemQty2 = await screen
      .findByTestId('seller_order_details__element-order-table-quantity-2');
    const itemPrice2 = await screen
      .findByTestId('seller_order_details__element-order-table-unit-price-2');
    const itemSubTotal2 = await screen
      .findByTestId('seller_order_details__element-order-table-sub-total-2');
    expect(ordersNav).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(logoutNav).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(orderLabel).toBeInTheDocument();
    expect(orderDate).toBeInTheDocument();
    expect(status).toBeInTheDocument();
    expect(prepareButton).toBeInTheDocument();
    expect(sendButton).toBeInTheDocument();
    expect(totalPrice).toBeInTheDocument();
    expect(item).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(quantity).toBeInTheDocument();
    expect(unitValue).toBeInTheDocument();
    expect(subTotal).toBeInTheDocument();
    expect(itemNumber1).toBeInTheDocument();
    expect(itemName1).toBeInTheDocument();
    expect(itemQty1).toBeInTheDocument();
    expect(itemPrice1).toBeInTheDocument();
    expect(itemSubTotal1).toBeInTheDocument();
    expect(itemNumber2).toBeInTheDocument();
    expect(itemName2).toBeInTheDocument();
    expect(itemQty2).toBeInTheDocument();
    expect(itemPrice2).toBeInTheDocument();
    expect(itemSubTotal2).toBeInTheDocument();
  });

  it('Renderiza as informações corretas', async () => {
    renderWithReduxAndRouter(<App />);
    const sellerOrdersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    userEvent.click(sellerOrdersNav);
    expect(window.location.pathname).toBe('/seller/orders');
    const orderNumber = await screen.findByTestId('seller_orders__element-order-id-1');
    userEvent.click(orderNumber);
    expect(window.location.pathname).toBe('/seller/orders/1');
    const userName = await screen
      .findByTestId('customer_products__element-navbar-user-full-name');
    const orderLabel = await screen
      .findByTestId('seller_order_details__element-order-details-label-order-id');
    const orderDate = await screen
      .findByTestId('seller_order_details__element-order-details-label-order-date');
    const status = await screen
      .findByTestId('seller_order_details__element-order-details-label-delivery-status');
    const prepareButton = await screen
      .findByTestId('seller_order_details__button-preparing-check');
    const sendButton = await screen
      .findByTestId('seller_order_details__button-dispatch-check');
    const totalPrice = await screen
      .findByTestId('seller_order_details__element-order-total-price');
    const itemNumber1 = await screen
      .findByTestId('seller_order_details__element-order-table-item-number-1');
    const itemName1 = await screen
      .findByTestId('seller_order_details__element-order-table-name-1');
    const itemQty1 = await screen
      .findByTestId('seller_order_details__element-order-table-quantity-1');
    const itemPrice1 = await screen
      .findByTestId('seller_order_details__element-order-table-unit-price-1');
    const itemSubTotal1 = await screen
      .findByTestId('seller_order_details__element-order-table-sub-total-1');
    const itemNumber2 = await screen
      .findByTestId('seller_order_details__element-order-table-item-number-2');
    const itemName2 = await screen
      .findByTestId('seller_order_details__element-order-table-name-2');
    const itemQty2 = await screen
      .findByTestId('seller_order_details__element-order-table-quantity-2');
    const itemPrice2 = await screen
      .findByTestId('seller_order_details__element-order-table-unit-price-2');
    const itemSubTotal2 = await screen
      .findByTestId('seller_order_details__element-order-table-sub-total-2');
    expect(userName.innerHTML).toBe('Fulana Pereira');
    expect(orderLabel.innerHTML).toBe('Pedido 0001');
    expect(orderDate.innerHTML)
      .toBe(new Date(sellerOrdersMock[0].saleDate).toLocaleDateString('pt-BR'));
    expect(status.innerHTML).toBe('Pendente');
    expect(prepareButton.innerHTML).toBe('PREPARAR PEDIDO');
    expect(sendButton.innerHTML).toBe('SAIU PARA ENTREGA');
    expect(totalPrice.innerHTML).toBe('Total: R$ 30,00');
    expect(itemNumber1.innerHTML).toBe('1');
    expect(itemName1.innerHTML).toBe('Skol Lata 250ml');
    expect(itemQty1.innerHTML).toBe('2');
    expect(itemPrice1.innerHTML).toBe('R$ 2,20');
    expect(itemSubTotal1.innerHTML).toBe('R$ 4,40');
    expect(itemNumber2.innerHTML).toBe('2');
    expect(itemName2.innerHTML).toBe('Heineken 600ml');
    expect(itemQty2.innerHTML).toBe('2');
    expect(itemPrice2.innerHTML).toBe('R$ 7,50');
    expect(itemSubTotal2.innerHTML).toBe('R$ 15,00');
  });

  it('Testa preparar pedido', async () => {
    renderWithReduxAndRouter(<App />);
    const sellerOrdersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    userEvent.click(sellerOrdersNav);
    expect(window.location.pathname).toBe('/seller/orders');
    const orderNumber = await screen.findByTestId('seller_orders__element-order-id-1');
    userEvent.click(orderNumber);
    expect(window.location.pathname).toBe('/seller/orders/1');
    const prepareButton = await screen
      .findByTestId('seller_order_details__button-preparing-check');
    await act(async () => userEvent.click(prepareButton));
    expect(axios.put).toHaveBeenCalled();
  });

  it('Testa mandar para entrega', async () => {
    const preparingOrder = { ...sellerOrdersMock[0], status: 'Preparando' };
    axios.get.mockImplementation((path) => {
      if (path === '/users') return Promise.resolve({ data: usersAPI });
      if (path === '/products') return Promise.resolve({ data: productMock });
      return Promise.resolve({ data: [preparingOrder] });
    });
    renderWithReduxAndRouter(<App />);
    const sellerOrdersNav = screen
      .getByTestId('customer_products__element-navbar-link-orders');
    userEvent.click(sellerOrdersNav);
    expect(window.location.pathname).toBe('/seller/orders');
    const orderNumber = await screen.findByTestId('seller_orders__element-order-id-1');
    userEvent.click(orderNumber);
    expect(window.location.pathname).toBe('/seller/orders/1');
    const sendButton = await screen
      .findByTestId('seller_order_details__button-dispatch-check');
    await act(async () => userEvent.click(sendButton));
    expect(axios.put).toHaveBeenCalled();
  });
});
