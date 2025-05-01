import { CartState } from './cart.types';
import { UnknownAction } from 'redux';
import { setCartItems, setIsCartOpen } from "./cart.action";

export const CART_INITIAL_STATE: CartState = {
    isCartOpen: false, // Controls cart dropdown visibility
    cartItems: [], // Array of items in cart
}

// Reducer to handle cart state updates
export const cartReducer = (
    state = CART_INITIAL_STATE,
    action: UnknownAction
): CartState => {
    if (setIsCartOpen.match(action)) {
        return {
            ...state,
            isCartOpen: action.payload,
        };
    }
    if (setCartItems.match(action)) {
        return {
            ...state,
            cartItems: action.payload,
        };
    }
    return state;
}