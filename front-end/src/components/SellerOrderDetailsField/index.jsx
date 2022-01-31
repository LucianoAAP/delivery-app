import React from 'react';
import ProductsTable from '../ProductsTable';
import useSellerOrderDetails from '../../hooks/useSellerOrderDetails';
import { getDate, getPrice, padNumber } from '../../utils/formatManipulation';
import {
  ProductListContainer,
  DetailsTitle,
  StatusField,
  DetailsContainer,
  TotalPrice,
} from './styles';

const dataTestIds = {
  id: 'seller_order_details__element-order-details-label-order-id',
  date: 'seller_order_details__element-order-details-label-order-date',
  status: 'seller_order_details__element-order-details-label-delivery-status',
  price: 'seller_order_details__element-order-total-price',
  preparing: 'seller_order_details__button-preparing-check',
  dispatch: 'seller_order_details__button-dispatch-check',
};

const PAD = 4;

const SellerOrderDetailsField = () => {
  const {
    orderId,
    order,
    preparingDisplay,
    dispatchDisplay,
    prepareOrder,
    dispatchOrder,
  } = useSellerOrderDetails();

  if (!order.products) return <p>loading</p>;

  const { totalPrice, saleDate, status, products } = order;

  return (
    <ProductListContainer>
      <DetailsTitle>Detalhes do pedido</DetailsTitle>
      <DetailsContainer>
        <StatusField>
          <span data-testid={ dataTestIds.id }>
            { `Pedido ${padNumber(orderId, PAD)}` }
          </span>
          <span data-testid={ dataTestIds.date }>
            { getDate(saleDate) }
          </span>
          <span data-testid={ dataTestIds.status }>
            { status }
          </span>
          <button
            type="button"
            data-testid={ dataTestIds.preparing }
            disabled={ preparingDisplay }
            onClick={ prepareOrder }
          >
            PREPARAR PEDIDO
          </button>
          <button
            type="button"
            data-testid={ dataTestIds.dispatch }
            disabled={ dispatchDisplay }
            onClick={ dispatchOrder }
          >
            SAIU PARA ENTREGA
          </button>
        </StatusField>
        <ProductsTable products={ products } userRole="seller" />
        <TotalPrice data-testid={ dataTestIds.price }>
          { `Total: ${getPrice(totalPrice)}` }
        </TotalPrice>
      </DetailsContainer>
    </ProductListContainer>
  );
};

export default SellerOrderDetailsField;
