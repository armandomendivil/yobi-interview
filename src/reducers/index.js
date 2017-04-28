import { combineReducers } from 'redux';
import productsReducer from './products';
import productReducer from './product';

export const appReducer = combineReducers({
  product: productReducer,
  products: productsReducer,
});

export default (state, action) => appReducer(state, action);
