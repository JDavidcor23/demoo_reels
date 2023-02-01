import { data } from "../data/data";
import React from "react";
import { Navbar } from "../components/Navbar";
import { Cards } from "../components";

export const Designers = () => {
  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="gradient-bg-character mt-2 py-14">
        <div className="flex flex-wrap justify-center">
          {data.map((d) => (
            <Cards key={d.id} {...d} />
          ))}
        </div>
      </div>
    </div>
  );
};
