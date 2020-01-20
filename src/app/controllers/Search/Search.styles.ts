import styled from 'styled';

export const Container = styled.div`
  position: relative;
  font-size: 2rem;
  width: 100%;
  max-width: 380px;
  padding: 8rem 2rem 2rem;
  border-radius: 8px;
  max-height: 100vh;
  flex-shrink: 0;


  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    margin: 0 auto;
    border-radius: 0px;
    max-height: 100vh;
    padding: 10rem 2rem 2rem;
  }
`;
