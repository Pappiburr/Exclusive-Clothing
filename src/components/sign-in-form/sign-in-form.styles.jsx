import styled from 'styled-components'
import { BrandBlack, BrandPrimary, BrandSecondary, BrandText } from '../../utils/colors/color.styles'

export const SignInContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px;
    color: ${BrandBlack};
    background-color: ${BrandText};
`
export const Title = styled.h2`
 font-size: 38px;
    margin: 10px 0;
    color: ${BrandBlack}
`

export const ButtonsContainer = styled.div`
 display: flex;
    justify-content: space-between;
    gap: 10px; /* Adjust the value as needed */
`


