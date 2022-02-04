import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const TableContainer = styled.section`
  width: 100%;
  padding: 10px;
  max-width: 1024px;

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
