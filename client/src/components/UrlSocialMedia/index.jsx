import React from "react";

export const UrlSocialMedia = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 z-[5000] bg-black w-screen h-screen opacity-50 fixed"></div>
      <div className="overflow-y-auto animation-modal fixed w-screen h-screen bg-transparent flex justify-center items-center z-[6000]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="w-full h-14 max-w-[500px] gradient-bg-welcome flex p-3 justify-between rounded"
        >
          <input
            type="text"
            name=""
            id=""
            className="block w-[78%] text-white font-text border-orangeCustom shadow-sm focus:border-orangeCustom focus:ring-orangeCustom sm:text-sm bg-transparent"
          />
          <button className="h-full w-[20%] flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom ml-2 font-text">
            SAVE
          </button>
          <button className="h-full w-[20%] flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom  font-text ml-1">
            CANCEL
          </button>
        </form>
      </div>
    </>
  );
};
