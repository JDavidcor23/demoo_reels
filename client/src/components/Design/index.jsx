import React, { useCallback, useEffect } from "react";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";
import { useGetCardsInformation, useSocketIo } from "../../hooks";
import { Loader } from "../Loader";
import { useParams } from "react-router-dom";

export const Design = ({ userById = false }) => {
  const { functionsCards, variablesCards } = useCards();

  const param = useParams();
  const idUser = param.id;
  const { socket, dataVideo, dataRender } = useSocketIo(
    import.meta.env.VITE_BACKEND
  );

  const { functionsCardsInformation, loaderSocket } = useGetCardsInformation();

  const { getDemoReel, getRender, getRenderByUserId, getDemoReelByUserId } =
    functionsCardsInformation;

  const fetchData = useCallback((socket) => {
    getDemoReel(socket);
    getRender(socket);
  }, []);

  const fetchDataByUserId = (socket) => {
    getRenderByUserId(socket, idUser);
    getDemoReelByUserId(socket, idUser);
  };

  useEffect(() => {
    if (userById) {
      fetchDataByUserId(socket);
    } else {
      fetchData(socket);
    }
  }, [socket, userById, idUser]);

  return (
    <div className="container-design-profile">
      <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-[95%] m-auto">
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
      <div className="flex flex-wrap justify-center mt-8 gap-y-8 gap-x-5">
        {loaderSocket && dataRender?.length === 0 ? <Loader /> : <></>}

        {"render" === variablesCards.typeCards
          ? dataRender?.length > 0 &&
            dataRender.map((data) => (
              <>
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${data._id}${data.title}`}
                  {...data}
                  id={data._id}
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
              />
            ))}
      </div>
    </div>
  );
};
