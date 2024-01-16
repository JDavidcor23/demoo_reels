import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../store/slices/infoUser";
import { io } from "socket.io-client";
import { setOpenModalSocialMedia } from "../store/slices/openModalSocialMedia";
import { useEffect } from "react";

export const useUpdateUser = () => {
  const dispatch = useDispatch();

  const socket = io(import.meta.env.VITE_BACKEND);

  const infoUser = useSelector((state) => state.infoUser);

  const oldUserInfo = localStorage.getItem("user");

  const handleChange = (e) => {
    dispatch(setInfoUser({ ...infoUser, [e.target.name]: e.target.value }));
  };

  const openModalSocialMedia = () => {
    dispatch(setOpenModalSocialMedia(true));
  };

  const closeModalSocialMedia = () => {
    dispatch(setOpenModalSocialMedia(false));
  };

  const handleChangesSocialMedia = (name, url) => {
    const idIsAlreadyAdded = infoUser.social_media.findIndex(
      (socialMedia) => socialMedia.name === name
    );
    if (idIsAlreadyAdded !== -1) {
      const updatedSocialMedia = [...infoUser.social_media];
      updatedSocialMedia[idIsAlreadyAdded] = { name, url };

      dispatch(
        setInfoUser({
          ...infoUser,
          social_media: updatedSocialMedia,
        })
      );
    } else {
      dispatch(
        setInfoUser({
          ...infoUser,
          social_media: [...infoUser?.social_media, { name, url }],
        })
      );
    }
  };

  const deleteSocialMediaFunction = (name) => {
    const updatedSocialMedia = infoUser.social_media.filter(
      (socialMedia) => socialMedia.name !== name
    );
    dispatch(
      setInfoUser({
        ...infoUser,
        social_media: updatedSocialMedia,
      })
    );
  };

  const submitChanges = async () => {
    try {
      socket.emit("editProfile", infoUser);
      socket.on("token", (token) => {
        localStorage.setItem("user", JSON.stringify(token));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const cancelEdit = () => {
    dispatch(setInfoUser({ ...JSON.parse(oldUserInfo) }));
  };

  return {
    infoUser,
    cancelEdit,
    handleChange,
    submitChanges,
    openModalSocialMedia,
    closeModalSocialMedia,
    handleChangesSocialMedia,
    deleteSocialMediaFunction,
  };
};
