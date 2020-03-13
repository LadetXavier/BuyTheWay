import { connect } from 'react-redux';

import Icons from 'src/components/Header/icons.js';
import { requestAction } from 'src/actions/apiActions.js';

const mapDispatchToProps = ( dispatch ) => {
  return {
    requestAction : ( request ) => dispatch(requestAction(request)),    
  }
}
const mapStateToProps = ( state ) => {
  return {   
    isLogged: state.api.isLogged,
    connected: state.user.connected,
    userData: state.user.userData    
  }
}
export const IconsContainer = connect( mapStateToProps,mapDispatchToProps )( Icons );


