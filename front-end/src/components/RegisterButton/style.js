import styled from 'styled-components';

const Button = styled.button`
  width: 80%;
  padding:10px;
  border-color: #4B39FF;
  border-radius: 5px;
  color: #4B39FF;
  background-color: #FFF;
  cursor: pointer;
  :hover {
    border-color: #22197d;
    color: #22197d;
  }
  @media(min-width: 768px){
    height: 50px;
    width: 45%;
  }
`;

export default Button;
