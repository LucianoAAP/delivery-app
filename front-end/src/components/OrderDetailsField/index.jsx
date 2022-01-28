import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getSaleFromSeller } from '../../services/salesAPI';
import SaleProductsTable from '../SaleProductsTable';
import { getDate, getPrice, padNumber } from '../../utils/formatManipulation';
import getUserInfo from '../../utils/getLocalStorage';

const dataTestIds = {
  id: 'seller_order_details__element-order-details-label-order-id',
  date: 'seller_order_details__element-order-details-label-order-date',
  status: 'seller_order_details__element-order-details-label-delivery-status',
  price: 'seller_order_details__element-order-total-price',
};

const PAD = 4;

const OrderDetailsField = () => {
  const { id: orderId } = useParams();
  const [order, sertOrder] = useState({});

  useEffect(() => {
    const userId = getUserInfo('id');
    getSaleFromSeller(userId).then((response) => sertOrder(response[orderId - 1]));
  }, [orderId]);

  if (!order.products) return <p>loading</p>;

  const { totalPrice, saleDate, status, products } = order;

  return (
    <>
      <h2>Detalhes do pedido</h2>
      <div>
        <div>
          <span data-testid={ dataTestIds.id }>
            { `Pedido ${padNumber(orderId, PAD)}` }
          </span>
          <span data-testid={ dataTestIds.date }>
            { getDate(saleDate) }
          </span>
          <span data-testid={ dataTestIds.status }>
            { status }
          </span>
        </div>
        <SaleProductsTable products={ products } />
        <div data-testid={ dataTestIds.price }>{ getPrice(totalPrice) }</div>
      </div>
    </>
  );
};

export default OrderDetailsField;
