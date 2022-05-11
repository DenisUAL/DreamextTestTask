import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: "posts",
  initialState: {
    deletingPost: null,
    updatingPost: null,
    creatingPost: false,
    loadingPosts: false,
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    startLoadingPosts: (state, action) => {
      state.loadingPosts = true;
    },
    stopLoadingPosts: (state, action) => {
      state.loadingPosts = false;
    },
    startDeletingPost: (state, action) => {
      state.deletingPost = action.payload;
    },
    stopDeletingPost: (state, action) => {
      state.deletingPost = null;
    },
    startCreatingPost: (state, action) => {
      state.creatingPost = true;
    },
    stopCreatingPost: (state, action) => {
      state.creatingPost = false;
    },
    startUpdatingPost: (state, action) => {
      state.updatingPost = action.payload;
    },
    stopUpdatingPost: (state, action) => {
      state.updatingPost = null;
    },
  },
});
export const selectPosts = (state) => state.postsData.posts;
export const selectLoadingPosts = (state) => state.postsData.loadingPosts;
export const selectDeletingPost = (state) => state.postsData.deletingPost;
export const selectCreatingPost = (state) => state.postsData.creatingPost;
export const selectUpdatingPost = (state) => state.postsData.updatingPost;
export const {
  setPosts,
  startLoadingPosts,
  stopLoadingPosts,
  startDeletingPost,
  stopDeletingPost,
  startCreatingPost,
  stopCreatingPost,
  startUpdatingPost,
  stopUpdatingPost,
} = postsSlice.actions;

export default postsSlice.reducer;
