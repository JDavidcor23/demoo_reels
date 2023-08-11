import React, { useEffect, useState } from "react";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";
import { useWebSocket } from "../../hooks";

export const Design = ({
  edit,
  isTheOwnerOfTheAccount,
  openModalDelete,
  changeTrueDelete,
  changeFalseDelete,
}) => {
  const { functionsCards, variablesCards } = useCards();
  const {
    getDemoReel,
    addRender,
    getRender,
    disconnect,
    dataRender,
    dataVideo,
  } = useWebSocket();

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
            dataRender.map((d) => (
              <>
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d._id}${d.title}`}
                  {...d}
                  id={d._id}
                  edit={edit}
                  isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
                  openModalDelete={openModalDelete}
                  changeTrueDelete={changeTrueDelete}
                  changeFalseDelete={changeFalseDelete}
                />
              </>
            ))
          : dataVideo?.length > 0 &&
            dataVideo.map((d) => (
              <Cards
                typeCards={variablesCards.typeCards}
                key={`${d._id}${d.title}`}
                {...d}
                id={d._id}
                edit={edit}
                isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
                openModalDelete={openModalDelete}
                changeTrueDelete={changeTrueDelete}
                changeFalseDelete={changeFalseDelete}
              />
            ))}
      </div>
    </div>
  );
};
