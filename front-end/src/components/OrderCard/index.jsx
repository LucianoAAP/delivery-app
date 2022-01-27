import React from 'react';
import PropTypes from 'prop-types';

const { number, string } = PropTypes;

const OrderCard = ({ orderId, status, date, totalPrice, address, id }) => (
  <div>
    <div>
      <p>Pedido</p>
      <p data-testid={ `seller_orders__element-order-id-${id}` }>{ orderId }</p>
    </div>
    <div>
      <div>
        <div>
          <p data-testid={ `seller_orders__element-delivery-status-${id}` }>{ status }</p>
        </div>
        <div>
          <p data-testid={ `seller_orders__element-order-date-${id}` }>{ date }</p>
          <p data-testid={ `seller_orders__element-card-price-${id}` }>{ totalPrice }</p>
        </div>
      </div>
      <div>
        <p data-testid={ `seller_orders__element-card-address-${id}` }>{ address }</p>
      </div>
    </div>
  </div>
);

OrderCard.propTypes = {
  orderId: number.isRequired,
  status: string.isRequired,
  date: string.isRequired,
  totalPrice: string.isRequired,
  address: string.isRequired,
  id: number.isRequired,
};

export default OrderCard;
