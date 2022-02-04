import React from 'react';
import { CustomerHeader, CustomerOrdersList } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerOrders = () => (
  <MainTag>
    <CustomerHeader />
    <CustomerOrdersList />
  </MainTag>
);

export default CustomerOrders;
