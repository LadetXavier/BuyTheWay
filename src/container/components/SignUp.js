import { connect } from 'react-redux';

import { SignUp } from 'src/components/user/SignUp.js';

import { requestAction } from 'src/actions/apiActions.js';

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


export const SignUpContainer = connect(mapStateToProps,mapDispatchToProps)(SignUp);
