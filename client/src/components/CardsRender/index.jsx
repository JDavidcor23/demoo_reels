import React from "react";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Icons } from "../Icons";
import { DeleteDesign } from "../DeleteDesign";
import { routes } from "../../constants/routes";
import { setInformationToEdit } from "../../store/slices/informationToEdit";
import { setOpenModalDelete } from "../../store/slices/openModalDelete";
import { setOpenModalUpload } from "../../store/slices/openModalUpload";

export const CardsRender = ({
  img,
  id,
  isTheOwnerOfTheAccount,
  title,
  user,
  typeCards,
  programs,
}) => {
  const dispatch = useDispatch();

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

  const openModalDelete = useSelector((state) => state.openModalDelete.state);

  return (
    <>
      <Link
        to={routes.PROFILE}
        className="h-[560px] w-[45%] bg-white max-w-[515px] min-w-[380px] rounded-[10px] relative"
      >
        {editSlice && (
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
                className="relative w-[40px] h-[40px] left-[3px]"
                onClick={openModalDeleteFunction}
              >
                <MinusCircleIcon
                  title="minus"
                  titleId="minusId"
                  color="red"
                  width="45px"
                  style={{ position: "absolute", zIndex: "20" }}
                />
                <div className=" w-3 h-3 bg-white absolute left-[23px] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 "></div>
              </div>
            </div>
          </div>
        )}
        <div className="w-full h-full">
          <img src={img} alt="" className="w-full h-[68%] object-cover" />

          <div className="w-[90%] py-5 m-auto container-info-cards">
            <div>
              <p className="text-2xl text-amber-900 font-text font-light py-2">
                Title: {title}
              </p>

              <p className="text-2xl text-amber-900 font-text font-light py-2">
                User: {user}
              </p>
            </div>

            <div className="flex justify-center items-center gap-3">
              {programs.map((program) => (
                <Icons type={program} key={`${program}${id}`} />
              ))}
            </div>
          </div>
        </div>
        {openModalDelete && (
          <DeleteDesign type={"render"} id={id} title={title} />
        )}
      </Link>
    </>
  );
};
