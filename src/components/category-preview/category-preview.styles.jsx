import styled from 'styled-components';
import { BrandBlack, BrandPrimary, BrandSecondary, BrandText } from '../../utils/colors/color.styles';
export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  padding-bottom: 50px;
  width: 100%;
  overflow: hidden;
  position: relative;
  background-color: ${BrandSecondary};

.ant-carousel {
  padding-top: 10px;
  padding-bottom: 10px;
  color: ${BrandText};
  background-color: ${BrandSecondary};
  border-style: solid;
  border-color: ${BrandText};
  border-width: 1px;
  
}

.ant-carousel .slick-arrow {
  color: white;
  width: 40px;
  height: 40px;
  display: flex !important;
  align-items: center;
  justify-content: center;
  background-color: rgba(18, 80, 88, 0.5);
  border-radius: 50%;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  opacity: 1 !important;
  
}

.ant-carousel .slick-arrow::before {
  content: '';
  visibility: none;

}

.ant-carousel .slick-prev {
 color: rgba(0, 0, 0, 0);
 padding-top: 30px;

} 

.ant-carousel .slick-next {
color: rgba(0, 0, 0, 0);
  right: 10px;
}

`

export const Title = styled.h2`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  text-align: center;
  color: ${BrandText};
    
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

