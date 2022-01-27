import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavList = styled.nav`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
  @media(min-width: 768px) {
    display: none;
  }
`;

export const RedirectButton = styled.button`
  width: 80%;
  border: none;
  background-color: transparent;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 15px;
  font-weight: 800;
`;

export const CloseIcon = styled(GrClose)`
  width: 30px;
  height: 30px;
  color: #000;
  align-self: flex-end;
  margin: 10px;
`;
