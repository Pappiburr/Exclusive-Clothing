import { CART_ACTION_TYPES } from "./cart.types";


export const CART_INITIAL_STATE = {
    isCartOpen: false, // Controls cart dropdown visibility
    cartItems: [], // Array of items in cart
    cartCount: 0, // Total number of items
    cartTotal: 0 // Total price of all items
}

// Reducer to handle cart state updates
export const cartReducer = (state = CART_INITIAL_STATE, action = {}) =>{
    const { type, payload} = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
        return {
            ...state,
            cartItems: payload,
        };
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
               isCartOpen: payload,
            };
        default:
            return state;
    }
}