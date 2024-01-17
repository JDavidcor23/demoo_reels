import React from "react";
import { Disclosure } from "@headlessui/react";
import { DisclosurePanelProfile } from "./DisclosurePanelProfile";
import { navigation } from ".";
import { NavLink, useLocation } from "react-router-dom";
import { ButtonsResponsive } from "./ButtonsResponsive";
import { useSelector } from "react-redux";
import { routes } from "../../constants";

export const DisclosurePanel = () => {
  const infoUser = useSelector((state) => state.infoUser);
  const location = useLocation();
  const isInProfile = location.pathname.includes(routes.PROFILE);

  return (
    <Disclosure.Panel className="sm:hidden">
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
      </div>
      {!infoUser._id && <ButtonsResponsive />}
    </Disclosure.Panel>
  );
};
