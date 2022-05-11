import React from "react";
import "./styles.scss";
import { selectLoggedInStatus } from "../../_redux/reducers/authSlice";
import { useSelector } from "react-redux";

const parser = new DOMParser();
const actions = {
  delete: "&#10007;",
  edit: "&#9998;",
  save: "&#9166;",
  cancel: "&#128683;",
};
function parseSymbol(symbol) {
  return parser.parseFromString(symbol, "text/html").body.textContent;
}

export default function PostCardMenuElement({
  action,
  onClick,
  notActive,
  title,
}) {
  const isLoggedIn = useSelector(selectLoggedInStatus);
  const disabled = isLoggedIn && !notActive ? "" : " disabled";
  return (
    <div
      title={title}
      className={`card-menu-btn ${action}${disabled}`}
      onClick={onClick}
    >
      {parseSymbol(actions[action])}
    </div>
  );
}
