import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const CheckoutItensContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  @media(min-width: 768px) {
    max-width: 1024px;
    overflow-x: auto;
  }
`;

export const PaperDiv = styled(Paper)`
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
  display: none;
}
`;

export const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 25px;
  font-weight: 800;
`;

export const TotalContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  height: 50px;
  padding: 15px 30px;
  margin-top: 10px;
  background-color: white;
  border: 2px solid gray;
  color: gray;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.3);
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media(min-width:768px) {
    align-self: flex-end;
  }
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  gap: 15px;
  flex-direction: column;
  @media(min-width: 768px) {
    flex-direction: row;
    max-width: 1024px;
    overflow-x: auto;
    margin-bottom: 10px;
  }
`;
