import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Products = ({ products }) => (
  <div>
    {products.map((p, key) => (
      <div key={key}>
        <Link to={`/products/${p.lotId}`}>

        </Link>
      </div>
    ))}
  </div>
);

Products.propTypes = {
  products: PropTypes.array.isRequired,
};

export default Products;
