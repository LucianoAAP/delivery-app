import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  margin-top: 30px;
  font-size: 25px;
`;

export const Logo = styled.img`
  width: 70px;
  height: 70px;
  filter: contrast(200%);
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 480px;
  max-width: 500px;
  background-color: #FFF;
  box-shadow: 0px 0px 20px #404040;
  border-radius: 6px;
  position: relative;
  @media(min-width: 768px) {
    padding: 0 50px;
    height: 500px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  margin: 5px 0px 15px 0px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 80%;
`;

export const Button = styled.button`
  width: 80%;
  padding:10px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  background-color: ${(props) => (props.disabled ? '#a6a4bd' : '#4B39FF')};
  color: #FFF;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  :hover {
    background-color: ${(props) => (props.disabled ? '#a6a4bd' : '#22197d')};
  };
  @media(min-width: 768px){
    height: 50px;
    width: 45%;
  }
`;

export const P = styled.p`
  color: red;
  font-size: 15px;
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  height: 110px;
  flex-wrap: wrap;
  @media(min-width: 768px){
    margin-top: 30px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const Typography = styled.p`
  align-self: center;
  position: absolute;
  bottom: 3px;
`;
