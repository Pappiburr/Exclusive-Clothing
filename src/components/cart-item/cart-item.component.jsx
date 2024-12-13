import {CartItemContainer,Image,ItemDetails,Name,Price} from './cart-item.styles.jsx';


const CartItem = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <ItemDetails>
               <ItemDetails>
                    <Name>{name}</Name>
                    <Price>
                        {quantity} x ${price}
                    </Price>
                </ItemDetails>
            </ItemDetails>
        </CartItemContainer>
    );
};
export default CartItem;