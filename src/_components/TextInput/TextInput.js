import React from "react";
import { useEffect, useState } from "react";
import "./styles.scss";

export default function TextInput({
  errHandler = () => {},
  textArea,
  ...props
}) {

  const [errText, setErrText] = useState("");const classNames = errText ? "text-input error" : "text-input";

  useEffect(() => {
    setErrText(errHandler());
  });

  return (
    <div className="input-wrapper">
      {textArea ? (
        <textarea className={`${classNames} area`} {...props} />
      ) : (
        <input className={classNames} {...props} />
      )}
      <p className="err-text">{errText}</p>
    </div>
  );
}
