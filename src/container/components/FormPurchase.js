import {connect} from 'react-redux';

import FormPurchase from 'src/components/shop/FormPurchase.js';

import { requestAction } from 'src/actions/apiActions.js';
import { changePurchase } from 'src/actions/shop.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),
    changePurchase : (data) => dispatch(changePurchase(data)),    
  }
}

const mapStateToProps = (state) => {
  return {    
    sizeAvailable: state.shop.sizeAvailable
  }
}


export const FormPurchaseContainer = connect(mapStateToProps,mapDispatchToProps)(FormPurchase);
