import React from "react";
import { Avatar } from "./Avatar";

export const ChatListItems = ({
  animationDelay,
  changeToChat,
  image,
  isOnline,
  name,
  active,
  windowWidth,
}) => {
  const selectChat = (e) => {
    if (windowWidth > 670) {
      for (
        let index = 0;
        index < e.currentTarget.parentNode.children.length;
        index++
      ) {
        e.currentTarget.parentNode.children[index].classList.remove("active");
      }
      e.currentTarget.classList.add("active");
    } else {
      changeToChat();
    }
  };
  return (
    <div
      style={{ animationDelay: `0.${animationDelay}s` }}
      onClick={selectChat}
      className={`chatList__item ${active ? active : ""} `}
    >
      <Avatar
        image={image ? image : "http://placehold.it/80x80"}
        isOnline={isOnline}
      />

      <div className="userMeta">
        <p className="font-text">{name}</p>
        <span className="activeTime">32 mins ago</span>
      </div>
    </div>
  );
};
