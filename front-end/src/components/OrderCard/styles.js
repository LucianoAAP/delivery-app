import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 150px;
  width: 300px;
  border: 1px solid black;
  border-radius: 6px;
  box-shadow: 3px 4px 7px black;
  display: flex;
  margin: 10px;
  @media(min-width: 768px) {
    height: 150px;
    width: 450px;
    display: flex;
  }
`;

export const OrderContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const OrderDetails = styled.div`
width: 75%;
height: 100%;
`;

export const DetailsTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 80%;
`;

export const StatusContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const NumericInfo = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
text-align: center;
`;

export const AddressContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
text-align: end;
padding-right: 5%;
`;
