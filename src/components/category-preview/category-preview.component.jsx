import {Link} from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { Carousel } from 'antd';

import {CategoryPreviewContainer,Title,Preview} from './category-preview.styles.jsx';

const CategoryPreview = ({title, products}) => {
    return (
      <CategoryPreviewContainer>
            <Title>
                <Link to={`/shop/${title}`}>
                    {title.toUpperCase()}
                </Link>
            </Title>
            
            <Carousel
                arrows
                autoplay
                autoplaySpeed={3000}
                slidesToShow={4}
                dots={false}
                infinite={true}
                responsive={[
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]}
            >
                {products
                .filter((_, idx) => idx < 4)
                .map((product) => (
                    <div key={product.id} style={{ padding: '0 15px', marginBottom: '20px' }}>
                        <ProductCard product={product} />
                    </div>
                ))}
            </Carousel>
      </CategoryPreviewContainer>
    )
}

export default CategoryPreview;


