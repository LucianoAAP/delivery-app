import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/LoginPage';
import CustomerPage from './pages/CustomerPage/CustomerPage';
import './index.css';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route exact path="/login" element={ <Login /> } />
      <Route exact path="/customer/products" element={ <CustomerPage /> } />
    </Routes>
  );
}

export default App;
