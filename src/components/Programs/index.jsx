import React from "react";
import blender from "../../assets/Programs/blender.png";
import cinema from "../../assets/Programs/cinema.png";
import maya from "../../assets/Programs/maya.png";
import unity from "../../assets/Programs/unity.png";
import ZBrush from "../../assets/Programs/ZBrush.png";
import { Footer } from "../Footer";

export const Programs = () => {
  return (
    <div className="gradient-bg-welcome min-h-[150vh] flex items-center flex-col">
      <div className="w-90 m-auto">
        <div className=" flex items-center  flex-wrap mobile:flex-nowrap justify-center mobile:justify-between">
          <div className="max-w-none  mobile:max-w-xs text-center mobile:text-start">
            <h2 className="text-white text-2xl  mt-8 font-headings">
              Search for your dream job as a 3D artist our platform!
            </h2>
            <p className="text-white text-lg mt-4 font-text font-light">
              Show your art and share your skills with others in the community.
              community.
            </p>
            <p className="text-white text-lg mt-4 font-text font-light">
              In our community you will be able to share your knowledge and
              experience in programs like Blender, Unity 3d, Unreal engine. If
              you are an expert in any of these programs or any other, don't
              hesitate to share your tips and share your tricks and techniques
              with the rest of the community!
            </p>
          </div>
          <div className="flex flex-wrap gap-6 w-[680px] justify-center mobile:justify-start mt-5">
            <img src={blender} alt="" className=" object-contain w-52" />
            <img src={cinema} alt="" className=" object-contain w-52" />
            <img src={maya} alt="" className=" object-contain w-52" />
            <img src={unity} alt="" className=" object-contain w-52" />
            <img src={ZBrush} alt="" className=" object-contain w-52" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
