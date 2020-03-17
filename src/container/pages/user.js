import {connect} from 'react-redux';

import {User} from 'src/pages';

import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),    
  }
}

const mapStateToProps = (state) => {
  return {    
    userData: state.user.userData
  }
}


export const UserContainer = connect(mapStateToProps,mapDispatchToProps)(User);
