import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import AdmScreen from './pages/AdmScreen';
import Register from './pages/Register';
import LoginPage from './pages/LoginPage';
import CustomerPage from './pages/CustomerPage';
import CustomerOrders from './pages/CustomerOrders';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerOrders from './pages/SellerOrders';
import SellerOrderDetails from './pages/SellerOrderDetails';
import CustomerCheckout from './pages/CustomerCheckout';
import './index.css';

const App = () => (
  <Routes>
    <Route exact path="/login" element={ <LoginPage /> } />
    <Route exact path="/register" element={ <Register /> } />
    <Route exact path="/admin/manage" element={ <AdmScreen /> } />
    <Route exact path="/customer/products" element={ <CustomerPage /> } />
    <Route exact path="/customer/checkout" element={ <CustomerCheckout /> } />
    <Route exact path="/customer/orders" element={ <CustomerOrders /> } />
    <Route exact path="/customer/orders/:id" element={ <CustomerOrderDetails /> } />
    <Route exact path="/seller/orders" element={ <SellerOrders /> } />
    <Route exact path="/seller/orders/:id" element={ <SellerOrderDetails /> } />
    <Route exact path="/" element={ <Navigate to="/login" /> } />
  </Routes>
);

export default App;
