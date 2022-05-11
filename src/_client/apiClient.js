import { post, get, put, del } from "./client";

export const sendCreateRequest = (body) => {
  const url = "/posts";
  return post(url, body);
};

export const sendGetRequest = () => {
  const url = "/posts";
  return get(url);
};

export const sendUpdateRequest = (body) => {
  const url = "/posts/" + body.id;
  return put(url, body);
};

export const sendDeleteRequest = (id) => {
  const url = "/posts/" + id;
  return del(url);
};
