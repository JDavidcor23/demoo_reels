import React from "react";
import { setIsLoggedIn } from "../store/slices/IsLoggedIn";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  let user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = useSelector((store) => store?.IsLoggedIn?.data);
  //FUNCTIONS
  const setTrue = () => {
    dispatch(setIsLoggedIn(true));
  };

  const setFalse = () => {
    dispatch(setIsLoggedIn(false));
  };

  return {
    user,
    isLoggedIn,
    setTrue,
    setFalse,
  };
};
