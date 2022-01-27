import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../../global-styles/globalComponents';
import CustomerSideBar from '../CustomerSideBar/CustomerSideBar';
import { Flex, NavList, HamburguerIcon, RedirectButton } from './styles';

const CustomerHeader = () => {
  const [sideBar, setSideBar] = useState(false);
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Flex>
        <HamburguerIcon onClick={ () => setSideBar(true) } />
        <CustomerSideBar open={ sideBar } setOpen={ setSideBar } />
        <NavList>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-products"
            type="button"
            onClick={ () => navigate('/customer/products') }
          >
            Produtos
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            onClick={ () => navigate('/customer/orders') }
          >
            Meus pedidos
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-user-full-name"
            type="button"
            onClick={ () => navigate('/customer/products') }
          >
            Lucas Fernandes
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ () => navigate('/login') }
          >
            Sair
          </RedirectButton>
        </NavList>
      </Flex>
    </HeaderContainer>
  );
};

export default CustomerHeader;
