import React from 'react';
import { CustomerHeader, ProductList } from '../components';
import { MainTag } from '../global-styles/globalComponents';

const CustomerPage = () => (
  <MainTag>
    <CustomerHeader />
    <ProductList />
  </MainTag>
);

export default CustomerPage;
