
import { API_URL } from '../config/default';

const params = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

function callApi(endpoint) {
  const fullUrl = (endpoint.indexOf(API_URL) === -1) ? API_URL + endpoint : endpoint;

  return fetch(fullUrl, params)
    .then((products) => products.json())
    .catch(
      (error) => ({ error: error.message || 'Something went wrong' })
    );
}

export const fetchProducts = () => callApi('products');
