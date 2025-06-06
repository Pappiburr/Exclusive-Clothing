import {useDispatch, useSelector} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector.js';
import {addItemToCart} from '../../store/cart/cart.action.js';
import {BrandPrimary} from '../../utils/colors/color.styles.jsx';
import {ProductCardContainer} from './product-card.styles.jsx';
import { Button, ConfigProvider} from 'antd';


const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product));
    return(
        <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: BrandPrimary, 
                },
            }}
        >
            <Button type="primary" onClick={addProductToCart}>Add To Cart</Button>
        </ConfigProvider>
        
      
        </ProductCardContainer>
    );
}

export default ProductCard;