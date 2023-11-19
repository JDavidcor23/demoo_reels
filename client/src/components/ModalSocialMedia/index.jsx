import React, { useState } from "react";
import { useUpdateUser } from "../../hooks";

export const ModalSocialMedia = ({ nameOfSocialMedia }) => {
  const { handleChangesSocialMedia, closeModalSocialMedia } = useUpdateUser();

  const [socialMediaUrl, setSocialMediaUrl] = useState("");

  const handleChange = (e) => {
    setSocialMediaUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleChangesSocialMedia(nameOfSocialMedia, socialMediaUrl);
    closeModalSocialMedia();
  };

  return (
    <>
      <div className="w-[200%] h-screen fixed bg-black top-0 opacity-50 z-[8000] "></div>
      <div className=" fixed  z-[9999] overflow-y-auto animation-modal center-div-fixed">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <form
            className="w-[90%] max-w-[700px]  p-3 flex flex-col md:flex-row gradient-bg-welcome"
            onSubmit={handleSubmit}
          >
            <input
              required
              type="url"
              onChange={handleChange}
              placeholder={`Paste your ${nameOfSocialMedia} link`}
              className="block w-full text-white font-text h-10 border-orangeCustom shadow-sm focus:border-orangeCustom focus:ring-orangeCustom sm:text-sm
bg-transparent "
            />
            <button
              type="submit"
              className="justify-center h-10 items-center bg-orangeCustom p-3 w-full ml-0 md:ml-2 mt-4 md:mt-0 text-center text-white font-text flex md:w-28"
            >
              <span className="w-[100px]">SAVE</span>
            </button>
            <button
              onClick={closeModalSocialMedia}
              type="button"
              className="justify-center h-10 items-center border-orangeCustom p-3 w-full ml-0 md:ml-2 mt-4 md:mt-0 text-center text-white font-text flex border-2 md:w-28"
            >
              <span className=" w-[100px]">CANCEL</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
