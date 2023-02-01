import React from "react";
import { data } from "../../data/data";
import { Cards } from "../Cards";

export const Design = () => {
  return (
    <div className="w-full m-3">
      <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center">
        <li className="font-text text-white text-3xl cursor-pointer">
          Demo reels
        </li>
        <li className="font-text text-white text-3xl cursor-pointer">
          Renders
        </li>
      </ul>
      <div className="flex flex-wrap justify-center">
        {data.map((d) => (
          <Cards key={d.id} {...d} width="w-[22rem]" height="h-[15rem]" />
        ))}
      </div>
    </div>
  );
};
