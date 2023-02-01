import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../../constants";
import { Disclosure } from "@headlessui/react";

export const ButtonsResponsive = () => {
  return (
    <div className="border-t border-gray-200 pt-4 pb-3">
      <div className=" space-y-1 flex justify-around content-center">
        <Disclosure.Button className="bg-orangeCustom p-2 w-40 text-center text-white font-text">
          <Link to={routes.LOGIN}>LOGIN</Link>
        </Disclosure.Button>
        <Disclosure.Button
          className="font-text border-orangeCustom border-2 p-2 w-40 text-center text-white"
          style={{ marginTop: "0" }}
        >
          SIGNUP
        </Disclosure.Button>
      </div>
    </div>
  );
};
