import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  display: flex;
  align-items: center;
  background-color: #B8B8B8;
`;

export const HamburguerIcon = styled(GiHamburgerMenu)`
  width: 30px;
  height: 30px;
  color: #000;
  @media(min-width: 768px) {
    display: none;
  }
`;

export const NavList = styled.nav`
  display: none;
  @media(min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
`;

export const RedirectButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 800;
`;

export const customerLogo = styled.img``;
