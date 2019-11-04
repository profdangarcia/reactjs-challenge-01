import React from 'react';
import './PostItem.css';



function ItemComments( { comment } ){
  return (
    <div className="comment-box">
      <img className="user-avatar" src={comment.user_avatar} alt="Avatar pessoa comentário" />
      <div className="comment-content">
          <p><strong>{comment.user}</strong> {comment.comment_content}</p>
      </div>
    </div>
  );
}

function PostItem( { post } ) {
  return (
    <div className="post">
        <div className="user-info">
            <img 
              className="user-avatar" 
              src={post.user_avatar} 
              alt="Avatar do usuário" 
            />
            <div className="post-info">
                <span className="user-name"> {post.user}</span>
                <small>{post.date}</small>
            </div>
        </div>
        <div className="post-content">
            <p>{post.post_content}</p>
        </div>
        <hr />
        <div className="post-comments">
            {post.comments.map(comment => (
              <ItemComments key={comment.id} comment={comment}/>
            ))}
        </div>
    </div>
  );
}




export default PostItem;