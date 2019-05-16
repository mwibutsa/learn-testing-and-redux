import React from 'react';
const Post = (props) => {
  const { post } = props;
  return (
    <div className="text-justify">
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
