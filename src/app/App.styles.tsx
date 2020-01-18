import styled from 'styled';


export const Container = styled.div`
  display: flex;
  min-width: 100vw;
  min-height: 100vh;
  padding: 2rem;
  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding: 0;
  }
`;
