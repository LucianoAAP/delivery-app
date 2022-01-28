import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CustomerPage from './pages/CustomerPage';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';
import Login from './pages/LoginPage';
import './index.css';

const App = () => (
  <Routes>
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/customer/products" element={ <CustomerPage /> } />
    <Route exact path="/seller/orders" element={ <SellerOrders /> } />
    <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
    <Route exact path="/" element={ <Navigate to="/login" /> } />
  </Routes>
);

export default App;
