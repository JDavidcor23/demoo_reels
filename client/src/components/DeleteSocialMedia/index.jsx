import React from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setOpenModalDeleteSocialMedia } from "../../store/slices/openModalDeleteSocialMedia";
import { useUpdateUser } from "../../hooks";

export const DeleteSocialMedia = ({ nameSocialMedia }) => {
  const dispatch = useDispatch();
  const { deleteSocialMediaFunction } = useUpdateUser();

  const submitDelete = () => {
    deleteSocialMediaFunction(nameSocialMedia);
    dispatch(setOpenModalDeleteSocialMedia(false));
  };
  const closeModalDelete = () => {
    dispatch(setOpenModalDeleteSocialMedia(false));
  };

  return (
    <>
      <div
        className="w-screen h-screen fixed bg-black opacity-[0.5] z-[8000] top-[50%] left-[50%]"
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
                Remove social media
              </h3>
            </div>
            <div className=" gap-4 flex items-center flex-wrap justify-center mt-5">
              <button
                className="bg-orangeCustom p-2 w-40 text-center text-white font-text"
                onClick={submitDelete}
              >
                REMOVE
              </button>

              <button
                className=" font-text border-orangeCustom border-2  p-2 w-40 text-center text-white"
                onClick={closeModalDelete}
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
