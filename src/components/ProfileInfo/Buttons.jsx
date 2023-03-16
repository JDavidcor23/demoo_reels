import React from "react";
import { PencilIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";

export const Buttons = ({
  edit,
  changeEditFalse,
  changeEditTrue,
  changeTrueUpload,
  changeFalseUpload,
}) => {
  return (
    <>
      {edit ? (
        <>
          <button
            className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex"
            onClick={changeEditFalse}
          >
            <span className=" w-[100px]">SAVE</span>
          </button>
          <button
            className="justify-center items-center border-2 border-orangeCustom p-3 mt-3 w-48 text-center text-white font-text flex"
            onClick={changeEditFalse}
          >
            <span className=" w-[100px]">CANCEL</span>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={changeEditTrue}
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
            onClick={changeTrueUpload}
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
