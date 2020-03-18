import {connect} from 'react-redux';

import {Category} from 'src/pages';
import { requestAction, changeState } from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {  
  return {
    requestAction : (request) => (dispatch(requestAction(request))),     
    changeState: (value) => ( dispatch(changeState(value)))

  }
}

const mapStateToProps = (state) => {
  return {
    listProducts: state.shop.listProducts,
    isLoading: state.api.isLoading,
    hasError: state.api.error
  }
}

export const categoryContainer = connect(mapStateToProps, mapDispatchToProps)(Category);
