import React from 'react';
import { HeaderContainer } from '../../global-styles/globalComponents';
import { Flex, NavList, RedirectButton } from './styles';
import { useHeader } from '../../hooks';

const SellerHeader = () => {
  const { user, logout, navigate } = useHeader();

  return (
    <HeaderContainer>
      <Flex>
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
            type="button"
            data-testid="customer_products__element-navbar-link-logout"
            onClick={ () => logout() }
          >
            Sair
          </RedirectButton>
        </NavList>
      </Flex>
    </HeaderContainer>
  );
};

export default SellerHeader;
