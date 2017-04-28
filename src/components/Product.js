
import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import globalStyles from '../styles';

function Product({
  product: {
    name,
    type,
    descripton,
    lotId,
    hasBulk,
    hasRetail,
    batchNumber,
  }}) {
  return (
    <Paper style={globalStyles.paper}>
      <h3 style={globalStyles.title}>Product</h3>

      <TextField
        name="name"
        floatingLabelText="Name"
        value={name}
        disabled
      />
      <br />
      <TextField
        name="type"
        floatingLabelText="Type"
        value={type}
        disabled
      />
      <br />
      <TextField
        name="description"
        floatingLabelText="Description"
        value={descripton}
        disabled
      />
      <br />
      <TextField
        name="lotId"
        floatingLabelText="LOT"
        type="number"
        value={lotId}
        disabled
      />
      <TextField
        name="batchNumber"
        floatingLabelText="Batch Number"
        type="number"
        value={batchNumber}
        disabled
      />
      <TextField
        name="hasBulk"
        floatingLabelText="Has Bulk"
        type="string"
        value={hasBulk ? 'true': 'false'}
        disabled
      />
      <TextField
        name="hasRetail"
        floatingLabelText="Has Retail"
        type="string"
        value={hasRetail ? 'true': 'false'}
        disabled
      />
    </Paper>
  );
}

Product.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  descripton: PropTypes.string,
  lotId: PropTypes.number,
};

export default Product;
