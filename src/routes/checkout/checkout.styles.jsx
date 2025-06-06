import styled from 'styled-components';
import {BrandText, BrandPrimary, BrandSecondary} from '../../utils/colors/color.styles.jsx';
export const CheckoutContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  color: ${BrandPrimary};
  background-color: ${BrandText};
  font-size: 30px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
  color: ${BrandPrimary};
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;
  color: ${BrandPrimary};
  background-color: ${BrandText};
  &:last-child {
    width: 8%;
      color: ${BrandPrimary};

  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 35px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
  color: ${BrandPrimary};
  img {
    width: 100%;
    height: 100%;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  color: ${BrandPrimary};
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  color: ${BrandPrimary};
  background-color: ${BrandText};
`;

export const Arrow = styled.div`
  cursor: pointer;
  user-select: none;
  color: ${BrandPrimary};
`;

export const Value = styled.span`
  margin: 0 10px;
  color: ${BrandPrimary};
  background-color: ${BrandPrimary};
`;

export const RemoveButton = styled.div`
  width: 8%;
  padding-left: 12px;
  cursor: pointer;
 
    background-color: ${BrandPrimary};
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const Description = styled.span`
color: ${BrandPrimary};
`