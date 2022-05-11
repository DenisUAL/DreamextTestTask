import React, { useState } from "react";
import "./styles.scss";
import {
  removePostFromAPI,
  updatePostFromAPI,
} from "../../_redux/actions/serviceActions";
import { useDispatch, useSelector } from "react-redux";

import {
  selectDeletingPost,
  selectUpdatingPost,
} from "../../_redux/reducers/postsSlice";
import Loader from "../Loader/Loader";
import TextInput from "../TextInput";
import PostCardMenuElement from "../PostCardMenuElement";

export default function PostCard({ id, title, body }) {
  const dispatch = useDispatch();

  const deletingPost = useSelector(selectDeletingPost);
  const updatingPost = useSelector(selectUpdatingPost);

  const isThisPostDeleting = deletingPost === id;
  const isThisPostUpdating = updatingPost === id;

  const [editMode, setEditMode] = useState(false);
  const [cardTitle, setCardTitle] = useState(`${id}) ${title}`);
  const [cardBody, setCardBody] = useState(body);
  const [tempCardVal, setTempVal] = useState({});

  const toggleEdit = (id) => {
    setTempVal({ cardTitle, cardBody });
    if (editMode) {
      dispatch(updatePostFromAPI({ id, title: cardTitle, body: cardBody }));
    }
    setEditMode(!editMode);
  };

  const cancelEdit = () => {
    const { cardTitle, cardBody } = tempCardVal;
    setCardTitle(cardTitle);
    setCardBody(cardBody);
    setEditMode(false);
  };

  const onTitleChange = (e) => {
    setCardTitle(e.target.value);
  };

  const onBodyChange = (e) => {
    setCardBody(e.target.value);
  };

  const removePost = () => {
    dispatch(removePostFromAPI(id));
  };

  return (
    <div className="card">
      {isThisPostDeleting || isThisPostUpdating ? (
        <Loader />
      ) : (
        <div className="card-body">
          <div className="title-container">
            {editMode ? (
              <div className="title">
                <TextInput value={cardTitle} onChange={onTitleChange} />
              </div>
            ) : (
              <h3 className="title">{cardTitle}</h3>
            )}
          </div>
          <div className="body-container">
            {editMode ? (
              <div className="text-content">
                <TextInput
                  textArea={true}
                  value={cardBody}
                  onChange={onBodyChange}
                />
              </div>
            ) : (
              <p className="text-content">{cardBody}</p>
            )}
          </div>

          <PostCardMenuElement
            title="delete post"
            onClick={removePost}
            action="delete"
            notActive={editMode}
          />
          <PostCardMenuElement
            title={editMode ? "save changes" : "edit post"}
            onClick={() => toggleEdit(id)}
            action={editMode ? "save" : "edit"}
          />
          {editMode && (
            <PostCardMenuElement
              title="cancel"
              onClick={() => cancelEdit(id)}
              action="cancel"
            />
          )}
        </div>
      )}
    </div>
  );
}
