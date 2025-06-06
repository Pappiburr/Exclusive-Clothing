import { useSelector} from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import ShippingForm from '../../components/shipping/shipping-form';
import PaymentForm from '../../components/payment-form/payment-form.component';
import { 
    CheckoutContainer, 
    CheckoutHeader, 
    HeaderBlock, 
    Total ,
    Description
} from './checkout.styles';

const Checkout = () => {
    const  cartItems = useSelector(selectCartItems);
    const  cartTotal = useSelector(selectCartTotal);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <Description>Product</Description>
                </HeaderBlock>
                <HeaderBlock>
                    <Description>Description</Description>
                </HeaderBlock>
                <HeaderBlock>
                    <Description>Quantity</Description>
                </HeaderBlock>
                <HeaderBlock>
                    <Description>Price</Description>
                </HeaderBlock>
                <HeaderBlock>
                    <Description>Remove</Description>
                </HeaderBlock>
            </CheckoutHeader>

            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            
            <Total>Total: ${cartTotal}</Total>
            <ShippingForm/>
            <PaymentForm/>
            
        </CheckoutContainer>
    );
};

export default Checkout;