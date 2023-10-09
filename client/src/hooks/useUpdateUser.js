import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../store/slices/infoUser";
import { io } from "socket.io-client";

export const useUpdateUser = () => {
  const socket = io(import.meta.env.VITE_BACKEND);
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
    handleChangesSocialMedia,
  };
};
