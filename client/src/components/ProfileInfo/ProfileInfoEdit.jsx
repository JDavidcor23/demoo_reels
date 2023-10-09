import React from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import {
  ArrowUpTrayIcon,
  MinusCircleIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { useUpdateUser } from "../../hooks";
import { uploadFileCloudinary } from "../../helper/uploadFile";

export const ProfileInfoEdit = ({ children }) => {
  const { infoUser, handleChange, handleChangesSocialMedia } = useUpdateUser();

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const url = await uploadFileCloudinary(file);
    handleChange({ target: { name: "profile_img", value: url } });
  };

  return (
    <div className="p-3">
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
        {children}
        <h3 className="font-text text-xl mt-10">Profile description</h3>
        <textarea
          name="description"
          onChange={handleChange}
          value={infoUser?.description}
          className="mt-10 font-text w-full min-h-[168px] bg-transparent border-orangeCustom focus:border-orangeCustom text-justify"
        ></textarea>
        <div className="flex mt-9 w-full justify-between">
          <div className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  onClick={() =>
                    handleChangesSocialMedia("behance", "https://behance.com")
                  }
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

                <div
                  className="relative w-[40px] h-[40px] left-[3px]"
                  // onClick={openModalDeleteFunction}
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
              </div>
            </div>
            <img src={behance} alt="" />
          </div>
          <div className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  onClick={() =>
                    handleChangesSocialMedia(
                      "instagram",
                      "https://instagram.com"
                    )
                  }
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

                <div
                  className="relative w-[40px] h-[40px] left-[3px]"
                  // onClick={openModalDeleteFunction}
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
              </div>
            </div>
            <img src={instagram} alt="" className="mt-[-3px] h-[112%] " />
          </div>
          <div className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  onClick={() =>
                    handleChangesSocialMedia("linkedin", "https://linkedin.com")
                  }
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

                <div
                  className="relative w-[40px] h-[40px] left-[3px]"
                  // onClick={openModalDeleteFunction}
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
              </div>
            </div>
            <img src={linkedin} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
