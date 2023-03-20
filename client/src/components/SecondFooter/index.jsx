import React from "react";
import logo from "../../assets/header/logo.png";

export const SecondFooter = () => {
  return (
    <div className="bg-white w-[100vw]">
      <footer className="w-90 flex items-end m-auto flex-wrap-reverse mobile:flex-nowrap absolute bottom-0 center-absolute-bottom-0 p-3">
        <ul className="flex items-center justify-between w-full flex-wrap mb-5 mt-8 gap-2 mobile:flex-nowrap mobile:mb-0 mobile:mt-0 mobile:gap-0">
          <li className="text-orangeCustom font-text">
            created by Jorge David Diaz
          </li>
          <li>
            <img src={logo} alt="" width="50" height="50" />
          </li>
          <li className="text-orangeCustom font-text">
            jorgedavid23diaz@gmail.com
          </li>
        </ul>
      </footer>
    </div>
  );
};
