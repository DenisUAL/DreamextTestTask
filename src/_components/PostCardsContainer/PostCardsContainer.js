import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styles.scss";
import {
  getPostsFromAPI,
} from "../../_redux/actions/serviceActions";

import {
  selectPosts,
  selectLoadingPosts,
} from "../../_redux/reducers/postsSlice";
import PostCard from "../PostCard/PostCard";
import Loader from "../Loader/Loader";

export default function PostCardsContainer(props) {
  const posts = useSelector(selectPosts);
  const postsLoading = useSelector(selectLoadingPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsFromAPI());
  }, []);

  return postsLoading ? (
    <Loader />
  ) : (
    <div className="post-cards-container">
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}
