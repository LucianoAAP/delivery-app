import React from 'react';
// import { useParams } from 'react-router';
import { screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import { act } from 'react-dom/test-utils';
import renderWithReduxAndRouter from './renderWithReduxAndRouter';
import App from '../../App';
// import SellerOrders from '../../pages/SellerOrders';
// import SellerOrderDetails from '../../pages/SellerOrderDetails';
import sellerOrdersMock from './mocks/sellerOrdersMock';
import localStorageMock from './mocks/localStorageMock';
import getSalesFromSeller from '../../services/getSalesFromSeller';
import updateSale from '../../services/updateSale';
jest.mock('../../services/getSalesFromSeller');
jest.mock('../../services/updateSale');
// jest.mock('react-router');

describe('Testa SellerOrderDetails', () => {
  beforeEach(() => {
    jest.spyOn(Object.getPrototypeOf(window.localStorage), 'getItem')
      .mockImplementation(localStorageMock);
    getSalesFromSeller.mockResolvedValue(sellerOrdersMock);
    updateSale.mockImplementation(() => true);
    // jest.mock('react-router-dom', () => ({
    //   ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
    //   useParams: () => ({
    //     id: 1,
    //   }),
    // }));
  });

  it('Renderiza os componentes', async () => {
    renderWithReduxAndRouter(<App />,
      {},
      { route: '/seller/orders/1' });
    // renderWithReduxAndRouter(<SellerOrderDetails />);
    const productsNav = await screen
      .findByTestId('customer_products__element-navbar-link-orders');
    const userName = await screen
      .findByTestId('customer_products__element-navbar-user-full-name');
    const logoutNav = await screen
      .findByTestId('customer_products__element-navbar-link-logout');
    // const title = await screen.findByText('Detalhes do produto');
    // const orderLabel = await screen
    //   .findByTestId('seller_order_details__element-order-details-label-order-id');
    // const orderDate = await screen
    //   .findByTestId('seller_order_details__element-order-details-label-order-date');
    // const status = await screen
    //   .findByTestId('seller_order_details__element-order-details-label-delivery-status');
    // const prepareButton = await screen
    //   .findByTestId('seller_order_details__button-preparing-check');
    // const sendButton = await screen
    //   .findByTestId('seller_order_details__button-dispatch-check');
    expect(productsNav).toBeInTheDocument();
    expect(userName).toBeInTheDocument();
    expect(logoutNav).toBeInTheDocument();
    // expect(title).toBeInTheDocument();
    // expect(orderLabel).toBeInTheDocument();
    // expect(orderDate).toBeInTheDocument();
    // expect(status).toBeInTheDocument();
    // expect(prepareButton).toBeInTheDocument();
    // expect(sendButton).toBeInTheDocument();
  });

  // it('Renderiza as informações corretas', () => {
  //   renderWithReduxAndRouter(<SellerOrderDetails />,
  //     {},
  //     { route: '/seller/orders/1' });
  //   const userName = screen
  //     .getByTestId('customer_products__element-navbar-user-full-name');
  //   expect(userName.innerHTML).toBe('Fulana Pereira');
  // });
});
