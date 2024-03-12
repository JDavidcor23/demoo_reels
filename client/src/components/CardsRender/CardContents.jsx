import React from "react";

export const CardContents = ({
  img,
  id,
  title,
  programs,
  PencilIcon,
  MinusCircleIcon,
  isTheUserInThePath,
  openModalUploadFunction,
  openModalDeleteFunction,
  Icons,
}) => {
  return (
    <>
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
    </>
  );
};
