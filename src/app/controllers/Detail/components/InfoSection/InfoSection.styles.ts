import styled, { boxShadow } from 'styled';


export const InfoSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  font-size: 1.8rem;
`;


export const Info = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${boxShadow(2.5, true)};

  i {
    margin-right: 1rem;
  }
`;
