import {connect} from 'react-redux';

import {Cart} from 'src/pages';
import { requestAction, changeState } from 'src/actions/apiActions.js';
import { changeStateShop } from 'src/actions/shop.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),
    changeState: (value) => ( dispatch(changeState(value))),
    changeCart: (value) => dispatch(changeStateShop(value))
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
