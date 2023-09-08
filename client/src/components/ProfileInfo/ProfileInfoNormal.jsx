import React, { useEffect } from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";
import { useDispatch } from "react-redux";
import { setInfoUser } from "../../store/slices/infoUser";

export const ProfileInfoNormal = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setInfoUser({
        _id: user._id,
        social_media: user.social_media,
        profile_img: user.profile_img,
        username: user.username,
        description: user.description,
      })
    );
  }, []);
  const logos = {
    behance: behance,
    instagram: instagram,
    linkedin: linkedin,
  };
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
        <p className="mt-10 text-justify">{user?.description}</p>
        <div className="flex mt-9 w-full justify-between">
          {user?.social_media?.map((social, index) => {
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
