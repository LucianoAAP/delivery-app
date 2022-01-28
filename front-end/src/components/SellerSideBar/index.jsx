import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { NavList, Flex, RedirectButton, CloseIcon } from './styles';
import { SideBarContainer } from '../../global-styles/globalComponents';
import getLocalStorage from '../../utils/getLocalStorage';

const CustomerSideBar = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');

  useEffect(() => {
    const userName = getLocalStorage('userName');
    setUser(userName);
  }, []);

  return (
    <SideBarContainer open={ open }>
      <CloseIcon onClick={ () => setOpen(false) } />
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
