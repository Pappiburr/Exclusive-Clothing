import {useDispatch, useSelector} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector.js';
import {addItemToCart} from '../../store/cart/cart.action.js';

import {ProductCardContainer} from './product-card.styles.jsx';
import { Button} from 'antd';


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
        <Button  color="default"  variant="solid" onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;