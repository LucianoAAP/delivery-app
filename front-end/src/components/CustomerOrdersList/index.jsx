import React from 'react';
import OrderCard from '../CustomerOrderCard';
import { OrderListContainer } from '../../global-styles/globalComponents';
import { useCustomerOrdersList } from '../../hooks';

const CustomerOrdersList = () => {
  const { orders } = useCustomerOrdersList();

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
