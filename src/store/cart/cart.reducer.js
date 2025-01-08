import { CART_ACTION_TYPES } from "./cart.types";


export const CART_INITIAL_STATE = {
    isCartOpen: false, // Controls cart dropdown visibility
    cartItems: [], // Array of items in cart
    cartCount: 0, // Total number of items
    cartTotal: 0 // Total price of all items
}

// Reducer to handle cart state updates
export const cartReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload // Toggle cart open/closed
            }
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                cartItems: payload // Set cart items directly
            }
        case CART_ACTION_TYPES.SET_CART_COUNT:
            return {
                ...state,
                cartCount: payload // Update item count
            }
        case CART_ACTION_TYPES.SET_CART_TOTAL:
            return {
                ...state,
                cartTotal: payload // Update total price
            }
        case CART_ACTION_TYPES.SET_ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, payload) // Add new item
            }
        case CART_ACTION_TYPES.SET_REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, payload) // Remove item
            }
        case CART_ACTION_TYPES.SET_CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: clearCartItem(state.cartItems, payload) // Clear item completely
            }
            case CART_ACTION_TYPES.UPDATE_CART_ITEMCOUNT_TOTAL:
                return {
                    ...state,
                    cartCount: payload.count, // Update count and total together
                    cartTotal: payload.total
                }
            default:
                return state;
        }
    }