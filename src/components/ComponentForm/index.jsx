import React from "react";
import { Inputs } from "../Inputs";

export const ComponentForm = ({ allInputs, title }) => {
  return (
    <form className="w-90 max-w-sm p-5 bg-[#0f1431] rounded-md ">
      <h2 className=" text-orangeCustom  text-7xl mb-5 text-center font-headings">
        {title}
      </h2>
      <div className="flex flex-col">
        <div>
          {allInputs.map((input) => (
            <Inputs key={input.name} {...input} />
          ))}
        </div>
        <button
          type="button"
          className=" mt-12 flex justify-center  border border-transparent w-full  font-text bg-orangeCustom px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orangeCustom focus:outline-none focus:ring-2 focus:ring-orangeCustom focus:ring-offset-2"
        >
          Login
        </button>
      </div>
    </form>
  );
};
