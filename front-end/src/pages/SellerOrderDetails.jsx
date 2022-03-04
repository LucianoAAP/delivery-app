import React from 'react';
import { useCheckLogin } from '../hooks';
import { SellerHeader, SellerOrderDetailsField } from '../components';

const OrderDetails = () => {
  useCheckLogin('seller');

  return (
    <>
      <SellerHeader />
      <SellerOrderDetailsField />
    </>
  );
};

export default OrderDetails;
