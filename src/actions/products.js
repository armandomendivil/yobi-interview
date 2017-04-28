import { createAction } from 'redux-actions';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_REQUEST_SUCCESS = 'GET_PRODUCTS_REQUEST_SUCCESS';
export const GET_PRODUCTS_REQUEST_FAILURE = 'GET_PRODUCTS_REQUEST_FAILURE';
export const GET_PRODUCTS_FILTERED = 'GET_PRODUCTS_FILTERED';
export const CLEAR_FILTER = 'CLEAR_FILTER';

export const getProductsRequest = createAction(GET_PRODUCTS_REQUEST);
export const getProductsRequestSuccess = createAction(GET_PRODUCTS_REQUEST_SUCCESS);
export const getProductsRequestFailure = createAction(GET_PRODUCTS_REQUEST_FAILURE);
export const getProductsFiltered = createAction(GET_PRODUCTS_FILTERED);
export const clearFilter = createAction(CLEAR_FILTER);
