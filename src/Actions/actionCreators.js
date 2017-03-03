import * as types from './types';

export const addToCart = (id) => {
    return {
        type: types.ADD_TO_BASKET,
        id
    }
}

export const updateCart = (id) => {
    return {
        type: types.ADD_TO_BASKET,
        id,
        //quantity
    }
}

export const addToCartAsync = (id) => {
    // Es buena práctica devolver una promise
    return (dispatch) => new Promise((resolve, reject) => {
        setTimeout(() => {
            dispatch(addToCart(id));
            resolve();
        }, 500);
    });
}