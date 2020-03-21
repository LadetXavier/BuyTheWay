import { connect } from 'react-redux';

import { Trend } from 'src/pages';
import { requestAction, changeState } from 'src/actions/apiActions.js';


const mapDispatchToProps = (dispatch) => {  
  return {
    requestAction : (request) => (dispatch(requestAction(request))), 
    changeState: (value) => ( dispatch(changeState(value)))
  };
};

const mapStateToProps = (state) => {
  return {
    trend: state.shop.trend,
    isLoading: state.api.isLoading,
    hasError: state.api.error
  };
};

export const TrendContainer = connect(mapStateToProps, mapDispatchToProps)(Trend);
