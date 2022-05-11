export const setAuthToken = (token) => localStorage.setItem("authToken", token);

export const getAuthToken = () => {
  const token = localStorage.getItem("authToken");
  return token ? token : null;
};

export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};
