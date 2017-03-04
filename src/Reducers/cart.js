import * as types from '../Actions/types';

const reducer = (state={}, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET:
            let productInCart = state.hasOwnProperty(action.id) ? state[action.id] + 1 : 1;
            return Object.assign({}, state, {
                [action.id]: productInCart
            });
        case types.UPDATE_BASKET:
            return {...state, [action.id]: action.quantity};
        case types.UPDATE_SHIPPING:
            return {...state, shipping: action.shipping}
        default:
            return state;
    }
};

export default reducer;