import React, { useEffect } from "react";
import { data } from "../../data/data";
import { Cards } from "../Cards";

export const Design = ({
  edit,
  isTheOwnerOfTheAccount,
  openModalDelete,
  changeTrueDelete,
  changeFalseDelete,
}) => {
  return (
    <div className="container-design-profile">
      <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
        <li className="font-text text-3xl cursor-pointer color-change">
          Demo reels
        </li>
        <li className="font-text color-change text-3xl cursor-pointer">
          Renders
        </li>
      </ul>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        <div className="bg-white border border-gray-300 rounded-lg shadow-md w-80 mx-5">
          <div className="p-6">
            <h2 className="text-lg font-medium mb-3 font-text">
              Video de YouTube
            </h2>
            <div className="relative pb-[56.25%] mb-4">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* {data.map((d) => (
          <Cards
            isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
            key={d.id}
            {...d}
            width=" w-full"
            height="h-[15rem]"
            edit={edit}
            openModalDelete={openModalDelete}
            changeTrueDelete={changeTrueDelete}
            changeFalseDelete={changeFalseDelete}
          />
        ))} */}
      </div>
    </div>
  );
};
