import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { ProfileInfo, Navbar, Design, AddProject } from "../components";
import { Buttons } from "../components/ProfileInfo/Buttons";
import { ProfileOtherUser } from "../components/ProfileInfo/ProfileOtherUser";
import { useUpdateUser } from "../hooks";

export const Profile = () => {
  const openModalUpload = useSelector((state) => state.openModalUpload.state);

  const { id: idParam } = useParams();

  const openModalSocialMediaSlice = useSelector(
    (state) => state.openModalSocialMedia.state
  );
  const { infoUser } = useUpdateUser();

  const informationToEdit = useSelector((state) => state.informationToEdit);

  useEffect(() => {
    if (openModalUpload || openModalSocialMediaSlice) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "auto";
  }, [openModalUpload, openModalSocialMediaSlice]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="gradient-bg-welcome">
      <Navbar />

      <div className="container-profile">
        {idParam !== undefined && idParam !== infoUser._id ? (
          <>
            <ProfileOtherUser id={idParam} />
            <Design userById={true} idUser={idParam} />
          </>
        ) : (
          <>
            <ProfileInfo />
            <Design userById={true} idUser={infoUser._id} />
            {openModalUpload && informationToEdit.id === "" ? (
              <AddProject />
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};
