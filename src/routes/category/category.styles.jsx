import styled from 'styled-components';
import {BrandBlack, BrandText, BrandPrimary} from '../../utils/colors/color.styles.jsx';

export const CategoryContainer =styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
border-color: ${BrandPrimary};
border-width: 3px;
border-style: solid;
border-radius: 10px;
padding: 15px;
column-gap: 20px;
row-gap: 50px;
background-color: ${BrandBlack};
color: ${BrandText};

`

export const CategoryTitle = styled.h2`

font-size: 38px;
margin-bottom: 25px;
text-align: center;

`


