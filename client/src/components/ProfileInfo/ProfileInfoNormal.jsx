import React, { useEffect, useState } from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import { useSelector } from "react-redux";

export const ProfileInfoNormal = ({ children }) => {
  const infoUser = useSelector((state) => state.infoUser);
  const user = {};
  const logos = {
    behance: behance,
    instagram: instagram,
    linkedin: linkedin,
  };

  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px] ">
        <img
          src={infoUser.profile_img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null || "";
            currentTarget.src =
              "https://res.cloudinary.com/dbtk64lp4/image/upload/v1668383643/2.0/blank-profile-picture-973460__480_jvgcue.png";
          }}
          alt=""
          className=" w-28 rounded-full object-cover h-28"
        />
        <h2 className="font-headings text-3xl my-5">{infoUser?.username}</h2>
        {children}
        <h3 className="font-text text-xl mt-10 ">Profile description</h3>
        <p className="mt-10 text-justify min-h-[168px]">
          {infoUser?.description}
        </p>
        <div className="flex mt-9 w-full justify-between">
          {infoUser?.social_media?.map((social, index) => {
            const socialKey = Object.keys(social)[0];
            return (
              <a
                key={index}
                href={Object.values(social)[0]}
                className="relative"
                target="_blank"
              >
                <img src={logos[socialKey]} alt={socialKey} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
