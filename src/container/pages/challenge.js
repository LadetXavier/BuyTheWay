import { connect } from 'react-redux';

import { Challenge } from 'src/pages';
import { requestAction, changeState } from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {  
  return {
    requestAction : (request) => (dispatch(requestAction(request))), 
    changeState: (value) => ( dispatch(changeState(value)))
  }
}

const mapStateToProps = (state) => {
  return {
    listRandom: state.shop.listRandom,
    isLoading: state.api.isLoading
  }
}

export const ChallengeContainer = connect(mapStateToProps, mapDispatchToProps)(Challenge);
