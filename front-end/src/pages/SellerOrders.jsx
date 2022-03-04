import React from 'react';
import { useCheckLogin } from '../hooks';
import { SellerHeader, SellerOrdersList } from '../components';

const SellerOrders = () => {
  useCheckLogin('seller');

  return (
    <>
      <SellerHeader />
      <SellerOrdersList />
    </>
  );
};

export default SellerOrders;
