import React, { useState } from "react";

export const useChat = () => {
  const [chatList, setChatList] = useState(true);
  const changeToChat = () => {
    setChatList(false);
  };
  const changeToList = () => {
    setChatList(true);
  };
  const functionsCards = {
    changeToChat,
    changeToList,
  };
  const variablesCards = {
    chatList,
  };
  return { functionsCards, variablesCards };
};
