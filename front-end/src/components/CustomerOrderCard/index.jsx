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
  ClockIcon,
  CheckIcon,
} from './styles';

const { number, string } = PropTypes;
const PAD = 4;

const OrderCard = ({ orderId, status, date, totalPrice, id }) => {
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={ () => navigate(`/customer/orders/${orderId}`) }
      aria-hidden="true"
    >
      <OrderContainer>
        <p>Pedido</p>
        <span data-testid={ `customer_orders__element-order-id-${id}` }>
          { padNumber(orderId, PAD) }
        </span>
      </OrderContainer>
      <OrderDetails>
        <DetailsTop>
          <StatusContainer status={ status }>
            {status === 'Pendente' ? <ClockIcon status={ status } /> : <CheckIcon />}
            <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
              { status }
            </p>
          </StatusContainer>
          <NumericInfo>
            <p data-testid={ `customer_orders__element-order-date-${id}` }>
              { getDate(date) }
            </p>
            <span data-testid={ `customer_orders__element-card-price-${id}` }>
              { getPrice(totalPrice) }
            </span>
          </NumericInfo>
        </DetailsTop>
      </OrderDetails>
    </CardContainer>
  );
};

OrderCard.propTypes = {
  orderId: number.isRequired,
  status: string.isRequired,
  date: string.isRequired,
  totalPrice: string.isRequired,
  id: number.isRequired,
};

export default OrderCard;
