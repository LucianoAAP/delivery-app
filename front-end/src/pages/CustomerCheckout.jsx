import React from 'react';
import { useCheckLogin } from '../hooks';
import { CustomerHeader, CheckoutItemlist, CheckoutConfirm } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerCheckout = () => {
  useCheckLogin('customer');

  return (
    <MainTag>
      <CustomerHeader />
      <CheckoutItemlist />
      <CheckoutConfirm />
    </MainTag>
  );
};

export default CustomerCheckout;
