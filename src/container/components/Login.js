import {connect} from 'react-redux';

import Login from 'src/components/user/Login.js';

import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),    
  }
}

const mapStateToProps = (state) => {
  return {   
    isLogged: state.api.isLogged
  }
}


export const LoginContainer = connect(mapStateToProps,mapDispatchToProps)(Login);
