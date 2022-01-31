import styled from 'styled-components';

export const ProductListContainer = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 1024px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsTitle = styled.h2`
  align-self: flex-start;
  margin: 1%;
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
  align-self: flex-end;
  justify-self: flex-end;
  margin-right: 5.5%;
  margin-top: 2%;
`;

export const StatusField = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin: 1%;
`;
