import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import Button from "../Button";
import TextInput from "../TextInput";
import { signIn, signUp } from "../../_redux/actions/authActions";

export default function LoginForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const isSignUp = props.signup;
  const [formIncomplete, setFormIncomplete] = useState(true);

  const loginChange = (e) => {
    setLogin(e.target.value);
  };

  const isFormIncomplete = () => {
    if ((login || false) && (password || false)) {
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

  const passwordChange = (e) => {
    setPassword(btoa(e.target.value));
  };

  const submit = () => {
    isSignUp
      ? dispatch(
          signUp({ username: login, password }, () => {
            navigate("/");
          })
        )
      : dispatch(
          signIn({ username: login, password }, () => {
            navigate("/");
          })
        );
  };

  return (
    <div className="login-card">
      <div className="input-group">
        <TextInput
          errHandler={() => isFieldEmpty(login)}
          onChange={loginChange}
          placeholder="login"
        />
        <TextInput
          errHandler={() => isFieldEmpty(password)}
          onChange={passwordChange}
          placeholder="password"
          type="password"
        />
      </div>
      <div className="control-group">
        <Button
          tint={formIncomplete ? "btn-disabled" : "basic"}
          text={isSignUp ? "create user" : "login"}
          onClick={submit}
        />
      </div>
    </div>
  );
}
