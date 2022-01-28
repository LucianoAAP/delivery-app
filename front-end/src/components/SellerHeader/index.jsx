import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HeaderContainer } from '../../global-styles/globalComponents';
import SellerSideBar from '../SellerSideBar';
import { Flex, NavList, HamburguerIcon, RedirectButton } from './styles';
import getUserInfo from '../../utils/getLocalStorage';

const SellerHeader = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [sideBar, setSideBar] = useState(false);

  useEffect(() => {
    const userName = getUserInfo('name');
    setUser(userName);
  }, []);

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
            onClick={ () => navigate('/login') }
          >
            Sair
          </RedirectButton>
        </NavList>
      </Flex>
    </HeaderContainer>
  );
};

export default SellerHeader;
