import React, { useEffect } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

import { ProfileInfo, Navbar, Design, AddProject } from "../components";
import { Buttons } from "../components/ProfileInfo/Buttons";
import { useSelector } from "react-redux";

export const Profile = ({ isTheOwnerOfTheAccount = true }) => {
  const openModalUpload = useSelector((state) => state.openModalUpload.state);

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
            <Buttons />
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

        <Design isTheOwnerOfTheAccount={isTheOwnerOfTheAccount} />
        {openModalUpload && <AddProject />}
      </div>
    </div>
  );
};
