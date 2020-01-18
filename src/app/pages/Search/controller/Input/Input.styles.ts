import styled, { boxShadow } from 'styled';

export const Input = styled.input`
  width: 100%;
  border-radius: 8px;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  box-shadow: ${boxShadow(3)};
  background: ${({theme}) => theme.colors.background};
`;
