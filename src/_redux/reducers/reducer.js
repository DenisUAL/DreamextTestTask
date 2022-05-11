import { combineReducers } from "redux";

import authSlice from "./authSlice";
import uiSlice from "./uiSlice";
import postsSlice from "./postsSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  auth: authSlice,
  ui: uiSlice,
  postsData: postsSlice,
  // service: serviceReducer
});

export default rootReducer;
