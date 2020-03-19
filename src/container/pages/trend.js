import {connect} from 'react-redux';

import {Trend} from 'src/pages';
import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {  
  return {
    requestAction : (request) => {      
      return (dispatch(requestAction(request)))  
      }
  }
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.shop.listProducts,
    isLoading: state.api.isLoading,
    hasError: state.api.error
  }
}

export const TrendContainer = connect(mapStateToProps, mapDispatchToProps)(Trend);
