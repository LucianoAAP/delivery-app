import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage/CustomerPage';

const App = () => (
  <Routes>
    <Route />
    <Route exact path="/customer/products" element={ <CustomerPage /> } />
  </Routes>
);

export default App;
