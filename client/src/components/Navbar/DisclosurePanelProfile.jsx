import React from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { routes, routesNames } from "../../constants";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../../store/slices/infoUser";

export const DisclosurePanelProfile = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const infoUser = useSelector((state) => state.infoUser);

  const dispatch = useDispatch();

  const SignOut = () => {
    localStorage.removeItem("user");
    dispatch(setInfoUser({}));

    if (location.pathname !== "/") {
      navigate(-1);
    }
  };
  return (
    <div className="border-t border-gray-200 pt-4">
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
          <Disclosure.Button
            as="a"
            href="#"
            className="text-start block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-[#492a08cd] hover:bg-[#b86204] hover:text-white w-full"
            onClick={SignOut}
          >
            Sign out
          </Disclosure.Button>
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
