import React, { useEffect, useState } from "react";
import {
  ArrowUpTrayIcon,
  MinusCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { useSelector } from "react-redux";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import { useUpdateUser } from "../../hooks";
import { uploadFileCloudinary } from "../../helper/uploadFile";
import { ModalSocialMedia } from "../ModalSocialMedia";
import { Buttons } from "./Buttons";
import { DeleteSocialMedia } from "../DeleteSocialMedia";

export const ProfileInfoEdit = () => {
  const [nameOfSocialMedia, setNameOfSocialMedia] = useState("");

  const {
    infoUser,
    handleChange,
    openModalSocialMedia,
    openDeleteSocialMedia,
  } = useUpdateUser();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const url = await uploadFileCloudinary(file);
    handleChange({ target: { name: "profile_img", value: url } });
  };

  const openModalSocialMediaSlice = useSelector(
    (state) => state.openModalSocialMedia.state
  );

  const openModalAndSetSocialMedia = (name) => {
    openModalSocialMedia();
    setNameOfSocialMedia(name);
  };

  const openModalDeleteSocialMediaSlice = useSelector(
    (state) => state.openModalDeleteSocialMedia.state
  );

  const removeSocialMedia = (name) => {
    openDeleteSocialMedia();
    setNameOfSocialMedia(name);
  };

  const isSocialMediaAlreadyAdded = (name) => {
    return infoUser.social_media.some(
      (socialMedia) => socialMedia.name === name
    );
  };

  return (
    <div className="">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px] ">
        <div className="relative w-28 cursor-pointer">
          <img
            src={infoUser?.profile_img}
            alt=""
            className=" w-28 rounded-full object-cover h-28"
          />
          <div className="image-upload opacity-100 z-50">
            <ArrowUpTrayIcon
              title="edit"
              titleId="edits"
              className="block h-6 w-6"
              aria-hidden="true"
            />
            <input
              type="file"
              id="file-input"
              accept=".jpg, .png"
              className="w-full h-full absolute top-0 left-0 opacity-0 z-[200]"
              onChange={handleFileUpload}
            />
          </div>
          <div className="image-upload bg-black opacity-50"></div>
        </div>

        <input
          name="username"
          type="text"
          onChange={handleChange}
          value={infoUser?.username}
          className="font-headings text-3xl my-5 bg-transparent border-orangeCustom focus:border-orangeCustom w-full text-center"
        />
        <Buttons />
        <h3 className="font-text text-xl mt-10">Profile description</h3>

        <textarea
          name="description"
          onChange={handleChange}
          value={infoUser?.description}
          className="mt-10 font-text w-full min-h-[168px] bg-transparent border-orangeCustom focus:border-orangeCustom text-justify"
        ></textarea>

        <div className="flex mt-9 w-full justify-between">
          {[
            { name: "behance", icon: behance },
            { name: "instagram", icon: instagram },
            { name: "linkedin", icon: linkedin },
          ].map((socialMedia, indexOfSocialMedia) => (
            <div className="relative" key={socialMedia.name}>
              <div className="absolute w-[80px] left-[-10px]">
                <div className="flex justify-center cursor-pointer items-center w-full m-auto mt-[-20px]">
                  <div
                    className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                    onClick={() => openModalAndSetSocialMedia(socialMedia.name)}
                  >
                    <PencilIcon
                      title="edit"
                      titleId="edits"
                      color="#e97d05"
                      className="block h-6 w-6 mr-3"
                      aria-hidden="true"
                      style={{ margin: "0" }}
                    />
                  </div>
                  {isSocialMediaAlreadyAdded(socialMedia.name) && (
                    <div
                      className="relative w-[40px] h-[40px] left-[3px]"
                      onClick={() => removeSocialMedia(socialMedia.name)}
                    >
                      <MinusCircleIcon
                        title="minus"
                        titleId="minusId"
                        color="red"
                        width="45px"
                        style={{ position: "absolute", zIndex: "20" }}
                      />

                      <div className=" w-3 h-3 bg-white absolute left-[23px] top-[50%] translate-x-[-50%] translate-y-[-50%] z-10 "></div>
                    </div>
                  )}
                </div>
              </div>

              <img
                src={socialMedia.icon}
                alt={socialMedia.name}
                className="w-[60px] h-[60px]"
              />
            </div>
          ))}
        </div>
      </div>
      {openModalSocialMediaSlice && (
        <ModalSocialMedia nameOfSocialMedia={nameOfSocialMedia} />
      )}
      {openModalDeleteSocialMediaSlice && (
        <DeleteSocialMedia nameSocialMedia={nameOfSocialMedia} />
      )}
    </div>
  );
};
