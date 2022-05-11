import React from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginPage from "./_containers/LoginPage";
import Home from "./_containers/Home";
import AddPostPage from "./_containers/AddPostPage";

import { useEffect } from "react";
import { checkAuth } from "./_redux/actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  });

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<LoginPage signup={true} />} />
      <Route path="/add_post" element={<AddPostPage />} />
    </Routes>
  );
}
export default App;
