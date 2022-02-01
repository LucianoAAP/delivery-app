import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 40%;
  height: 360px;
  border: 1px solid lightgray;
  border-radius: 6px;
  box-shadow: 4px 7px 10px lightgray;
  margin: 10px;
  @media(min-width: 768px) {
    width: 250px;
    height: 400px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: gray;
  border-radius: 6px 6px 0 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px 6px 0 0;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

export const Name = styled.p`
  font-size: 19px;
  font-weight: 600;
  @media(min-width: 768px) {
    font-size: 25px;
  }
`;

export const Price = styled.p`
  font-size: 15px;
  color: #C81B78;
  font-weight: 600;
`;

export const Span = styled.span`
  font-size: 24px;
  color: #C81B78;
  font-weight: 800;
`;

export const ChangeQuantity = styled.div`
  width: 70%;
  background-color: lightgray;
  display: flex;
  flex-direction: row;
  align-self: center;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  font-weight: 700;
  button {
    color: white;
    width: 33%;
    font-weight: 700;
    border: none;
    background-color: green;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
  }
`;
