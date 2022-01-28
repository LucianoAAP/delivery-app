import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 100vw;
  text-align: center;
`;

export const ProductSection = styled.section`
  width: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const FloatButtonCart = styled.button`
  border: none;
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 200px;
  height: 50px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: green;
  :hover {
    width: 210px;
    height: 60px;
  }
`;
