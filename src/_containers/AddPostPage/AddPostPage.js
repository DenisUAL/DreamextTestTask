import React, { useEffect } from "react";
import "./styles.scss";
import Header from "../Header";
import NewPostCard from "../../_components/NewPostCard";
import { useSelector } from "react-redux";
import { selectLoggedInStatus } from "../../_redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";

export default function AddPostPage(props) {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLoggedInStatus);
  // useEffect(() => {
  //   if (!isLoggedIn) navigate("/login");
  // },[isLoggedIn]);

  return (
    <div>
      <Header />
      <NewPostCard />
    </div>
  );
}
