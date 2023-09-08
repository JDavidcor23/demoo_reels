import React from "react";
import { PencilIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from "react-redux";
import { setEditSlice } from "../../store/slices/editSlice";
import { setOpenModalUpload } from "../../store/slices/openModalUpload";
import { useUpdateUser } from "../../hooks";

export const Buttons = () => {
  const dispatch = useDispatch();
  const { submitChanges } = useUpdateUser();
  const editSlice = useSelector((state) => state.editSlice.state);

  const submit = () => {
    submitChanges();
    dispatch(setEditSlice(false));
  };

  return (
    <>
      {editSlice ? (
        <>
          <button
            className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex"
            onClick={submit}
          >
            <span className=" w-[100px]">SAVE</span>
          </button>
          <button
            className="justify-center items-center border-2 border-orangeCustom p-3 mt-3 w-48 text-center text-white font-text flex"
            onClick={() => dispatch(setEditSlice(false))}
          >
            <span className=" w-[100px]">CANCEL</span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => dispatch(setEditSlice(true))}
            className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex"
          >
            <PencilIcon
              title="edit"
              titleId="edits"
              className="block h-6 w-6 mr-3"
              aria-hidden="true"
            />
            <span className=" w-[100px]">EDIT PROFILE</span>
          </button>
          <button
            className="justify-center items-center border-2 border-orangeCustom p-3 mt-3 w-48 text-center text-white font-text flex"
            onClick={() => dispatch(setOpenModalUpload(true))}
          >
            <ArrowUpTrayIcon
              title="edit"
              titleId="edits"
              className="block h-6 w-6 mr-3"
              aria-hidden="true"
            />
            <span className=" w-[100px]">UPLOAD</span>
          </button>
        </>
      )}
    </>
  );
};
