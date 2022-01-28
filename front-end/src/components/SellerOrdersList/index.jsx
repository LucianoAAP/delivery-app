import React, { useState, useEffect } from 'react';
import { getSaleFromSeller } from '../../services/salesAPI';
import OrderCard from '../OrderCard';
import OrderListContainer from './styles';
import getUserInfo from '../../utils/getLocalStorage';

const SellerOrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = getUserInfo('id');
    getSaleFromSeller(userId).then((response) => setOrders(response));
  }, []);

  return (
    <OrderListContainer>
      { orders.map((order, index) => {
        const { totalPrice, deliveryAddress, saleDate, status, id } = order;
        return (
          <OrderCard
            key={ `order-${index}` }
            orderId={ index + 1 }
            id={ id }
            status={ status }
            address={ deliveryAddress }
            totalPrice={ totalPrice }
            date={ saleDate }
          />
        );
      }) }
    </OrderListContainer>
  );
};

export default SellerOrderList;
