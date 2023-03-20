import React from "react";
import { ChatListItems } from "./ChatListItems";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export const ChatList = ({ windowWidth, changeToChat }) => {
  const allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Tim Hover",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      id: 2,
      name: "Ayub Rossi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Hamaad Dejesus",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Eleni Hobbs",
      active: false,
      isOnline: true,
    },
  ];
  return (
    <div className="main__chatList">
      <button className="border-2 border-orangeCustom cursor-pointer h-12 justify-center items-center flex p-0 shadow  btn">
        <PlusIcon
          title="plus"
          color="#fff"
          titleId="plusId"
          className="block h-7 w-7 mr-3"
          aria-hidden="true"
        />
        <span className="text-white font-text">New conversation</span>
      </button>
      <div className="flex justify-between items-center">
        <h2 className="font-headings text-3xl my-5 text-white">Chats</h2>
      </div>
      <div>
        <div className="rounded border-2 border-orangeCustom flex justify-center items-center gap-1 text-[#e97d05] font-text">
          <input
            type="text"
            placeholder="Search Here"
            required
            className="w-full bg-transparent  pr-0 p-4 outline-0 outline-none"
          />
          <button className="h-12 bg-transparent w-[50px] cursor-pointer text-xl">
            <MagnifyingGlassIcon
              title="plus"
              color="#fff"
              titleId="plusId"
              style={{ margin: "0px" }}
              className="block h-7 w-7 mr-3"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
      <div className="mt-8 overflow-auto chatList__items">
        {allChatUsers.map((item, index) => {
          return (
            <ChatListItems
              changeToChat={changeToChat}
              windowWidth={windowWidth}
              name={item.name}
              key={item.id}
              animationDelay={index + 1}
              active={item.active ? "active" : ""}
              isOnline={item.isOnline ? "active" : ""}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};
