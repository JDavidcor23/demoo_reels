import React from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";

export const ProfileInfoNormal = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px] ">
        <img
          src={user?.profile_img}
          alt=""
          className=" w-28 rounded-full object-cover"
        />
        <h2 className="font-headings text-3xl my-5">{user?.username}</h2>
        {children}
        <h3 className="font-text text-xl mt-10">Profile description</h3>
        <p className="mt-10">{user?.description}</p>
        <div className="flex mt-9 w-full justify-between">
          <a href="" className="relative">
            <img src={behance} alt="" />
          </a>
          <a href="" className="relative">
            <img src={instagram} alt="" className="mt-[-3px] h-[112%] " />
          </a>
          <a href="" className="relative">
            <img src={linkedin} alt="" className="" />
          </a>
        </div>
      </div>
    </div>
  );
};
