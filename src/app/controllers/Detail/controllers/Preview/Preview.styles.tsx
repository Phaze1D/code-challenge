import styled, { boxShadow } from 'styled';

export const Container = styled.div`
  margin-top: 2rem;
  flex-grow: 1;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${boxShadow(5, true)};
`;


export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  height: 100%;
  text-align: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;
