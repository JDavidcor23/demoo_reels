import React from "react";
import { Disclosure } from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { routes } from "../../constants";
import { Link } from "react-router-dom";

export const DisclosurePanelProfile = () => {
  return (
    <div className="border-t border-gray-200 pt-4 pb-3">
      <div className="flex items-center px-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full"
            src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png"
            alt=""
          />
        </div>
        <div className="ml-3">
          <div className="text-base font-medium text-white">Tom Cook</div>
          <div className="text-sm font-medium text-white">tom@example.com</div>
        </div>
        <button
          type="button"
          className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <Link to={routes.PROFILE}>
          <Disclosure.Button
            as="a"
            href="#"
            className="block px-4 py-2 text-base font-medium text-white hover:bg-gray-100 hover:text-gray-800"
          >
            Your Profile
          </Disclosure.Button>
        </Link>
        <Disclosure.Button
          as="a"
          href="#"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          Settings
        </Disclosure.Button>
        <Disclosure.Button
          as="a"
          href="#"
          className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
        >
          Sign out
        </Disclosure.Button>
      </div>
    </div>
  );
};
