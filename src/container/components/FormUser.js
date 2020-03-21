import { connect } from 'react-redux';

import FormUser from 'src/components/user/FormUser.js';
import { requestAction } from 'src/actions/apiActions.js';
import { changeStateUser } from 'src/actions/user.js';


const mapDispatchToProps = ( dispatch ) => {
  return {
    requestAction : ( request ) => dispatch(requestAction(request)),
    changeStateUser: (value) => ( dispatch(changeStateUser(value))),
       
  }
}
const mapStateToProps = ( state ) => {
  return {   
    userLoading: state.api.userLoading,
    connected: state.user.connected,
    userData: state.user.userData    
  }
}
export const FormUserContainer = connect( mapStateToProps,mapDispatchToProps )(FormUser);


