import React, { useState } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Loader } from "../Loader";
import { Success } from "../Success";

export const DeleteDesign = ({ changeTrueDelete, changeFalseDelete }) => {
  const [loader, setLoader] = useState(
    <p className="font-text text-white text-xl mt-3 text-center">
      Are you sure you want delete this project
    </p>
  );
  const loadLoader = () => {
    setLoader(
      <div className="flex justify-center mt-4">
        <Loader />
      </div>
    );
    setTimeout(() => {
      setLoader(
        <div className="flex justify-center mt-4">
          <Success />
        </div>
      );
      setTimeout(() => {
        changeFalseDelete();
      }, 1500);
    }, 2000);
  };
  return (
    <>
      <div
        className="w-screen h-screen fixed bg-black opacity-[0.1] z-[8000] top-[50%] left-[50%]"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>
      <div className=" fixed inset-0 z-[9999] overflow-y-auto animation-modal">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg gradient-bg-welcome px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[500px] sm:p-6">
            <div className="flex justify-center items-center">
              <TrashIcon
                title="edit"
                color="#e97d05"
                titleId="edits"
                className="block h-7 w-7 mr-3"
                aria-hidden="true"
              />
              <h3 className="font-headings text-4xl text-white">
                Delete project
              </h3>
            </div>
            {loader}
            <div className=" gap-4 flex items-center flex-wrap justify-center mt-5">
              <button
                className="bg-orangeCustom p-2 w-40 text-center text-white font-text"
                onClick={loadLoader}
              >
                DELETE
              </button>
              <button
                className=" font-text border-orangeCustom border-2  p-2 w-40 text-center text-white"
                onClick={changeFalseDelete}
              >
                CANCEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
