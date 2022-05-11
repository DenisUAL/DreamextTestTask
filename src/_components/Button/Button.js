import React from "react";
import "./styles.scss";

export default function Button({ text, tint, ...props }) {
  const classNames = tint ? `btn ${tint}` : "btn basic";
  return (
    <button {...props} className={classNames}>
      {text}
    </button>
  );
}
