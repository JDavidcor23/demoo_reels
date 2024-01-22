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
      <Link
        to={pathname === "/Designers" ? routes.PROFILE + "/" + id_user : ""}
        className="h-[460px] w-[30%] bg-white max-w-[515px] min-w-[300px] rounded-[10px] relative shadow-lg"
      >
        {isTheUserInThePath && (
          <div className="absolute w-full">
            <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
              <div
                className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                onClick={openModalUploadFunction}
              >
                <PencilIcon
                  title="edit"
                  titleId="edits"
                  color="#e97d05"
                  className="block h-6 w-6 mr-3"
                  aria-hidden="true"
                  style={{ margin: "0" }}
                />
              </div>

              <div
                className="relative w-[32px] h-[32px] left-[-3px] top-[-4px]"
                onClick={openModalDeleteFunction}
              >
                <MinusCircleIcon
                  title="minus"
                  titleId="minusId"
                  color="red"
                  width="39px"
                  style={{ position: "absolute", zIndex: "20" }}
                />
                <div className=" w-5 h-3 bg-white absolute left-[23px] top-[50%] translate-x-[-50%] translate-y-[-25%] z-10"></div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-full">
          <img
            src={img}
            alt=""
            className="w-full h-[68%] object-cover rounded-t-[10px]"
          />

          <div className="w-[90%] py-5 m-auto container-info-cards">
            <div>
              <p className="text-2xl text-amber-900 font-text font-light py-2">
                Title: {title}
              </p>

              <p className="text-2xl text-amber-900 font-text font-light py-2">
                {/* User: {user} */}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-3">
              {programs.map((program) => (
                <Icons type={program} key={`${program}${id}`} />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
