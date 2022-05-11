import Localbase from "localbase";
import jwt from "jsonwebtoken";
import TOKEN_SECRET from "../dotEnvImitation";
let db = new Localbase("db");
db.config.debug = false;

export const readSessions = (username) => {
  return db
    .collection("sessions")
    .get()
    .then((res) => {
      if (res) {
        return res;
      }
      return null;
    })
    .catch((res) => console.error(res.message));
};

export const addSession = (data) => {
  const sessionToken = jwt.sign(data, TOKEN_SECRET);

  return readSessions().then((res) => {
    const sessionExists =
      res &&
      res.find((session) => {
        return session.token !== undefined;
      });

    if (sessionExists) {
      alert("Session for this user already created!");
      return sessionExists.token;
    } else {
      return db
        .collection("sessions")
        .add({ token: sessionToken })
        .then((res) => {
          if (res.success) {
            return res.data.data.token;
          } else return false;
        })
        .catch((res) => console.error(res.message));
    }
  });
};

export const readUserData = (login) => {
  return db
    .collection("users")
    .doc({ username: login })
    .then((res) => res.data)
    .catch((res) => console.error(res.message));
};

export const addUser = (data) => {
  return db
    .collection("users")
    .add(data)
    .then((res) => res.data)
    .catch((res) => console.error(res.message));
};

export const logIn = ({ username, password }) => {
  return db
    .collection("users")
    .doc({ username })
    .get()
    .then((data) => {
      if (data && data.password === password) {
        alert(`User ${username} authentificated successfully`);
        return addSession(data);
      } else {
        alert("Authentification failed, no such user!");
        return false;
      }
    })
    .catch((res) => console.error(res.message));
};

export const logOut = (callback) => {
  return db
    .collection("sessions")
    .set([])
    .then((res) => {
      callback();
      return res;
    })
    .catch((res) => console.error(res.message));
};
