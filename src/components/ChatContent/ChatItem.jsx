import React from "react";
import { Avatar } from "../ChatList/Avatar";

export const ChatItem = ({ user, image, msg }) => {
  return (
    <div
      style={{ animationDelay: `0.8s` }}
      className={`chat__item ${user ? user : ""}`}
    >
      <div className="chat__item__content">
        <div className="chat__msg font-text">{msg}</div>
        <div className="chat__meta">
          <span className="font-text">Seen 1.03PM</span>
        </div>
      </div>
      <Avatar isOnline="active" image={image} />
    </div>
  );
};
