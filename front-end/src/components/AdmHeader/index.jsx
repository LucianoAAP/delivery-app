import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../../global-styles/globalComponents';
import Flex from './styles';

const AdmHeader = () => {
  const navigate = useNavigate();

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
          Trybeer Admin
        </div>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ () => navigate('/login') }
        >
          Sair
        </button>
      </Flex>
    </HeaderContainer>
  );
};

export default AdmHeader;
