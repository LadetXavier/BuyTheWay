import {connect} from 'react-redux';

import {Cart} from 'src/pages';
import {requestAction} from 'src/actions/apiActions.js';
import {changeState} from 'src/actions/shop.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),
    changeCart: (value) => dispatch(changeState(value))
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    isLoading: state.api.isLoading,
    isValidate: state.api.isValidate
  }
}

export const cartContainer = connect(mapStateToProps, mapDispatchToProps)(Cart);
