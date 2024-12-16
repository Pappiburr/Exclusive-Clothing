import { useContext } from 'react';
import { CartContext } from '../contexts/cart.context';
import {CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { clearItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    // Handler functions
    const handleRemoveItem = () => removeItemFromCart(cartItem);
    const handleAddItem = () => addItemToCart(cartItem);
    const handleClearItem = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={name} />
            </ImageContainer>
           <BaseSpan>{name}</BaseSpan>
            <Quantity>
               <Arrow onClick={handleRemoveItem}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={handleAddItem}>
                    &#10095;
                </Arrow>
                </Quantity>
            <span className='price'>${price}</span>
            <RemoveButton onClick={handleClearItem}> 
             
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;