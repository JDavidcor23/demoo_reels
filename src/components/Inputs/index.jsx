import React from "react";

export const Inputs = ({ name, placeholder, type, marginTop = "mt-12" }) => {
  return (
    <input
      type={type}
      name={name}
      className={`block w-full text-white font-text border-orangeCustom shadow-sm focus:border-orangeCustom focus:ring-orangeCustom sm:text-sm ${marginTop} bg-transparent`}
      placeholder={placeholder}
    />
  );
};
