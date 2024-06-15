import React, { useEffect, useState } from "react";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Icons } from "../Icons";
import { DeleteDesign } from "../DeleteDesign";
import { routes } from "../../constants/routes";
import { setInformationToEdit } from "../../store/slices/informationToEdit";
import { setOpenModalDelete } from "../../store/slices/openModalDelete";
import { setOpenModalUpload } from "../../store/slices/openModalUpload";
import { AddProject } from "../AddProject";
import { setEditSlice } from "../../store/slices/editSlice";
import { setInfoUser } from "../../store/slices/infoUser";
import { CardContents } from "./CardContents";

export const CardsRender = ({
  img,
  id,
  title,
  typeCards,
  programs,
  id_user,
}) => {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const paramUser = useParams();

  const sendInformation = () => {
    dispatch(
      setInformationToEdit({
        id,
        img,
        title,
        programs,
        type: typeCards,
      })
    );
  };

  const openModalUploadFunction = () => {
    sendInformation();
    dispatch(setOpenModalUpload(true));
  };

  const openModalDeleteFunction = () => {
    sendInformation();
    dispatch(setOpenModalDelete(true));
  };

  const editSlice = useSelector((state) => state.editSlice.state);

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const openModalDelete = useSelector((state) => state.openModalDelete.state);

  const openModalUpload = useSelector((state) => state.openModalUpload.state);

  const informationToEdit = useSelector((state) => state.informationToEdit);

  const [isTheUserInThePath, setIsTheUserInThePath] = useState(false);

  useEffect(() => {
    if (paramUser?.id === currentUser?._id && editSlice) {
      setIsTheUserInThePath(true);
    } else {
      setIsTheUserInThePath(false);

      if (editSlice) {
        dispatch(setEditSlice(false));
        dispatch(setInfoUser({ ...currentUser }));
      }
      //close modals
      if (openModalUpload) {
        dispatch(setOpenModalUpload(false));
        //if a modal is open, it changes the scroll and if it is closed if it is not on the page the scroll is removed, that's why this line is added
        document.body.style.overflowY = "unset";
      }
      if (openModalDelete) {
        dispatch(setOpenModalDelete(false));
        //if a modal is open, it changes the scroll and if it is closed if it is not on the page the scroll is removed, that's why this line is added
        document.body.style.overflowY = "unset";
      }
    }
  }, [paramUser, editSlice]);

  return (
    <>
      {openModalDelete && informationToEdit.id === id ? <DeleteDesign /> : ""}
      {openModalUpload && informationToEdit.id === id ? <AddProject /> : ""}
      {pathname === "/Designers" ? (
        <Link
          to={routes.PROFILE + "/" + id_user + "/" + "image"}
          className="h-[460px] w-[30%] bg-white max-w-[310px] min-w-[300px] rounded-[15px] relative shadow-lg"
        >
          <CardContents
            img={img}
            id={id}
            title={title}
            Icons={Icons}
            programs={programs}
            PencilIcon={PencilIcon}
            MinusCircleIcon={MinusCircleIcon}
            isTheUserInThePath={isTheUserInThePath}
            openModalUploadFunction={openModalUploadFunction}
            openModalDeleteFunction={openModalDeleteFunction}
          />
        </Link>
      ) : (
        <div className="h-[460px] w-[30%] bg-white max-w-[515px] min-w-[300px] rounded-[15px] relative shadow-lg">
          <CardContents
            img={img}
            id={id}
            title={title}
            Icons={Icons}
            programs={programs}
            PencilIcon={PencilIcon}
            MinusCircleIcon={MinusCircleIcon}
            isTheUserInThePath={isTheUserInThePath}
            openModalUploadFunction={openModalUploadFunction}
            openModalDeleteFunction={openModalDeleteFunction}
          />
        </div>
      )}
    </>
  );
};
