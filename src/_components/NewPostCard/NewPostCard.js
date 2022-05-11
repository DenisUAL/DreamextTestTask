import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import TextInput from "../TextInput";
import Button from "../Button";
import { createPostFromAPI } from "../../_redux/actions/serviceActions";
import { selectLoggedInStatus } from "../../_redux/reducers/authSlice";
import { selectCreatingPost } from "../../_redux/reducers/postsSlice";
import Loader from "../Loader/Loader";

export default function NewPostCard(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postTitle, setPostTitle] = useState(null);
  const [postContent, setPostContent] = useState(null);
  const [formIncomplete, setFormIncomplete] = useState(true);
  const isLoggedIn = useSelector(selectLoggedInStatus);
  const isCreatingPost = useSelector(selectCreatingPost);

  const isFormIncomplete = () => {
    if ((postTitle || false) && (postContent || false)) {
      setFormIncomplete(false);
    } else {
      setFormIncomplete(true);
    }
  };

  const isFieldEmpty = (field) => {
    if (field !== null) {
      if (!field.length) {
        return "Required field";
      }
    }
    isFormIncomplete();
    return null;
  };

  const onTitleChange = (e) => {
    setPostTitle(e.target.value);
  };

  const onContentChange = (e) => {
    setPostContent(e.target.value);
  };

  const addPost = () => {
    dispatch(
      createPostFromAPI(
        {
          userId: Math.floor(Math.random() * 100),
          id: Math.floor(Math.random() * 10000),
          title: postTitle,
          body: postContent,
        },
        () => navigate("/")
      )
    );
  };

  const cancel = () => navigate("/");

  return isCreatingPost ? (
    <Loader />
  ) : (
    <div>
      {isLoggedIn ? (
        <div className="new-post-container">
          <h2 className="title">Creating new post</h2>
          <TextInput
            errHandler={() => isFieldEmpty(postTitle)}
            onChange={onTitleChange}
            placeholder="Enter post title"
          />
          <TextInput
            textArea={true}
            errHandler={() => isFieldEmpty(postContent)}
            onChange={onContentChange}
            placeholder="Enter post content"
          />
          <div className="btn-container">
            <Button
              tint={formIncomplete ? "btn-disabled" : "basic"}
              text="Create post"
              onClick={addPost}
            />
            <Button tint="alarm" text="Cancel" onClick={cancel} />
          </div>
        </div>
      ) : (
        <div className="new-post-container">
          <h2 className="title">Creating new post</h2>
          <div className="warning-text">Sign in to create new post!</div>
        </div>
      )}
    </div>
  );
}
