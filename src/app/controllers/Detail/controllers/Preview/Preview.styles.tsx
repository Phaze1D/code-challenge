import styled, { boxShadow } from 'styled';

export const Container = styled.div`
  margin-top: 2rem;
  flex-grow: 1;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${boxShadow(5, true)};
`;
