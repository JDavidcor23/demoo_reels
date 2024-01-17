import React, { useEffect, useState } from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import { useSelector } from "react-redux";
import { Buttons } from "./Buttons";

export const ProfileInfoNormal = () => {
  const infoUser = useSelector((state) => state.infoUser);

  const logos = {
    behance: behance,
    instagram: instagram,
    linkedin: linkedin,
  };

  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px]">
        <img
          src={infoUser.profile_img}
          alt=""
          className=" w-28 rounded-full object-cover h-28"
        />
        <h2 className="font-headings text-3xl my-5">{infoUser?.username}</h2>
        <Buttons />
        <h3 className="font-text text-xl mt-10 ">Profile description</h3>
        <p className="mt-10 text-justify min-h-[168px]">
          {infoUser?.description}
        </p>
        <div className="flex mt-9 w-full justify-center">
          {infoUser?.social_media?.map((social, index) => {
            return (
              <a
                key={social.url + " " + index}
                href={social.url}
                className="relative"
                target="_blank"
              >
                <img
                  src={logos[social.name]}
                  alt={social.name}
                  style={{ margin: "0 10px" }}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
