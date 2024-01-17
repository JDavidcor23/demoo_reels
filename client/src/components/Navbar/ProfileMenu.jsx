import React from "react";
import { Fragment } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../../store/slices/infoUser";
import { useAuth } from "../../hooks";

export const ProfileMenu = () => {
  const navigate = useNavigate();

  const { setFalse } = useAuth();

  const infoUser = useSelector((state) => state.infoUser);

  const location = useLocation();

  const dispatch = useDispatch();

  const SignOut = () => {
    localStorage.removeItem("user");

    if (location.pathname !== "/") {
      navigate(-1);
    }
    dispatch(setInfoUser({}));
    setFalse();
  };

  return (
    <div className="hidden sm:ml-6 sm:flex sm:items-center">
      <button
        type="button"
        className="rounded-full bg-orangeCustom p-1 text-white hover:text-white focus:outline-none  focus:ring-orangeCustom "
      >
        <span className="sr-only">View notifications</span>
        <BellIcon className="h-6 w-6" aria-hidden="true" />
      </button>

      <Menu as="div" className="relative ml-3">
        <div>
          <Menu.Button className="flex rounded-full  text-sm focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full object-cover"
              src={infoUser.profile_img}
              alt=""
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-orangeCustom py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              <Link
                to={routes.PROFILE + "/" + infoUser._id}
                className={"block px-4 py-2 text-sm font-text text-white"}
              >
                Your Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className={"block px-4 py-2 text-sm font-text text-white"}
                onClick={SignOut}
              >
                Sign out
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
