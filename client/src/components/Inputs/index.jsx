import React from "react";

export const Inputs = ({
  name,
  valueInput,
  placeholder,
  type,
  marginTop = "mt-12",
  handleChange,
}) => {
  return (
    <input
      type={type}
      value={valueInput}
      onChange={handleChange}
      name={name}
      className={`block w-full text-white font-text border-orangeCustom shadow-sm focus:border-orangeCustom focus:ring-orangeCustom sm:text-sm ${marginTop} bg-transparent`}
      placeholder={placeholder}
    />
  );
};
