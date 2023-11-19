import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../store/slices/infoUser";
import { io } from "socket.io-client";
import { setOpenModalSocialMedia } from "../store/slices/openModalSocialMedia";

export const useUpdateUser = () => {
  const socket = io(import.meta.env.VITE_BACKEND);

  const dispatch = useDispatch();

  const infoUser = useSelector((state) => state.infoUser);

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
    const socialMediaIndex = infoUser?.social_media?.findIndex(
      (social) => Object.keys(social)[0] === name
    );

    if (socialMediaIndex !== -1) {
      const updatedSocialMedia = [...infoUser.social_media];
      updatedSocialMedia[socialMediaIndex] = { [name]: url };

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
          social_media: [...infoUser?.social_media, { [name]: url }],
        })
      );
    }
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

  return {
    infoUser,
    handleChange,
    submitChanges,
    openModalSocialMedia,
    closeModalSocialMedia,
    handleChangesSocialMedia,
  };
};
