import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Products from '../components/Products';

const mapStateToProps = () => {
    // Define connection properties
    return {};
};

export function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        // Define connected actions
    }, dispatch);
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Products);
