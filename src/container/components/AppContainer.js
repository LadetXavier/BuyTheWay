import {connect} from 'react-redux';

import App from 'src/components/App/App.js';
import { requestAction } from 'src/actions/apiActions.js';
import { changeState } from 'src/actions/user.js'


const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),  
    changeState: (data) => dispatch(changeState(data))   
  }
}

const mapStateToProps = (state) => {
  return {   
    isLogged: state.api.isLogged,
    connected: state.user.connected
  }
}


export const AppContainer = connect(mapStateToProps,mapDispatchToProps)(App);


