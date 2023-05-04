import React, { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { useCards } from "../hooks/useCards";
import { Cards } from "../components/Cards/Cards";
import { useWebSocket } from "../hooks";

export const Designers = () => {
  const { functionsCards, variablesCards } = useCards();
  const { getDemoReel, getRender, disconnect, dataRender, dataVideo } =
    useWebSocket();

  useEffect(() => {
    getDemoReel();
    getRender();
    return () => {
      if (dataRender.length > 0 || dataVideo.length > 0) {
        disconnect();
      }
    };
  }, []);

  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="gradient-bg-character mt-2 py-14 min-h-screen">
        <ul className="flex gap-6 border-b-[5px] border-amber-900 justify-center w-90 m-auto">
          <li
            className="font-text text-3xl cursor-pointer color-change-designers"
            onClick={functionsCards.changeToDemoReel}
          >
            Demo reels
          </li>
          <li
            className="font-text color-change-designers text-3xl cursor-pointer"
            onClick={functionsCards.changeToRenders}
          >
            Renders
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-8 mt-5">
          {"render" === variablesCards.typeCards
            ? dataRender?.length > 0 &&
              dataRender.map((d) => (
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d.id}${d.name}`}
                  {...d}
                />
              ))
            : dataVideo?.length > 0 &&
              dataVideo.map((d) => (
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d.id}${d.name}`}
                  {...d}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
