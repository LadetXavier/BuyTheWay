import {connect} from 'react-redux';

import {product} from 'src/pages';
import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request))
  }
}

const mapStateToProps = (state) => {
  return {
    productDetail: state.shop.productDetail,
    isLoading: state.api.isLoading
  }
}

export const productContainer = connect(mapStateToProps, mapDispatchToProps)(product);
