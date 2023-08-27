export const saveLocalStorage = (userInfoAndToken) => {
  localStorage.setItem("user", JSON.stringify(userInfoAndToken));
};
