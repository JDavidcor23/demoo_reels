import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";

export const ButtonsNav = () => {
  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      <Link to={routes.LOGIN}>
        <button className="bg-orangeCustom p-2 w-40 text-center text-white font-text mr-5">
          LOGIN
        </button>
      </Link>
      <Link to={routes.SIGNUP}>
        <button className=" font-text border-orangeCustom border-2  p-2 w-40 text-center text-white">
          SIGNUP
        </button>
      </Link>
    </div>
  );
};
