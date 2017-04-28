import { call, put, takeLatest, fork } from 'redux-saga/effects';
import { getProductsRequestSuccess, getProductsRequestFailure, GET_PRODUCTS_REQUEST } from './actions/products';
import { api } from './services';

export function* fetchProducts(action) {
  try {
    const products = yield call(api.fetchProducts, action);
    yield put(getProductsRequestSuccess(products));
  } catch (e) {
    yield put(getProductsRequestFailure(e.message));
  }
}

export function* productsSaga() {
  yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts);
}

// All sagas to be loaded
export default function* root() {
  yield [
    fork(productsSaga),
  ];
}
