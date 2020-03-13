import {connect} from 'react-redux';

import App from 'src/components/App/App.js';
import { requestAction } from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),    
  }
}

const mapStateToProps = (state) => {
  return {   
    isLogged: state.api.isLogged,
    connected: state.user.connected
  }
}


export const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);


