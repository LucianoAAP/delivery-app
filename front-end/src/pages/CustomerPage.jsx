import React from 'react';
import { CustomerHeader, ProductList } from '../components';
import { MainTag } from '../global-styles/globalComponents';
import useCheckLogin from '../hooks/useCheckLogin';

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
