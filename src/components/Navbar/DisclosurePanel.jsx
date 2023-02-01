import React from "react";
import { Disclosure } from "@headlessui/react";
import { DisclosurePanelProfile } from "./DisclosurePanelProfile";
import { navigation } from ".";
import { Link } from "react-router-dom";
import { ButtonsResponsive } from "./ButtonsResponsive";

export const DisclosurePanel = () => {
  return (
    <Disclosure.Panel className="sm:hidden">
      <div className="space-y-1 pt-2 pb-3">
        <Disclosure.Button
          as="a"
          href="#"
          className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
        >
          Dashboard
        </Disclosure.Button>
        {navigation.map((link) => (
          <Disclosure.Button
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? "block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
                : "block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
            }
          >
            <Link to={link.href}>{link.name}</Link>
          </Disclosure.Button>
        ))}
      </div>
      <ButtonsResponsive />
      {/* <DisclosurePanelProfile /> */}
    </Disclosure.Panel>
  );
};
