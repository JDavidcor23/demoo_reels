import React from "react";
import { Disclosure } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { DisclosurePanelProfile } from "./DisclosurePanelProfile";
import { navigation } from ".";
import { ButtonsResponsive } from "./ButtonsResponsive";
import { routes } from "../../constants";
import { setInfoUser } from "../../store/slices/infoUser";
import { useAuth } from "../../hooks";

export const DisclosurePanel = () => {
  const infoUser = useSelector((state) => state.infoUser);

  const { setFalse } = useAuth();

  const navigate = useNavigate();

  const location = useLocation();

  const isInProfile = location.pathname.includes(routes.PROFILE);

  const dispatch = useDispatch();

  const SignOut = () => {
    localStorage.removeItem("user");

    dispatch(setInfoUser({}));
    setFalse();

    if (location.pathname !== "/") {
      navigate(-1);
    }
  };

  return (
    <Disclosure.Panel className="sm:hidden border-b-orangeCustom border-b-[1px]">
      <div className="space-y-1 pt-2 pb-3">
        {infoUser._id && <DisclosurePanelProfile />}
        {navigation.map((link) => (
          <Disclosure.Button key={link.name} className="flex w-full">
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                isActive && isInProfile !== true
                  ? " text-start block border-l-4 border-orangeCustom bg-orangeCustom py-2 pl-3 pr-4 text-base font-medium text-white w-full"
                  : "text-start block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-[#492a08cd] hover:bg-[#b86204] hover:text-white w-full"
              }
            >
              {link.name}
            </NavLink>
          </Disclosure.Button>
        ))}
        {infoUser._id && (
          <Disclosure.Button
            as="a"
            href="#"
            className="text-start block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-[#492a08cd] hover:bg-[#b86204] hover:text-white w-full"
            onClick={SignOut}
          >
            Sign out
          </Disclosure.Button>
        )}
      </div>
      {!infoUser._id && <ButtonsResponsive />}
    </Disclosure.Panel>
  );
};
