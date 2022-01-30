import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10%
`;

export const H1 = styled.h1``;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35%;
  min-width: 300px;
  max-width: 650px;
  border: 2px solid black;
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

export const BtnRegister = styled.button`
  width: 80%;
  padding:10px;
  margin: 10px 0px;
  border-radius: 5px;
  font-size: 20px;
  background-color: #90EE90;
  color: #FFF;
  margin-bottom: 30px;
`;

export const P = styled.p`
  color: red;
  font-size: 15px;
`;
