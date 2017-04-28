import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Product from '../components/Product';
import * as productActions from '../actions/products';

export class ProductContainer extends React.Component {

  componentWillMount() {
    const { actions, data: { products } } = this.props;
    if (products.length < 1) {
      actions.getProductsRequest();
    }
  }

  render() {
    const { data, match: { params: { lotId } } } = this.props;
    const product = data.products.find(
      (_product) => _product.lotId === parseInt(lotId, 10),
    );

    if (data.isProcessing) return (<div>Loading ...</div>)
    else if (!product) return (<div>Product not found ...</div>)
    else return (<Product product={product} />);
  }
}

ProductContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  product: state.product,
  data: state.products,
});

export function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductContainer);
