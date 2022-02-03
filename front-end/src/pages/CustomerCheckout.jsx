import React from 'react';
import { CustomerHeader, CheckoutItemlist, CheckoutConfirm } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerCheckout = () => (
  <MainTag>
    <CustomerHeader />
    <CheckoutItemlist />
    <CheckoutConfirm />
  </MainTag>
);

export default CustomerCheckout;
