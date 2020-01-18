import * as Color from 'color';
import styled, { boxShadow } from 'styled';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
  display: block;
  padding: 2rem;
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.text};

  &.active {
    box-shadow: ${boxShadow(1.5)};
  }
`;


export const Name = styled.h3`
  font-size: 2rem;
`;

export const OwnerName = styled.span`
  font-weight: 300;
  color: ${({theme}) => Color(theme.colors.text).alpha(0.5).string()};
`;

export const RepoName = styled.span`
  font-weight: 500;
`;


export const Description = styled.div`
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({theme}) => Color(theme.colors.text).alpha(0.7).string()};
`;
