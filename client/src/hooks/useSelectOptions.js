import React, { useState } from "react";
import { useSelector } from "react-redux";

export const useSelectOptions = ({ handleChangeSelect }) => {
  const informationToEdit = useSelector((state) => state?.informationToEdit);

  const [selected, setSelected] = useState(
    informationToEdit.id ? [...informationToEdit?.programs] : []
  );

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
