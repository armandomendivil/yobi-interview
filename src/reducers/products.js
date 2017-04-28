import * as a from '../actions/products';

const INITIAL_STATE = {
  products: [],
  filtered: [],
  isProcessing: false,
  errorMessage: '',
};

export default function productsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case a.GET_PRODUCTS_REQUEST: {
      return {
        ...state,
        isProcessing: true,
      };
    }

    case a.GET_PRODUCTS_REQUEST_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        products: payload,
        isProcessing: false,
      };
    }

    case a.GET_PRODUCTS_REQUEST_FAILURE: {
      const { payload } = action;

      return {
        ...state,
        message: payload,
        isProcessing: false,
      };
    }

    case a.GET_PRODUCTS_FILTERED: {
      const { payload } = action;
      return {
        ...state,
        filtered: payload,
        isProcessing: false,
      };
    }

    case a.CLEAR_FILTER: {
      return {
        ...state,
        filtered: [],
      };
    }

    default:
      return state;
  }
}
