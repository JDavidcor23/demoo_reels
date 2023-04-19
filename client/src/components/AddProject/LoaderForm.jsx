import React from "react";
import { Loader } from "../Loader";

export const LoaderForm = () => {
  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-50"></div>
      <div className="absolute w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    </>
  );
};
