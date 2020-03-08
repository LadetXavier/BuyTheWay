import {connect} from 'react-redux';

import {Cart} from 'src/pages';
import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request))
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    isLoading: state.api.isLoading
  }
}

export const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
