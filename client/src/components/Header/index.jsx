import React from "react";
import { Navbar } from "../Navbar";
import { routes } from "../../constants";
import { useNavigate } from "react-router-dom";
import cuteMascot from "../../assets/header/cute_mascot.png";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="gradient-bg-welcome min-h-screen">
      <Navbar />
      <div className="gap-0 mobile:gap-4 w-90 mobile:w-[80%] flex items-center flex-col m-auto justify-between mobile:flex-row p-7 ">
        <img
          src={cuteMascot}
          alt=""
          className="ml-0 mb-0 mobile:mb-3 mobile:ml-10 translate-y-[10px] w-90% mobile:w-[40%]"
        />
        <div>
          <h1 className="font-headings text-orangeCustom text-7xl mb-5 text-center mobile:text-start">
            Demoo reels (prueba) {import.meta.env.VITE_BACKEND}
          </h1>
          <p className="text-white text-2xl max-w-[500px] text-center mobile:text-start font-text">
            Welcome to our platform for designers, animators and 3D modelers!
            Here you will find a wide variety of projects and job opportunities
            in your field - join us and start working on interesting projects
            today!
          </p>
          <button
            className=" font-text max-w-[500px] mt-7 bg-orangeCustom p-3 w-full text-center text-white rounded-sm"
            onClick={() => navigate(routes.DESIGNERS)}
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};
