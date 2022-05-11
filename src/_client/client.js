import axios from "axios";

const JsonPlaceholderAxios = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

export const post = (url, body) => {
  return JsonPlaceholderAxios.post(url, body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const get = async (url) => {
  return await JsonPlaceholderAxios.get(url)
    .then((res) => {
      const data = res;
      return data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const put = (url, body) => {
  return JsonPlaceholderAxios.put(url, body)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const del = (url) => {
  return JsonPlaceholderAxios.delete(url)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
