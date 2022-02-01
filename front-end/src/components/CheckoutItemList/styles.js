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
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 40px;
  @media(min-width: 950px) {
    margin-bottom: 10px;

  }
`;

export const TotalContainer = styled.div`
  height: 40px;
  padding: 15px 30px;
  margin-top: 10px;
  border-radius: 4px;
  background-color: #149911;
  color: white;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
`;
