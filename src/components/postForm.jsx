import React, { Component } from 'react';
import { createPost } from '../actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class PostForm extends Component {
  state = {
    data: { title: '', body: '' },
  };

  onChange = ({ target }) => {
    const { data } = this.state;
    data[target.name] = target.value;
    this.setState({ data });
  };
  onSubmit = async (event) => {
    event.preventDefault();
    const { data } = this.state;
    this.props.createPost(data);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Add Post</h1>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.data.title}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              value={this.state.data.body}
              onChange={this.onChange}
            />
          </div>
          <button>Add Post</button>
        </form>
      </div>
    );
  }
}
PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};
export default connect(
  null,
  { createPost }
)(PostForm);
