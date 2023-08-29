import React from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import { useSelector } from "react-redux";
import { MinusCircleIcon, PencilIcon } from "@heroicons/react/24/solid";

export const ProfileInfoEdit = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px] ">
        <img
          src={user?.profile_img}
          alt=""
          className=" w-28 rounded-full object-cover"
        />
        <input
          type="text"
          value={user?.username}
          className="font-headings text-3xl my-5 bg-transparent border-orangeCustom focus:border-orangeCustom w-full text-center"
        />
        {children}
        <h3 className="font-text text-xl mt-10">Profile description</h3>
        <textarea
          value={user?.description}
          className="mt-10 font-text w-full h-[168px] bg-transparent border-orangeCustom focus:border-orangeCustom"
        ></textarea>
        <div className="flex mt-9 w-full justify-between">
          <a href="" className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  // onClick={openModalUploadFunction}
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
          </a>
          <a href="" className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  // onClick={openModalUploadFunction}
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
          </a>
          <a href="" className="relative">
            <div className="absolute w-[60px] left-[-10px]">
              <div className="flex justify-between cursor-pointer items-center w-full m-auto mt-[-20px]">
                <div
                  className="flex justify-center items-center w-[32px] h-[32px] bg-white rounded-full p-1"
                  // onClick={openModalUploadFunction}
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
          </a>
        </div>
      </div>
    </div>
  );
};
