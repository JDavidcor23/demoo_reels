import { useSocketIo } from "../../hooks";
import { useEffect, useState } from "react";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/solid";

import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";

export const ProfileOtherUser = ({ id }) => {
  const [infoOtherUser, setInfoOtherUser] = useState({});

  const logos = {
    behance: behance,
    instagram: instagram,
    linkedin: linkedin,
  };
  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  useEffect(() => {
    if (socket) {
      socket.emit("getUser", id);
      socket.on("getUser", (data) => {
        setInfoOtherUser(data);
      });
    }
  }, [socket]);

  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px]">
        <img
          src={infoOtherUser?.profile_img}
          alt=""
          className=" w-28 rounded-full object-cover h-28"
        />
        <h2 className="font-headings text-3xl my-5">
          {infoOtherUser?.username}
        </h2>
        <button className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex text-sm">
          <ChatBubbleLeftIcon
            title="edit"
            titleId="edits"
            className="block h-6 w-6 mr-3"
            aria-hidden="true"
          />
          <span className="w-[100px]">SEND MESSAGE</span>
        </button>
        <h3 className="font-text text-xl mt-10 ">Profile description</h3>
        <p className="mt-10 text-justify min-h-[168px]">
          {infoOtherUser?.description}
        </p>
        <div className="flex mt-9 w-full justify-center">
          {infoOtherUser?.social_media?.map((social, index) => {
            const socialKey = Object.keys(social)[0];
            return (
              <a
                key={index}
                href={Object.values(social)[0]}
                className="relative"
                target="_blank"
              >
                <img
                  src={logos[socialKey]}
                  alt={socialKey}
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
