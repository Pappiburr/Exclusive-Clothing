import {createContext,  useEffect, useReducer} from 'react';

// Action types for cart operations
export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN', 
    SET_CART_COUNT: 'SET_CART_COUNT',
    SET_CART_TOTAL: 'SET_CART_TOTAL',
    SET_ADD_ITEM_TO_CART: 'SET_ADD_ITEM_TO_CART',
    SET_REMOVE_ITEM_FROM_CART: 'SET_REMOVE_ITEM_FROM_CART', 
    SET_CLEAR_ITEM_FROM_CART: 'SET_CLEAR_ITEM_FROM_CART',
    UPDATE_CART_ITEMCOUNT_TOTAL: 'UPDATE_CART_ITEMCOUNT_TOTAL'
}

// Initial state for cart
const INITIAL_STATE = {
    isCartOpen: false, // Controls cart dropdown visibility
    cartItems: [], // Array of items in cart
    cartCount: 0, // Total number of items
    cartTotal: 0 // Total price of all items
}

// Reducer to handle cart state updates
const cartReducer = (state = INITIAL_STATE, action) => {
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

// Helper function to remove item (decrease quantity or remove if last one)
const removeCartItem = (cartItems, productToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== productToRemove.id);
    }

    return cartItems.map((cartItem) =>
        cartItem.id === productToRemove.id
            ? {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
};

// Helper function to completely remove item regardless of quantity
const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
};

// Create context with default values
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart : () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0
});

// Helper function to add item (increase quantity or add new)
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...productToAdd, quantity: 1}];
};

// Provider component that wraps app to provide cart context
export const CartProvider = ({children}) => {
    const [{cartItems, cartCount, cartTotal, isCartOpen}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    // Handler functions to dispatch actions
    const updateIsCartOpen = (boolean) => {
        dispatch({type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: boolean});
    }

    const addItemToCart = (productToAdd) => {
        dispatch({type: CART_ACTION_TYPES.SET_ADD_ITEM_TO_CART, payload: productToAdd});
    }

    const removeItemFromCart = (productToRemove) => {
        dispatch({type: CART_ACTION_TYPES.SET_REMOVE_ITEM_FROM_CART, payload: productToRemove});
    }

    const clearItemFromCart = (productToClear) => {
        dispatch({type: CART_ACTION_TYPES.SET_CLEAR_ITEM_FROM_CART, payload: productToClear});
    }

    // Effect to update cart count and total when items change
    useEffect(() => {
        const newCartCount = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity,
            0
        );
        const newCartTotal = cartItems.reduce(
            (total, cartItem) => total + cartItem.quantity * cartItem.price,
            0
        );
        dispatch({
            type: CART_ACTION_TYPES.UPDATE_CART_ITEMCOUNT_TOTAL, 
            payload: {
                count: newCartCount,
                total: newCartTotal
            }
        });
    }, [cartItems]);

    // Context value object with state and handlers
    const value = {
        isCartOpen,
        setIsCartOpen: updateIsCartOpen,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart,
        cartItems,
        cartCount,
        cartTotal
    }
    
    return (
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
    )
}