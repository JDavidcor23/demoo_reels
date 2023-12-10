import React, { useEffect } from "react";
import "../chat.css";
import { ChatBody } from "../components/ChatBody";
import { NavbarChat } from "../components/NavbarChat/NavbarChat";
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
