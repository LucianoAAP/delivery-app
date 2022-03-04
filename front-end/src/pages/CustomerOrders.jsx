import React from 'react';
import { useCheckLogin } from '../hooks';
import { CustomerHeader, CustomerOrdersList } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerOrders = () => {
  useCheckLogin('customer');

  return (
    <MainTag>
      <CustomerHeader />
      <CustomerOrdersList />
    </MainTag>
  );
};

export default CustomerOrders;
