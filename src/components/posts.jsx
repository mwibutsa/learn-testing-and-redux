import React, { Component } from 'react';
import Post from './post';
import PostForm from './postForm';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <PostForm />
        <h1>Posts</h1>
        {posts.map((post) => {
          return <Post post={post} key={post.id} />;
        })}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});
Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
};
export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
