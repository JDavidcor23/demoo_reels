import React, { useState } from "react";
import { ChatList } from "../ChatList";
import { ChatContent } from "../ChatContent";
import { useChat } from "../../hooks";
import { Navbar } from "../Navbar";

export const ChatBody = () => {
  const { functionsCards, variablesCards } = useChat();
  const windowWidth = window.innerWidth;
  return (
    <div className="flex-grow gradient-bg-welcome flex min-h-screen flex-col  py-3 px-5">
      <Navbar />
      {windowWidth > 670 ? (
        <div className="flex">
          <ChatList />
          <ChatContent />
        </div>
      ) : (
        <div className="flex">
          {variablesCards.chatList ? (
            <ChatList
              windowWidth={windowWidth}
              changeToChat={functionsCards.changeToChat}
            />
          ) : (
            <ChatContent
              windowWidth={windowWidth}
              changeToList={functionsCards.changeToList}
            />
          )}
        </div>
      )}
    </div>
  );
};
