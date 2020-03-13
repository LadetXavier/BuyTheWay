import React from 'react';
import Cookies from 'js-cookie';

import CommentCard from 'src/components/shop/CommentCard.js';

const Comment = ({comments}) => {

  let formComment = <> </>;
  let commentsArray = [];
  if(comments !== undefined) {
    commentsArray = comments.map( current => (
      <CommentCard comment={current} />
    ))
  }
  if(Cookies.get('user_id') !== undefined) {
    formComment = (
      <form action="">
        <input type="text"/>
        <button type="submit">Commenter</button>
      </form>    
    );
  }

  return (
    <div>
    {commentsArray}
    {formComment}
    </div>
  )
}

export default Comment
