import {useSelector, useDispatch} from 'react-redux';
import {selectCartItems} from '../../store/cart/cart.selector.js';
import {addItemToCart, clearItemFromCart, removeCartItems} from '../../store/cart/cart.action.js';

import {CheckoutItemContainer,ImageContainer,BaseSpan,Quantity,Arrow,Value,RemoveButton} from './checkout-item.styles.jsx';

const CheckoutItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch();
    
    // Handler functions
    const handleRemoveItem = () => dispatch(removeCartItems(cartItems, cartItem));
    const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
    const handleClearItem = () => dispatch(clearItemFromCart(cartItems, cartItem));

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
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton onClick={handleClearItem}> 
             
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;