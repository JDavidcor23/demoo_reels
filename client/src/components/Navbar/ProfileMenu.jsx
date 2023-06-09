import React from "react";
import { Fragment } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { routes } from "../../constants/routes";

export const ProfileMenu = () => {
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
          <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none">
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png"
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
                to={routes.PROFILE}
                className={"block px-4 py-2 text-sm font-text text-white"}
              >
                Your Profile
              </Link>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#"
                className={"block px-4 py-2 text-sm font-text text-white"}
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
