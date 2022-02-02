import React from 'react';
import { CustomerHeader, CheckoutItemlist, CheckoutConfirm } from '../components';

import { MainTag } from '../global-styles/globalComponents';
import useCheckLogin from '../hooks/useCheckLogin';

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
