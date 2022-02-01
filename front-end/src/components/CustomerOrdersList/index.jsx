import React, { useState, useEffect } from 'react';
import { getSaleFromCustomer } from '../../services/salesAPI';
import OrderCard from '../CustomerOrderCard';
import { OrderListContainer } from '../../global-styles/globalComponents';
import getUserInfo from '../../utils/getLocalStorage';

const CustomerOrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { token, id } = getUserInfo();
    getSaleFromCustomer(id, token).then((response) => setOrders(response));
  }, []);

  return (
    <OrderListContainer>
      { orders.map((order, index) => {
        const {
          totalPrice,
          saleDate,
          status,
          id,
        } = order;

        return (
          <OrderCard
            key={ `order-${index}` }
            orderId={ index + 1 }
            id={ id }
            status={ status }
            totalPrice={ totalPrice }
            date={ saleDate }
          />
        );
      }) }
    </OrderListContainer>
  );
};

export default CustomerOrdersList;
