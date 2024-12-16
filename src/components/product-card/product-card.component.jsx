import {ProductCardContainer} from './product-card.styles.jsx';
import Button from '../button/button.component';
import {CartContext} from '../contexts/cart.context';
import { useContext } from 'react';

const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;
    const {addItemToCart} = useContext(CartContext);  // Change this
    const addProductToCart = () => addItemToCart(product);
    return(
        <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <div className="footer">
            <span className="name">{name}</span>
            <span className="price">{price}</span>
        </div>
        <Button buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        </ProductCardContainer>
    );
}


export default ProductCard;