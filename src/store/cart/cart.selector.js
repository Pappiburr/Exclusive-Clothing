import {createSelector} from 'reselect';



const newCartCount = carItems.reduce(
    (total, cartItem) => total + carItem.quantity,
    0
);

const newCartTotal = cartItems.reduce(
    (total, cartItem) => total + cartItem.quantity * cartItem.price,
    0
);