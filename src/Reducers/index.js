import * as types from '../Actions/types';

const reducer = (state={}, action) => {
    switch (action.type) {
        case types.ADD_TO_BASKET:
            let productInCart = state.hasOwnProperty(action.id) ? state[action.id] + 1 : 1;
            return Object.assign({}, state, {
                [action.id]: productInCart
            });

        default:
            return state;
    }
};

export default reducer;