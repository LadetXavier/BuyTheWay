import {connect} from 'react-redux';

import {SignIn} from 'src/pages';

import {requestAction} from 'src/actions/apiActions.js';
//import {changePurchase,addCart} from 'src/actions/shop.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),    
  }
}

const mapStateToProps = (state) => {
  return {    
   isSignUp: state.api.isSignUp
  }
}


export const SignInContainer = connect(mapStateToProps,mapDispatchToProps)(SignIn);
