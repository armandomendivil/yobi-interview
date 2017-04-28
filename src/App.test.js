import React from 'react';
import ReactDOM from 'react-dom';
import testUtils from 'react-dom/test-utils';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import sagaHelper from 'redux-saga-testing';
import { call, put } from 'redux-saga/effects';
import App from './App';
import ProductComponent from './components/Product';
import productsReducer from './reducers/products';
import { fetchProducts } from './sagas';
import { getProductsRequestSuccess } from './actions/products';

const api = jest.fn();
jest.dontMock('./components/Product');

describe('product detail component', () => {
  it('it should display product detail', () => {
    var product = {
      name: 'OG Kush',
      descripton: 'This is a test description',
      type: 'Indica',
      hasBulk: true,
      hasRetail: true,
      batchNumber: 12,
      lotId: 10,
      title: 'Product',
    };

    var productComponent = testUtils.renderIntoDocument(
      <MuiThemeProvider>
        <ProductComponent product={product} />
      </MuiThemeProvider>
    );

    var label = testUtils.findRenderedDOMComponentWithTag(productComponent, 'h3');

    expect(label.textContent).toEqual(product.title);
  });
});

describe('Request reducer', () => {
  it('has a default state', () => {
    expect(productsReducer(undefined, { type: 'unexpected' })).toEqual({
      products: [],
      filtered: [],
      isProcessing: false,
      errorMessage: '',
    });
  });
});

// Redux - saga
describe('When testing a very simple Saga', () => {
  const it = sagaHelper(fetchProducts('GET_PRODUCTS_REQUEST'));

  it('should have called the mock API first', (result) => {
    expect(api).not.toHaveBeenCalled();
  });

  it('Trigger getProductsRequestSuccess action', (result) => {
    expect(result).toEqual(put(getProductsRequestSuccess()));
  });

  it('and then nothing', (result) => {
    expect(result).toBeUndefined();
  });
});
