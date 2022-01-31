import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDate, getPrice, padNumber } from '../../utils/formatManipulation';
import {
  CardContainer,
  OrderContainer,
  OrderDetails,
  DetailsTop,
  StatusContainer,
  NumericInfo,
  AddressContainer,
} from './styles';

const { number, string } = PropTypes;
const PAD = 4;

const OrderCard = ({ orderId, status, date, totalPrice, address, id }) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={ () => navigate(`/seller/orders/${orderId}`) }
      aria-hidden="true"
    >
      <OrderContainer>
        <p>Pedido</p>
        <p data-testid={ `seller_orders__element-order-id-${id}` }>
          { padNumber(orderId, PAD) }
        </p>
      </OrderContainer>
      <OrderDetails>
        <DetailsTop>
          <StatusContainer>
            <p data-testid={ `seller_orders__element-delivery-status-${id}` }>
              { status }
            </p>
          </StatusContainer>
          <NumericInfo>
            <p data-testid={ `seller_orders__element-order-date-${id}` }>
              { getDate(date) }
            </p>
            <p data-testid={ `seller_orders__element-card-price-${id}` }>
              { getPrice(totalPrice) }
            </p>
          </NumericInfo>
        </DetailsTop>
        <AddressContainer>
          <p data-testid={ `seller_orders__element-card-address-${id}` }>{ address }</p>
        </AddressContainer>
      </OrderDetails>
    </CardContainer>
  );
};

OrderCard.propTypes = {
  orderId: number.isRequired,
  status: string.isRequired,
  date: string.isRequired,
  totalPrice: string.isRequired,
  address: string.isRequired,
  id: number.isRequired,
};

export default OrderCard;
