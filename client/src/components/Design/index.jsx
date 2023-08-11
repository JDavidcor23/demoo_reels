import React, { useEffect, useState } from "react";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";
import { useSocketIo, useWebSocket } from "../../hooks";
import { setDataRenderSlice } from "../../store/slices/dataRender";
import { useDispatch } from "react-redux";

export const Design = ({
  edit,
  isTheOwnerOfTheAccount,
  openModalDelete,
  changeTrueDelete,
  changeFalseDelete,
  changeTrueUpload,
}) => {
  const { functionsCards, variablesCards } = useCards();

  const dispatch = useDispatch();

  const { socket, dataVideo, dataRender } = useSocketIo(
    import.meta.env.VITE_BACKEND
  );

  const getRender = () => {
    if (socket) {
      socket.emit("getDBrenders");
      socket.on("getRenders", (data) => {
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice(data));
      });
    }
  };

  const getDemoReel = () => {
    if (socket) {
      socket.on("getDBemoReels");
      socket.on("getDemoReels", (data) => {
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice(data));
      });
    }
  };

  useEffect(() => {
    getRender();
    getDemoReel();
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
            dataRender.map((d) => (
              <>
                <Cards
                  typeCards={variablesCards.typeCards}
                  key={`${d._id}${d.title}`}
                  {...d}
                  id={d._id}
                  edit={edit}
                  changeTrueUpload={changeTrueUpload}
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
                changeTrueUpload={changeTrueUpload}
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
