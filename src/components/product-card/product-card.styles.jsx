import styled from 'styled-components';

export const ProductCardContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 380px;
align-items: center;
position: relative;
padding-bottom: 20px;

img {
    width: 100%;
    height: 90%;
    object-fit: cover;
    margin-bottom: 10px;
}

button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
}

&:hover {
    img {
        opacity: 0.8;
    }

    button {
        opacity: 0.85;
        display: flex;
    }

    .carouselButton {
        opacity: 1;
    }
}

.footer {
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    padding: 0 10px;

    .name {
        width: 90%;
        margin-bottom: 15px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .price {
        width: 10%;
    }
}
`

