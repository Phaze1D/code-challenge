import styled, { boxShadow } from 'styled';


export const Wrapper = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 1;
  display: flex;
  align-items: center;
  width: calc(100% - 4rem);
  border-radius: 8px;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  box-shadow: ${boxShadow(3.5)};
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
