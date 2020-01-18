import styled, { boxShadow } from 'styled';


export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  box-shadow: ${boxShadow(3)};
  background: ${({theme}) => theme.colors.background};
`;


export const Input = styled.input`
  width: 100%;
  font-size: 2rem;
  background: transparent;
  margin-left: 1.5rem;
`;

export const Icon = styled.i`

`;
