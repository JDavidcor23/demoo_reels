import React from "react";

export const Inputs = ({ name, placeholder, type }) => {
  return (
    <input
      type={type}
      name={name}
      className="block w-full text-orangeCustom border-orangeCustom shadow-sm focus:border-orangeCustom focus:ring-orangeCustom sm:text-sm mt-12 bg-transparent"
      placeholder={placeholder}
    />
  );
};
