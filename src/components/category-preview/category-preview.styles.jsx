import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  width: 100%;
  overflow: hidden;
  position: relative;

.ant-carousel {
padding 3rem;
color:white;
border-style: solid;
border-color: white;
border-width: 1px;
},



.ant-carousel .slick-arrow {
  color: #white;
  width: 1%;
  justify-content: center;
  align-content:center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 17%;
},

.ant-carousel .slick-arrow .slick-prev {
  color: #2563eb;

},

.ant-carousel .slick-arrow .slick-next {
  color: #2563eb;

},

`

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
  color:white;
    
`

export const Preview = styled.div`
  width: 100%;
`

export const carouselButton = `
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  color: blue;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  z-index: 2;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }

  &.slick-prev {
    left: 10px;
  }

  &.slick-next {
    right: 10px;
  }
`

