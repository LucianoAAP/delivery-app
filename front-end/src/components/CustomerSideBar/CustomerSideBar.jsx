import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { NavList, Flex, RedirectButton, CloseIcon } from './styles';
import { SideBarContainer } from '../../global-styles/globalComponents';

const CustomerSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <SideBarContainer open={ open }>
      <CloseIcon onClick={ () => setOpen(false) } />
      <Flex>
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
    </SideBarContainer>
  );
};

CustomerSideBar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default CustomerSideBar;
