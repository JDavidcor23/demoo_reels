import { Fragment } from "react";
import { ButtonsNav } from "./ButtonsNav";
import { useState } from "react";
import { ProfileMenu } from "./ProfileMenu";
import { Disclosure } from "@headlessui/react";
import logo from "../../assets/header/logo.png";
import { DisclosurePanel } from "./DisclosurePanel";
import { Link, useLocation } from "react-router-dom";
import { routes, routesNames } from "../../constants/routes";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";

export const navigation = [
  { name: routesNames.HOME, href: routes.HOME },
  { name: routesNames.CHAT, href: routes.CHAT },
  { name: routesNames.DESIGNERS, href: routes.DESIGNERS },
];

export const Navbar = () => {
  const infoUser = useSelector((state) => state.infoUser);

  const { pathname } = useLocation();

  return (
    <>
      <Disclosure as="nav" className=" ">
        {({ open }) => (
          <>
            <div className="mx-auto  px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 justify-between">
                <div className="flex">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    {navigation.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="inline-flex items-center  px-1 pt-1 text-sm font-medium text-white font-text"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
                {infoUser?._id ? <ProfileMenu /> : <ButtonsNav />}
                <div className="-mr-2 flex items-center sm:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-orangeCustom hover:text-orangeCustom focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orangeCustom">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* -------- */}
            <DisclosurePanel />
          </>
        )}
      </Disclosure>
    </>
  );
};
