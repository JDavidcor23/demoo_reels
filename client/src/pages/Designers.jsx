import React, { useCallback, useEffect } from "react";
import { Navbar, Cards, Loader } from "../components";
import { useGetCardsInformation, useSocketIo, useCards } from "../hooks";

export const Designers = () => {
  const { functionsCards, variablesCards } = useCards();

  const { socket, dataVideo, dataRender } = useSocketIo(
    import.meta.env.VITE_BACKEND
  );

  const { functionsCardsInformation, loaderSocket } = useGetCardsInformation();

  const { getDemoReel, getRender } = functionsCardsInformation;

  const fetchData = useCallback((socket) => {
    getDemoReel(socket);
    getRender(socket);
  }, []);

  useEffect(() => {
    fetchData(socket);
  }, [fetchData, socket]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="gradient-bg-character mt-2 py-14 min-h-screen">
        <ul className="flex gap-6 border-b-[5px] border-amber-900 justify-center w-[95%] m-auto">
          <li
            className={`font-text text-3xl cursor-pointer ${
              variablesCards.typeCards === "render"
                ? "text-[#78350f]"
                : "color-change-designers"
            }`}
            onClick={functionsCards.changeToRenders}
          >
            Renders
          </li>
          <li
            className={`font-text text-3xl cursor-pointer ${
              variablesCards.typeCards === "demo_reel"
                ? " text-[#78350f] "
                : " color-change-designers"
            }`}
            onClick={functionsCards.changeToDemoReel}
          >
            Demo reels
          </li>
        </ul>
        <div className="flex flex-wrap justify-center gap-8 mt-5">
          {loaderSocket && dataRender?.length === 0 ? <Loader /> : <></>}

          {"render" === variablesCards.typeCards
            ? dataRender?.length > 0 &&
              dataRender.map((d) => (
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d._id}${d.title}`}
                  {...d}
                  id={d._id}
                />
              ))
            : dataVideo?.length > 0 &&
              dataVideo.map((d) => (
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d._id}${d.title}`}
                  {...d}
                  id={d._id}
                />
              ))}
        </div>
      </div>
    </div>
  );
};
