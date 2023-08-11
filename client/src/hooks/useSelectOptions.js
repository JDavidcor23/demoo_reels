import React, { useState } from "react";

export const useSelectOptions = ({ handleChangeSelect }) => {
  const [selected, setSelected] = useState([]);
  const options = [
    "Blender",
    "Autodesk Maya",
    "Unity 3d",
    "Unreal Engine",
    "Cinema 4D",
    "ZBrush",
    "Illustrator",
    "Photoshop",
  ];

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      if (selected.length === 2) return;
      setSelected([...selected, option]);
      handleChangeSelect(selected);
    }
  };
  return {
    selected,
    options,
    toggleOption,
  };
};
