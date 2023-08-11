import React from "react";
import dog from "../../assets/characters/dog.png";
import house from "../../assets/characters/house.png";
import military from "../../assets/characters/military.png";

export const Characters = () => {
  return (
    <div className="min-h-screen gradient-bg-character flex items-center">
      <div className="w-90 m-auto flex flex-wrap justify-center gap-28 ">
        <div className="flex flex-col items-center justify-center ">
          <img src={dog} alt="" className=" h-72" />
          <div className=" mt-5 w-56 h-44 bg-white rounded-full flex justify-center items-center">
            <h2 className="text-2xl text-amber-900 font-text font-light">
              Characters
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img src={house} alt="" className=" h-72" />
          <div className=" mt-5 w-56 h-44 bg-white rounded-full flex justify-center items-center">
            <h2 className="text-2xl text-amber-900 font-text font-light">
              Modeling
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <img src={military} alt="" className=" h-72" />
          <div className=" mt-5 w-56 h-44 bg-white rounded-full flex justify-center items-center">
            <h2 className="text-2xl text-amber-900 font-text font-light">
              Video games
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
