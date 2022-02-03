import React from 'react';
import { HeaderContainer } from '../../global-styles/globalComponents';
import Flex from './styles';
import { useHeader } from '../../hooks';

const AdmHeader = () => {
  const { logout, user } = useHeader();

  return (
    <HeaderContainer>
      <Flex>
        <div
          data-testid="customer_products__element-navbar-link-orders"
        >
          Gerenciar Usuários
        </div>
        <div
          data-testid="customer_products__element-navbar-user-full-name"
        >
          {user}
        </div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => logout() }
        >
          Sair
        </button>
      </Flex>
    </HeaderContainer>
  );
};

export default AdmHeader;
