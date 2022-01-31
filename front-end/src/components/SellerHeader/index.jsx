import React from 'react';
import { HeaderContainer } from '../../global-styles/globalComponents';
import SellerSideBar from '../SellerSideBar';
import { Flex, NavList, HamburguerIcon, RedirectButton } from './styles';
import useHeader from '../../hooks/useHeader';

const SellerHeader = () => {
  const { user, sideBar, setSideBar, logout, navigate } = useHeader();

  return (
    <HeaderContainer>
      <Flex>
        <HamburguerIcon onClick={ () => setSideBar(true) } />
        <SellerSideBar open={ sideBar } setOpen={ setSideBar } />
        <NavList>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-orders"
            type="button"
            onClick={ () => navigate('/seller/orders') }
          >
            Pedidos
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-user-full-name"
            type="button"
            onClick={ () => navigate('/seller/orders') }
          >
            { user }
          </RedirectButton>
          <RedirectButton
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ logout }
          >
            Sair
          </RedirectButton>
        </NavList>
      </Flex>
    </HeaderContainer>
  );
};

export default SellerHeader;
