import styled, { boxShadow } from 'styled';
import { Virtuoso } from 'react-virtuoso';


export const Container = styled(Virtuoso)`
  padding: 0;
  height: 100% !important;
  overflow-y: overlay;
  overflow-x: hidden;

  &::-webkit-scrollbar {
      width: 0.5rem;
    }

    &::-webkit-scrollbar-thumb {
      background: transparent;
    }

    &:hover {
      &::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.4);
      }
    }
`;

export const EmptyState = styled.div`
  font-size: 1.8rem;
  text-align: center;
`;

export const LoadButton = styled.button`
  padding: 1rem;
  width: 90%;
  font-size: 1.8rem;
  margin: 0 auto 2rem;
  display: block;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${boxShadow(2)}
`;
