import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const ProductListContainer = styled.section`
  width: 100%;
  padding: 10px;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsTitle = styled.h2`
  align-self: center;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 20px;
  @media(min-width:768px) {
    align-self: flex-start;
  }
`;

export const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;

`;

export const TotalPrice = styled.span`
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

export const StatusField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 15px;
  span {
    color: rgba(0,0,0,0.6);
    font-weight: 800;
  }
  @media(min-width:768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
  }
`;

export const ConfirmButton = styled.button`
  width: 100%;
  height: 30px;
  border: none;
  border-radius: 5px;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => (props.disabled ? 'lightgray' : '#ED2757')};
  letter-spacing: 0px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  @media(min-width:768px) {
  width: auto;
  flex-direction: row;
  letter-spacing: 2px;
  align-items: center;
  }
`;

export const PaperDiv = styled(Paper)`
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
  display: none;
  }
`;
