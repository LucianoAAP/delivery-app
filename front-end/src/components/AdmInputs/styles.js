import styled from 'styled-components';

export const AdmSection = styled.section`
  padding: 10px;
  display: flex;
  width: 100vw;
  max-width: 1024px;
  flex-direction: column;
  gap: 40px;
  font-family: 'Montserrat', sans-serif;
  @media(min-width: 768px) {
  }
`;

export const Select = styled.select`
  width: 50%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
  @media(min-width: 768px) {
    width: auto;
  }
`;

export const Form = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
`;

export const Input = styled.input`
  width: auto;
  height: 40px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const Button = styled.button`
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  border: none;
  background-color: #C81B78;
  color: white;
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 5px;
  cursor: pointer;
`;
