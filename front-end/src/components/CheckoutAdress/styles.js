import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { GrMapLocation } from 'react-icons/gr';

export const ConfirmContainer = styled.section`
  width: 100%;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  @media(min-width: 768px) {
    max-width: 1024px;
    overflow-x: auto;
  }
`;

export const PaperDiv = styled(Paper)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 50px;
  padding: 50px 10px;
`;

export const MapIcon = styled(GrMapLocation)`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: #F5CC00;
  border-radius: 9px;
  transform: translateY(-70px);
    margin-bottom: -70px;
  @media(min-width: 768px) {
    width: 90px;
    height: 90px;
    padding: 15px;
    transform: translateY(-90px);
    margin-bottom: -90px;
  }
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

export const ConfirmButton = styled.button`
  background-color: ${(props) => (props.disabled ? 'rgba(0, 0, 0, 0.2)' : '#149911')} ;
  border: none;
  padding: 10px;
  width: 100%;
  height: 50px;
  color: white;
  font-size: 24px;
  font-weight: 800;
  border-radius: 6px;
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
  @media(min-width: 768px) {
    width: 40%;
  }
`;

export const Form = styled.form`
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

export const H1 = styled.h1`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 40px;
  @media(min-width: 950px) {
    margin-bottom: 10px;

  }
`;
