import React from 'react';
import { useCheckLogin } from '../hooks';
import { CustomerHeader, ProductList } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerPage = () => {
  useCheckLogin('customer');

  return (
    <MainTag>
      <CustomerHeader />
      <ProductList />
    </MainTag>
  );
};

export default CustomerPage;
