import styled from 'styled';
import { Link } from 'react-router-dom';


export const Header = styled.div`
  display: flex;
  align-items: center;
`;


export const RepoName = styled.h1`
  font-size: 4rem;
  margin-right: 2rem;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 3rem;
  }
`;


export const Owner = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 300;
  margin-left: auto;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    font-size: 1.8rem;
  }
`;

export const Avatar = styled.img`
  border-radius: 8px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-left: 2rem;
  opacity: 0.6;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
    width: 30px;
    height: 30px;
  }
`;

export const Back = styled(Link)`
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme}) => theme.colors.text};

   i {
    font-size: 2.5rem;
   }
`;
