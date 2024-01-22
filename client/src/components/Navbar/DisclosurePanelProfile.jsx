import React from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { routes } from "../../constants";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const DisclosurePanelProfile = () => {
  const infoUser = useSelector((state) => state.infoUser);

  return (
    <div className="border-t border-orangeCustom pt-4">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={infoUser.profile_img}
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-gray-500">
            {infoUser.username}
          </div>
          <div className="text-sm font-medium text-gray-500">
            {infoUser.email}
          </div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full bg-orangeCustom p-1 text-white hover:text-white focus:outline-none  focus:ring-orangeCustom "
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <Link to={routes.PROFILE + "/" + infoUser._id}>
          <Disclosure.Button className="flex w-full">
            <NavLink
              to={routes.PROFILE + "/" + infoUser._id}
              className={({ isActive }) =>
                isActive
                  ? " text-start block border-l-4 border-orangeCustom bg-orangeCustom py-2 pl-3 pr-4 text-base font-medium text-white w-full"
                  : "text-start block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-[#492a08cd] hover:bg-[#b86204] hover:text-white w-full"
              }
            >
              Your Profile
            </NavLink>
          </Disclosure.Button>
        </Link>
      </div>
    </div>
  );
};
