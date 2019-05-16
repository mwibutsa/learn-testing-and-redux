import { FETCH_POSTS, NEW_POST } from './types';

const apiURL = 'https://jsonplaceholder.typicode.com/posts';
export const fetchPosts = () => (dispatch) => {
  fetch(apiURL)
    .then((result) => result.json())
    .then((posts) =>
      dispatch({
        type: FETCH_POSTS,
        data: posts,
      })
    );
};
export const createPost = (postData) => (dispatch) => {
  fetch(apiURL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(postData),
  })
    .then((result) => result.json())
    .then((post) =>
      dispatch({
        type: NEW_POST,
        data: post,
      })
    );
};
