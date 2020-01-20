import styled, { boxShadow } from 'styled';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 2rem 2rem;
  max-height: 100vh;
  overflow: hidden;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    padding: 1rem;
  }
`;


export const Divider = styled.div`
  width: 100%;
  height: 4px;
  border-radius: 8px;
  margin: 1rem 0;
  box-shadow: ${boxShadow(1, true)};
`;


export const Description = styled.p`
  font-size: 2rem;
  padding: 0.5rem;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const PageLink = styled.a`
  color: ${({theme}) => theme.colors.primary};
`;
