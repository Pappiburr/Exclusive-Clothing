import styled from 'styled-components';
import { BrandPrimary,BrandSecondary,BrandText, BrandBlack } from '../../utils/colors/color.styles';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div` 
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    border-style: solid;
    border-width: 1px;
    border-color: ${BrandText};
    background-color:${BrandPrimary};
` 


export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 1.5rem 15px 25px 15px;
`

export const NavLinksContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    color: white;
    padding-top: 1.5rem;
`

export const NavLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
   color:  ${BrandText};
    &:visited {
       color: ${BrandText};

;
    }

`

export const userName = styled.h2 `
    height: 70px;
    width: 100%;
    padding: 10px 15px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`
