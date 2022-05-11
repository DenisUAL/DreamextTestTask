import {
  signUserIn,
  signUserOut,
  startDBInteraction,
  stopDBInteraction,
} from "../../_redux/reducers/authSlice";

import { addUser, logIn, logOut, readSessions } from "../../_dbAPI";

import {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
} from "../../_localUserAPI";

export const signUp = (userData, callback) => (dispatch, getState) => {
  dispatch(startDBInteraction());
  addUser(userData).then((res) => {
    if (res.data) {
      dispatch(stopDBInteraction());
      callback();
    } else {
      dispatch(stopDBInteraction());
      callback();
    }
  });
};

export const signIn = (userData, callback) => (dispatch, getState) => {
  dispatch(startDBInteraction());
  logIn(userData).then((res) => {
    if (res) {
      dispatch(signUserIn());
      dispatch(stopDBInteraction());
      setAuthToken(res);
      callback();
    } else {
      dispatch(stopDBInteraction());
      callback();
    }
  });
};

export const signOut = (callback) => (dispatch, getState) => {
  dispatch(startDBInteraction());
  logOut(callback).then((res) => {
    removeAuthToken();
    dispatch(signUserOut());
    dispatch(stopDBInteraction());
    callback();
  });
};

export const checkAuth =
  (callback = () => {}) =>
  (dispatch, getState) => {
    const localStorageToken = getAuthToken();
    dispatch(startDBInteraction());
    readSessions().then((res) => {
      if (res && Array.isArray(res)) {
        const existingSession = res.find((session) => {
          return session.token !== undefined;
        });
        if (existingSession && existingSession.token === localStorageToken) {
          dispatch(signUserIn());
        } else {
          dispatch(signUserOut());
        }
      }
      // callback();
      dispatch(startDBInteraction());
    });
  };
