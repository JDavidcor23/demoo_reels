import React, { useState } from "react";

export const SelectOptions = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    "Blender",
    "Autodesk Maya",
    "Unity 3d",
    "Unreal Engine",
    "Cinema 4D",
    "ZBrush",
    "Illustrator",
    "Photoshop",
  ];

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  return (
    <>
      <div className="my-5">
        {selected.length ? (
          <button
            className="flex items-center w-full p-2 text-left rounded-lg focus:outline-none focus:shadow-outline"
            type="button"
          >
            {selected.map((option) => (
              <span
                key={option}
                className=" border-2 border-orangeCustom w-[14.6rem] mr-2 px-3 py-1 font-text text-white text-sm"
              >
                {option}
              </span>
            ))}
          </button>
        ) : (
          <p className="text-white text-[2.16rem]">
            Select the programs you have used for this project
          </p>
        )}
      </div>
      <div className="w-full">
        <ul className="h-[100px]  flex flex-wrap w-full justify-between p-5 bg-orangeCustom">
          {options.map((option) => (
            <li
              key={option}
              className={` w-[150px] px-3 py-2 text-sm text-white hover:bg-[#9c5505] font-text cursor-pointer ${
                selected.includes(option)
                  ? " font-text  border-l-4 border-[#9c5505]"
                  : ""
              }`}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="form-checkbox hidden"
                  checked={selected.includes(option)}
                  onChange={() => toggleOption(option)}
                />
                <span className="ml-2">{option}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
