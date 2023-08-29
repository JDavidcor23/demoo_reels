import React from "react";
import { setIsLoggedIn } from "../store/slices/IsLoggedIn";
import { useDispatch, useSelector } from "react-redux";

export const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store?.IsLoggedIn?.data);

  const setTrue = () => {
    dispatch(setIsLoggedIn(true));
  };

  const setFalse = () => {
    dispatch(setIsLoggedIn(false));
  };

  return {
    isLoggedIn,
    setTrue,
    setFalse,
  };
};
