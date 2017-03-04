import * as types from './types';

export const addToCart = (id) => {
    return {
        type: types.ADD_TO_BASKET,
        id
    };
};

export const addToCartAsync = (id) => {
    // Es buena práctica devolver una promise
    return (dispatch) => new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch(addToCart(id));
            resolve();
        }, 1000);
    });
};

export const updateCart = (id, quantity) => {
    console.log('Updating cart');
    return {
        type: types.UPDATE_CART,
        id: id,
        quantity: quantity
    };
};

export const updateShipping = (shippingInfo) => {
    console.log('Updating Shipping');
    return {
        type: types.UPDATE_SHIPPING,
        shipping: shippingInfo
    };
};