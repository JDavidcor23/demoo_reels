import React, { useEffect, useState } from "react";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/24/solid";
import { Icons } from "../Icons";
import { DeleteDesign } from "../DeleteDesign";

export const CardsRender = ({
  id,
  img,
  isTheOwnerOfTheAccount,
  title,
  user,
  width = "w-[32rem]",
  height = "h-[33.75rem]",
  edit,
  programs,
  openModalDelete,
  changeTrueDelete,
  changeFalseDelete,
}) => {
  return (
    <>
      {openModalDelete && (
        <DeleteDesign
          changeTrueDelete={changeTrueDelete}
          changeFalseDelete={changeFalseDelete}
        />
      )}
      <div
        className={`relative card-reels bg-white flex flex-col shadow-2xl rounded-md cursor-pointer
      ${
        isTheOwnerOfTheAccount
          ? " sizeCards-account"
          : "sizeCards-designers h-[34rem]"
      }`}
      >
        {edit && (
          <div className="absolute w-full">
            <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
              <div className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1">
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
                onClick={changeTrueDelete}
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
        <img
          src={img}
          alt=""
          className={`object-cover img-reel ${
            isTheOwnerOfTheAccount ? " h-[70%]" : "h-[380px]"
          } `}
        />
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
    </>
  );
};
