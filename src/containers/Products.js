import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'material-ui/Card';
import DataTables from 'material-ui-datatables';
import LinearProgress from 'material-ui/LinearProgress';

import * as productActions from '../actions/products';

export const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
  }, {
    key: 'type',
    label: 'Type',
  }, {
    key: 'iconBulk',
    label: 'Has Bulk',
  },
  {
    key: 'iconRetail',
    label: 'Has Retail',
  },
];

export class ProductsContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    // Local states, we don't need to use
    // redux's architecture to do pagination and search
    this.state = {
      page: 1,
      search: '',
      rowId: undefined,
      col: {
        isActive: false,
        table: 12,
        item: 0,
      },
    };

    // Declare and bind functions
    this.handleFilter = this.handleFilter.bind(this);
    this.handleCellDoubleClick = this.handleCellDoubleClick.bind(this);
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.getProductsRequest();
    actions.clearFilter();
  }

  handleFilter(search) {
    const { actions, data: { products } } = this.props;
    let result = products;

    if (search) {
      result = products.filter((p) =>
        p.name.toLowerCase().indexOf(search) !== -1 ||
        p.type.toLowerCase().indexOf(search) !== -1
      );
    }

    this.setState({ search: search });

    actions.getProductsFiltered(result);
  }

  handleCellDoubleClick(rowIndex, columnIndex, row) {
    const { history } = this.props;
    history.push(`/products/${row.lotId}`);
  }

  render() {
    const { data: { products, filtered, isProcessing } } = this.props;
    const { search } = this.state;
    let result = (filtered.length > 0 || search) ? filtered: products;

    result.forEach((d) => {
      d.iconRetail = d.hasRetail ? '✔' : '✘';
      d.iconBulk = d.hasBulk ? '✔' : '✘';
    });

    return (
      <div className="row">
        <Card style={{ margin: 12 }}>
          {
            isProcessing ?
            <LinearProgress mode="indeterminate" /> :
            <DataTables
              title={'Products'}
              height={'auto'}
              selectable={false}
              showRowHover
              columns={TABLE_COLUMNS}
              data={result}
              showCheckboxes={false}
              showHeaderToolbar
              filterHintText={'Search'}
              page={this.state.page}
              onCellDoubleClick={this.handleCellDoubleClick}
              onFilterValueChange={this.handleFilter}
              count={products.length}
            />
          }
        </Card>
      </div>
    );
  }
}

ProductsContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
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
)(ProductsContainer);
