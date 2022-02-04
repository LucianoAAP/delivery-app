import React from 'react';
import { HeaderContainer } from '../../global-styles/globalComponents';
import { Flex, NavList, RedirectButton, Logo } from './styles';
import { useHeader } from '../../hooks';

const CustomerHeader = () => {
  const { user, logout, navigate } = useHeader();

  return (
    <HeaderContainer>
      <Flex>
        <Logo src="https://cdn.discordapp.com/attachments/888025163139002382/939188740331536384/logoDelivery.png" alt="Logo" />
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

export default CustomerHeader;
