import React, { useEffect } from "react";
import { Characters, Header, Programs } from "../components";
import { useDispatch } from "react-redux";
import { setInfoUser } from "../store/slices/infoUser";

export const Home = () => {
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(
      setInfoUser({
        _id: user?._id,
        social_media: user?.social_media,
        profile_img: user?.profile_img,
        username: user?.username,
        description: user?.description,
      })
    );
  }, [user]);

  return (
    <>
      <Header />
      <Characters />
      <Programs />
    </>
  );
};
