import styled from 'styled';

export const Container = styled.div`
  font-size: 2rem;
  width: 100%;
  max-width: 380px;
  padding: 2rem;
  border-radius: 8px;


  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin: 0 auto;
    border-radius: 0px;
  }
`;
