import React from "react";

export const LiTypes = ({ setUploadProject, uploadProject }) => {
  return (
    <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
      <li
        className={`font-text text-2xl cursor-pointer ${
          uploadProject === "render" ? "text-orangeCustom" : "color-change"
        }`}
        onClick={() => setUploadProject("render")}
      >
        Render
      </li>
      <li
        className={`font-text text-2xl cursor-pointer ${
          uploadProject === "demo_reel" ? "text-orangeCustom" : "color-change"
        }`}
        onClick={() => setUploadProject("demo_reel")}
      >
        Demo reel
      </li>
    </ul>
  );
};

export const LiTypesEdit = ({ type }) => {
  return (
    <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
      {"render" === type && (
        <li className="font-text text-2xl text-orangeCustom">Demo reel</li>
      )}
      {"demo_reel" === type && (
        <li className="font-text text-2xl text-orangeCustom">Render</li>
      )}
    </ul>
  );
};
