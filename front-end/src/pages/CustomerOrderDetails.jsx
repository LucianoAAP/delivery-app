import React from 'react';
import { useCheckLogin } from '../hooks';
import { CustomerHeader, CustomerOrderDetailsField } from '../components';

const OrderDetails = () => {
  useCheckLogin('customer');

  return (
    <>
      <CustomerHeader />
      <CustomerOrderDetailsField />
    </>
  );
};

export default OrderDetails;
