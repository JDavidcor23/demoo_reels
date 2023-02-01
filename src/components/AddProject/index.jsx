import React from "react";
import { Inputs } from "../Inputs";
import { SelectOptions } from "../SelectOptions";
const allInputs = [
  {
    name: "Name",
    type: "text",
    placeholder: "name",
  },
];

export const AddProject = () => {
  return (
    <div className="w-full m-3">
      <div className="w-90 flex flex-col justify-center items-center m-auto">
        <div className="flex justify-center items-center gap-5">
          <button className="w-32 flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom h-[70px]">
            <p>RENDER/IMAGE</p>
          </button>
          <button className="w-32 flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom h-[70px]">
            <p>DEMO REEL/VIDEO</p>
          </button>
        </div>
        <div className="mt-5">
          <img
            src="https://salesianas.org/wp-content/themes/ht-academica/assets/img/preview.png"
            alt=""
          />
        </div>
        {allInputs.map((input) => (
          <Inputs key={input.name} {...input} />
        ))}
        <SelectOptions />
        <div className="w-full">
          <button className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom mt-4">
            <p>PUBLISH</p>
          </button>
          <button className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 border-2 border-orangeCustom mt-4">
            <p>CANCEL</p>
          </button>
        </div>
      </div>
    </div>
  );
};
