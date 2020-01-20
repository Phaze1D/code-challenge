import styled from 'styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 2rem;
  margin-top: 2rem;
  flex-grow: 1;
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  color: ${({theme}) => theme.colors.error};
`;


export const Icon = styled.i`
  font-size: 10rem;
`;
