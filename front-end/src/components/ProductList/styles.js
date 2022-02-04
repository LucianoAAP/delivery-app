import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 100vw;
  text-align: center;
`;

export const ProductSection = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: auto auto 70px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  @media(min-width: 768px) {
    margin: auto auto 90px auto;
  }
`;

export const FloatButtonCart = styled.button`
  border: none;
  position: fixed;
  right: 4%;
  bottom: 10px;
  width: 92%;
  height: 50px;
  display: flex;
  border-radius: 5px;
  color:  white;
  font-size: 13px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #C81B78;
  text-transform: uppercase;
  letter-spacing: 2px;
  :hover {
    background-color: #96155b;
  }
  @media(min-width: 768px) {
    right: 30px;
    width: auto;
    max-width: 40%;
    bottom: 30px;
    padding: 5px 5px;
  }
`;
