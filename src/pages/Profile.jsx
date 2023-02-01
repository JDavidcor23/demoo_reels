import React from "react";
import { ProfileInfo, Navbar, Cards } from "../components";
import { data } from "../data/data";

export const Profile = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="flex">
        <ProfileInfo />
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
      </div>
    </div>
  );
};
