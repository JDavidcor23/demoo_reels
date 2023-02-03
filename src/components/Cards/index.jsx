import React from "react";

export const Cards = ({
  img,
  title,
  user,
  width = "w-[32rem]",
  height = "h-[25rem]",
}) => {
  return (
    <div>
      <div className="m-5 transition ease-in-out delay-150 hover:scale-110 duration-300 bg-white flex justify-center items-center flex-col shadow-2xl rounded-md cursor-pointer">
        <img src={img} alt="" className={` ${width} ${height} object-cover `} />
        <p className="text-2xl text-amber-900 font-text font-light py-2">
          {title}
        </p>

        <p className="text-2xl text-amber-900 font-text font-light py-2">
          {user}
        </p>
      </div>
    </div>
  );
};
