import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../_components/Button";
import { addUser, logEveryoneOut } from "../../_dbAPI";
import { signUp, signOut } from "../../_redux/actions/authActions";
import { selectLoggedInStatus } from "../../_redux/reducers/authSlice";
import "./styles.scss";

export default function Header(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectLoggedInStatus);

  const goToLogin = () => {
    navigate("/login");
  };

  const goToRegistration = () => {
    navigate("/signup");
  };

  const goToAddPost = () => {
    navigate("/add_post");
  };

  const logOut = () => {
    dispatch(signOut(() => navigate("/")));
  };

  return (
    <div className="header-container">
      <div className="header-left">
        <Link to="/">
          <h1 className="logo-text">Posts Viewer</h1>
        </Link>
      </div>
      <div className="header-right">
        {isLoggedIn && (
          <Button text="+ add post" tint="success" onClick={goToAddPost} />
        )}
        <Button
          text={isLoggedIn ? "sign out" : "sign in"}
          onClick={isLoggedIn ? logOut : goToLogin}
        />
        {!isLoggedIn && <Button text="sign up" onClick={goToRegistration} />}
      </div>
    </div>
  );
}
