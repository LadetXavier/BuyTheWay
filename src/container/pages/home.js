import { connect } from 'react-redux';

import { Home } from 'src/pages';
import { requestAction } from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {  
  return {
    requestAction : (request) => {      
      return (dispatch(requestAction(request)))  
      }
  }
}

const mapStateToProps = (state) => {
  return {
    listRandom: state.shop.listRandom,
    isLoading: state.api.isLoading
  }
}

export const homeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);
