import styled from 'styled-components';
import { BrandBlack, BrandPrimary, BrandSecondary, BrandText } from '../../utils/colors/color.styles';

export const CartIconContainer = styled.div`
width: 45px;
height: 45px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color:${BrandText};
border-outline: 1px solid ${BrandPrimary};
`



export const ItemCount = styled.span`
    position: absolute;
    margin-top: 30px;
    font-size: 13px;
    font-weight: bold;
    bottom: 7px;
`
export const CartDropDownContainer = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: ${BrandSecondary};
    top: 90px;
    right: 40px;
    z-index: 5;

`
export const EmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
`

export const CartItems = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    color:black;
`






// cart-dropdown.styles.scss


    // button {
    //     margin-top: auto;
    // }
