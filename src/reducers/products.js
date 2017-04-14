import * as a from '../actions/products';

const INITIAL_STATE = {
    products: [],
    isProcessing: false,
}

export default function productsReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case a.GET_PRODUCTS_REQUEST: {
            // Handle action
        }

        case a.GET_PRODUCTS_REQUEST_SUCCESS: {
            // Handle action
        }

        case a.GET_PRODUCTS_REQUEST_FAILURE: {
            // Handle action
        }

        default:
            return state;
    }
}
