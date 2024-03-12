import React, { useEffect } from "react";
import "../chat.css";
import { ChatBody, NavbarChat } from "../components";

export const Chat = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="__main">
      <ChatBody />
    </div>
  );
};
