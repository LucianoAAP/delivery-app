import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100vw;
  height: 100px;
  margin-bottom: 50px;
`;

export const FooterContainer = styled.footer`
  width: 100vw;
`;

export const SideBarContainer = styled.aside`
  width: 45vw;
  height: 100vh;
  top: 0;
  position: fixed;
  left: ${(props) => (props.open ? '0' : '-45vw')};
  transition: ease-in-out 300ms;
  background-color: #B8B8B8;
  box-shadow: ${(props) => (props.open ? '5px 1px 10px black' : null)};
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 15px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-weight: 800;
  color: #c4c4c4;
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
`;

export const OrderListContainer = styled.section`
  width: 100vw;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const MainTag = styled.main`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  overflow-x: hidden;
  width: 100vw;
  background-color: whitesmoke;
  min-height: 100vh;
`;
