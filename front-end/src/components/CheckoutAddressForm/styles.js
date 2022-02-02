import styled from 'styled-components';

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  justify-content: space-between;
  @media(min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const SelectSeller = styled.select`
  width: 100%;
  height: 40px;
  cursor: pointer;
`;

export const Label = styled.label`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 16px;
  font-weight: 600;
  gap: 10px;
  input {
    width: 100%;
    height: 40px;
    ::placeholder {
      padding-left: 10px;
    }
  }
  @media(min-width: 768px) {
    width: 30%;
  }
`;
