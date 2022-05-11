import {
  startLoadingPosts,
  stopLoadingPosts,
  setPosts,
  startDeletingPost,
  stopDeletingPost,
  startCreatingPost,
  stopCreatingPost,
  startUpdatingPost,
  stopUpdatingPost,
} from "../../_redux/reducers/postsSlice";
import {
  sendGetRequest,
  sendCreateRequest,
  sendUpdateRequest,
  sendDeleteRequest,
} from "../../_client/apiClient";

export const getPostsFromAPI = () => (dispatch, getState) => {
  dispatch(startLoadingPosts());
  sendGetRequest().then((res) => {
    dispatch(setPosts(res.data));
    dispatch(stopLoadingPosts());
  });
};

export const removePostFromAPI = (id) => (dispatch, getState) => {
  dispatch(startDeletingPost(id));
  sendDeleteRequest(id).then((res) => {
    const updatedPosts = getState().postsData.posts.filter(
      (post) => post.id != id
    );
    dispatch(setPosts(updatedPosts));
    dispatch(stopDeletingPost());
  });
};

export const createPostFromAPI =
  (post, callback = () => {}) =>
  (dispatch, getState) => {
    dispatch(startCreatingPost(post.id));
    sendCreateRequest(post).then((res) => {
      const updatedPosts = [post, ...getState().postsData.posts];
      dispatch(setPosts(updatedPosts));
      dispatch(stopCreatingPost());
      callback();
    });
  };

export const updatePostFromAPI = (post) => (dispatch, getState) => {
  dispatch(startUpdatingPost(post.id));
  sendUpdateRequest(post).then((res) => {
    const updatedPosts = [
      post,
      ...getState().postsData.posts.filter((temp) => temp.id != post.id),
    ];
    dispatch(setPosts(updatedPosts));
    dispatch(stopUpdatingPost());
  });
};
