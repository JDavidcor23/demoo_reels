import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSocketIo } from "./useSocketIo";
import { setInfoUser } from "../store/slices/infoUser";

export const useUpdateUser = () => {
  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);
  const dispatch = useDispatch();

  const infoUser = useSelector((state) => state.infoUser);

  const handleChange = (e) => {
    dispatch(setInfoUser({ ...infoUser, [e.target.name]: e.target.value }));
  };

  const handleChangesSocialMedia = (name, url) => {
    dispatch(
      setInfoUser({
        ...infoUser,
        social_media: [...infoUser?.social_media, { [name]: url }],
      })
    );
  };

  const submitChanges = async () => {
    try {
      await socket.emit("editProfile", infoUser);
      localStorage.setItem("user", JSON.stringify(infoUser));
    } catch (error) {
      console.log(error);
    }
  };

  return {
    infoUser,
    handleChange,
    submitChanges,
    handleChangesSocialMedia,
  };
};
