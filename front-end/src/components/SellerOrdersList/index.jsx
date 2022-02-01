import React, { useState, useEffect } from 'react';
import { getSaleFromSeller } from '../../services/salesAPI';
import OrderCard from '../SellerOrderCard';
import { OrderListContainer } from '../../global-styles/globalComponents';
import getUserInfo from '../../utils/getLocalStorage';

const SellerOrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { token, id } = getUserInfo();
    getSaleFromSeller(id, token).then((response) => setOrders(response));
  }, []);

  return (
    <OrderListContainer>
      { orders.map((order, index) => {
        const {
          totalPrice,
          deliveryAddress,
          deliveryNumber,
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
            address={ `${deliveryAddress}, ${deliveryNumber}` }
            totalPrice={ totalPrice }
            date={ saleDate }
          />
        );
      }) }
    </OrderListContainer>
  );
};

export default SellerOrdersList;
