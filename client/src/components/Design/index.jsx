import React, { useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";
import { useGetCardsInformation, useSocketIo } from "../../hooks";
import { setDataRenderSlice } from "../../store/slices/dataRender";
import { useDispatch } from "react-redux";

export const Design = ({ isTheOwnerOfTheAccount }) => {
  const { functionsCards, variablesCards } = useCards();

  const dispatch = useDispatch();

  const { socket, dataVideo, dataRender } = useSocketIo(
    import.meta.env.VITE_BACKEND
  );

  const { functionsCardsInformation } = useGetCardsInformation();

  const { getDemoReel, getRender } = functionsCardsInformation;

  useEffect(() => {
    getDemoReel(socket);
    getRender(socket);
  }, [socket]);

  return (
    <div className="container-design-profile">
      <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
        <li
          className="font-text text-3xl cursor-pointer color-change"
          onClick={functionsCards.changeToDemoReel}
        >
          Demo reels
        </li>
        <li
          className="font-text color-change text-3xl cursor-pointer"
          onClick={functionsCards.changeToRenders}
        >
          Renders
        </li>
      </ul>
      <div className="flex flex-wrap justify-center gap-8 mt-8">
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
