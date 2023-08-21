import React, { useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";
import { useGetCardsInformation, useSocketIo } from "../../hooks";
import { Loader } from "../Loader";

export const Design = ({ isTheOwnerOfTheAccount }) => {
  const { functionsCards, variablesCards } = useCards();

  const { socket, dataVideo, dataRender } = useSocketIo(
    import.meta.env.VITE_BACKEND
  );

  const { functionsCardsInformation, loaderSocket } = useGetCardsInformation();

  const { getDemoReel, getRender } = functionsCardsInformation;

  useEffect(() => {
    getDemoReel(socket);
    getRender(socket);
  }, [socket]);

  return (
    <div className="container-design-profile">
      <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
        <li
          className={`font-text text-3xl cursor-pointer ${
            variablesCards.typeCards === "render"
              ? "text-[#e97d05]"
              : "color-change"
          }`}
          onClick={functionsCards.changeToRenders}
        >
          Renders
        </li>
        <li
          className={`font-text text-3xl cursor-pointer ${
            variablesCards.typeCards === "demo_reel"
              ? "text-[#e97d05]"
              : "color-change"
          }`}
          onClick={functionsCards.changeToDemoReel}
        >
          Demo reels
        </li>
      </ul>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {loaderSocket && <Loader />}

        {"render" === variablesCards.typeCards
          ? dataRender?.length > 0 &&
            dataRender.map((data) => (
              <>
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${data._id}${data.title}`}
                  {...data}
                  id={data._id}
                  isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
                />
              </>
            ))
          : dataVideo?.length > 0 &&
            dataVideo.map((data) => (
              <Cards
                typeCards={variablesCards.typeCards}
                key={`${data._id}${data.title}`}
                {...data}
                id={data._id}
                isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
              />
            ))}
      </div>
    </div>
  );
};
