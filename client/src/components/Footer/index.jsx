import React from "react";
import logo from "../../assets/header/logo.png";
import cat from "../../assets/footer/cat.png";
import { routes } from "../../constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Footer = () => {
  const infoUser = useSelector((state) => state.infoUser);
  return (
    <footer className="w-90 flex items-end m-auto flex-wrap-reverse mobile:flex-nowrap">
      <ul
        className={`flex items-center ${
          !infoUser?._id ? "justify-between" : ""
        } w-full flex-wrap mb-5 mt-8 gap-2 mobile:flex-nowrap mobile:mb-0 mobile:mt-0 mobile:gap-0`}
      >
        <li>
          <img src={logo} alt="" width="50" height="50" />
        </li>
        <li
          className={`text-orangeCustom font-text flex items-center h-[50px] ${
            !infoUser?._id ? "" : "ml-4"
          }`}
        >
          created by Jorge David Diaz
        </li>
        {!infoUser?._id && (
          <>
            <Link to={routes.LOGIN}>
              <button className="bg-orangeCustom p-3 w-40 text-center text-white font-text">
                LOGIN
              </button>
            </Link>
            <Link to={routes.SIGNUP}>
              <button className=" font-text border-orangeCustom border-2  p-3 w-40 text-center text-white">
                SIGNUP
              </button>
            </Link>
          </>
        )}
      </ul>
      <img src={cat} alt="" className="mt-8 mobile:mt-0" />
    </footer>
  );
};
