import { useRef, useState } from "react";

export const useProfileInfo = () => {
  const [edit, setEdit] = useState(false);
  const [openModalUpload, setOpenModalUpload] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const infoProfile = {
    name: "Jorge David Diaz",
    profileInfo:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores modirem error similique autem accusamus. Eligendi quia totam illo adipiscifacilis mollitia voluptates cumque repellendus voluptatem, commodi ut! Ab, provident.",
  };

  const textProfile = {
    edit: {
      button1: "SAVE",
      button2: "CANCEL",
    },
    info: {
      button1: "EDIT PROFILE",
      button2: "UPLOAD",
    },
  };

  const changeEditFalse = () => {
    setEdit(false);
  };

  const changeEditTrue = () => {
    setEdit(true);
  };

  const changeTrueUpload = () => {
    setOpenModalUpload(true);
  };

  const changeFalseUpload = () => {
    setOpenModalUpload(false);
  };
  const changeTrueDelete = () => {
    setOpenModalDelete(true);
  };

  const changeFalseDelete = () => {
    setOpenModalDelete(false);
  };
  const functionsProfile = {
    changeEditFalse,
    changeEditTrue,
    changeTrueUpload,
    changeFalseUpload,
    changeTrueDelete,
    changeFalseDelete,
  };

  const profileVariables = {
    edit,
    openModalUpload,
    openModalDelete,
    textProfile,
    infoProfile,
  };
  return { profileVariables, functionsProfile };
};
