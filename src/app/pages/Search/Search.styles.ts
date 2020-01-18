import styled, { boxShadow } from 'styled';

export const Container = styled.div`
  font-size: 2rem;
  width: 100%;
  max-width: 380px;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: ${boxShadow(4, true)};


  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin: 0 auto;
  }
`;
