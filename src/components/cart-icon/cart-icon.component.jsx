import {useDispatch, useSelector} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector.js'
import { setIsCartOpen} from '../../store/cart/cart.action.js'


import {CartIconContainer, ItemCount} from './cart-icon.styles.jsx';




const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);
    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
           
           <FontAwesomeIcon icon={faBagShopping} style={{ fontSize: '3rem', color: "#91161A"}} />
            <ItemCount>{cartCount}</ItemCount>
            
        </CartIconContainer>
    )
};

export default CartIcon;