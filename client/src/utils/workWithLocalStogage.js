export const setTokenToLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

export const deleteTokenToLocalStorage = () => {
  localStorage.removeItem("token");
};

export const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token") || "";
};
