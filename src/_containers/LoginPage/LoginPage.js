import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../_components/Button";
import LoginForm from "../../_components/LoginForm";
import TextInput from "../../_components/TextInput";
import {
  getPostsFromAPI,
  removePostFromAPI,
} from "../../_redux/actions/serviceActions";
import { selectLoadingPosts } from "../../_redux/reducers/postsSlice";
import Header from "../Header";

export default function LoginPage(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <LoginForm {...props} />
    </div>
  );
}
