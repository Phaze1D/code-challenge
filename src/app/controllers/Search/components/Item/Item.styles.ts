import * as Color from 'color';
import styled, { boxShadow } from 'styled';
import { NavLink } from 'react-router-dom';

export const Card = styled(NavLink)`
  display: block;
  padding: 2rem 2rem;
  border-radius: 8px;
  cursor: pointer;
  color: ${({theme}) => theme.colors.text};

  &.active {
    box-shadow: ${boxShadow(1.5, true)};
  }
`;


export const Header = styled.div`
  display: flex;
  align-items: center;
`;


export const Name = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 2rem;
  overflow: hidden;
  color: ${({theme}) => Color(theme.colors.text).alpha(0.5).string()};
`;


export const OwnerName = styled.span`
  font-weight: 300;
`;


export const RepoName = styled.span`
  font-weight: 500;
  color: ${({theme}) => theme.colors.text};
`;


export const Description = styled.p`
  font-size: 1.6rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: ${({theme}) => Color(theme.colors.text).alpha(0.7).string()};
`;


export const Date = styled.p`
  font-size: 1.4rem;
  text-align: right;
  color: ${({theme}) => Color(theme.colors.text).alpha(0.5).string()};
`;


export const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
  flex-shrink;
`;
