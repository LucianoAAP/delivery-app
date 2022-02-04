import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 40%;
  height: 380px;
  border-radius: 7px;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  margin: 10px;
  background-color: white;
  @media(min-width: 768px) {
    width: 250px;
    height: 420px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 60%;
  background-color: gray;
  border-radius: 7px 7px 0 0;
`;

export const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 7px 7px 0 0;
`;

export const InfoContainer = styled.div`
  width: 100%;
  height: 40%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  @media(min-width: 768px) {
  align-items: flex-start;
  }
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
  @media(min-width: 768px) {
  font-size: 20px;
  }
`;

export const Span = styled.span`
  font-size: 24px;
  color: #C81B78;
  font-weight: 800;
  margin-left: 4px;
  @media(min-width: 768px) {
  font-size: 27px;
  }
`;

export const ChangeQuantity = styled.div`
  width: 90%;
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
    width: 33.3%;
    font-weight: 700;
    border: none;
    background-color: #32892F;
    padding: 5px;
    border-radius: 50px;
    cursor: pointer;
  }
  @media(min-width: 768px) {
    width: 70%;
  }
`;

export const QauntityInput = styled.input`
  background-color: transparent;
  border: none;
  width: 33.3%;
  text-align: center;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  cursor: default;
`;
