import React from "react";
import { data } from "../../data/data";
import { dataVideo } from "../../data/dataVideo";
import { useCards } from "../../hooks/useCards";
import { Cards } from "../Cards/Cards";

export const Design = ({
  edit,
  isTheOwnerOfTheAccount,
  openModalDelete,
  changeTrueDelete,
  changeFalseDelete,
}) => {
  const { functionsCards, variablesCards } = useCards();

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
          ? data.map((d) => (
              <Cards
                typeCards={variablesCards.typeCards}
                key={`${d.id}${d.name}`}
                {...d}
                edit={edit}
                isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
                openModalDelete={openModalDelete}
                changeTrueDelete={changeTrueDelete}
                changeFalseDelete={changeFalseDelete}
              />
            ))
          : dataVideo.map((d) => (
              <Cards
                typeCards={variablesCards.typeCards}
                key={`${d.id}${d.name}`}
                {...d}
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
