import React, { useState } from "react";

export const useCards = () => {
  const [typeCards, setTypeCards] = useState("render");

  const changeToDemoReel = () => {
    setTypeCards("demo_reel");
  };

  const changeToRenders = () => {
    setTypeCards("render");
  };

  const functionsCards = {
    changeToDemoReel,
    changeToRenders,
  };
  const variablesCards = {
    typeCards,
  };
  return { functionsCards, variablesCards };
};
