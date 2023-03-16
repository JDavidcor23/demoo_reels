import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { Inputs } from "../Inputs";
import { SelectOptions } from "../SelectOptions";

const allInputs = [
  {
    name: "Name",
    type: "text",
    placeholder: "name",
  },
];

export const AddProject = ({ changeFalseUpload, openModalUpload }) => {
  return (
    <>
      <div className="w-screen h-screen fixed bg-black top-0 opacity-50 z-[8000] "></div>
      <div className=" fixed inset-0 z-[9999] overflow-y-auto animation-modal">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg gradient-bg-welcome px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[900px] sm:p-6">
            <div className="w-90 flex flex-col justify-center items-center m-auto py-3">
              <SelectOptions />
              <div className="mt-5">
                <img
                  src="https://salesianas.org/wp-content/themes/ht-academica/assets/img/preview.png"
                  alt=""
                />
              </div>
              {allInputs.map((input) => (
                <Inputs key={input.name} {...input} marginTop="mt-5" />
              ))}
              <div className="w-full">
                <button
                  className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom mt-4 font-text"
                  onClick={changeFalseUpload}
                >
                  PUBLISH
                </button>
                <button
                  className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 border-2 border-orangeCustom mt-4 font-text"
                  onClick={changeFalseUpload}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
