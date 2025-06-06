import styled from 'styled-components';
import { BrandText, BrandPrimary } from '../../utils/colors/color.styles';






export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px ;
    margin: 20px;
    font-size: 30px;
    align-items: center;
    color: ${BrandText};
    background-color: ${ BrandText};
`;

export const ImageContainer = styled.div`
    width: 23%;
    padding-right: 30px;

    img {
        width: 80%;
        height: 80%;
    }
`;

export const BaseSpan = styled.span`
    width: 23%;
    color: ${BrandPrimary};
`;

export const Quantity = styled(BaseSpan)`
    display: flex;
    color: ${BrandText};
`;

export const Arrow = styled.div`
    cursor: pointer;
    user-select: none;
`;

export const Value = styled.span`
    margin: 0 10px;
    color: ${BrandPrimary};
    background-color: ${BrandText};
`;

export const RemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    color: ${BrandPrimary};

`;
