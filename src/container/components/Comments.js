import {connect} from 'react-redux';

import Comments from 'src/components/shop/Comments.js';

import {requestAction} from 'src/actions/apiActions.js';

const mapDispatchToProps = (dispatch) => {
  return {
    requestAction : (request) => dispatch(requestAction(request)),    
  }
}

const mapStateToProps = (state) => {
  return {   
    isLogged: state.api.isLogged
  }
}


export const CommentsContainer = connect(mapStateToProps,mapDispatchToProps)(Comments);
