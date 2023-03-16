import React, { useEffect } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

import { ProfileInfo, Navbar, Design, AddProject } from "../components";
import { Buttons } from "../components/ProfileInfo/Buttons";
import { useProfileInfo } from "../hooks";

export const Profile = ({ isTheOwnerOfTheAccount = true }) => {
  const { profileVariables, functionsProfile } = useProfileInfo();
  const { edit, openModalUpload, openModalDelete } = profileVariables;
  const {
    changeEditFalse,
    changeEditTrue,
    changeTrueUpload,
    changeFalseUpload,
    changeTrueDelete,
    changeFalseDelete,
  } = functionsProfile;
  useEffect(() => {
    if (openModalUpload) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [openModalUpload]);

  return (
    <div className="gradient-bg-welcome">
      <Navbar />
      <div className="container-profile">
        <ProfileInfo>
          {isTheOwnerOfTheAccount ? (
            <Buttons
              edit={edit}
              changeEditFalse={changeEditFalse}
              changeEditTrue={changeEditTrue}
              changeTrueUpload={changeTrueUpload}
              changeFalseUpload={changeFalseUpload}
            />
          ) : (
            <button className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex text-sm">
              <ChatBubbleLeftIcon
                title="edit"
                titleId="edits"
                className="block h-6 w-6 mr-3"
                aria-hidden="true"
              />
              <span className="w-[100px]">SEND MESSAGE</span>
            </button>
          )}
        </ProfileInfo>
        <Design
          edit={edit}
          isTheOwnerOfTheAccount={isTheOwnerOfTheAccount}
          openModalDelete={openModalDelete}
          changeTrueDelete={changeTrueDelete}
          changeFalseDelete={changeFalseDelete}
        />
        {openModalUpload && (
          <AddProject
            openModal={openModalUpload}
            changeFalseUpload={changeFalseUpload}
          />
        )}
      </div>
    </div>
  );
};
