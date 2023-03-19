import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "../ChatList/Avatar";
import { ChatItem } from "./ChatItem";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export const ChatContent = ({ windowWidth, changeToList }) => {
  const messagesEndRef = useRef(null);
  const [msg, setMsg] = useState("");
  const [chatItems, setChatItems] = useState([
    {
      key: 1,
      image:
        "https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image:
        "https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
        "https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ]);

  const onStateChange = (e) => {
    setMsg(e.target.value);
  };
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (msg !== "") {
        setChatItems([
          ...chatItems,
          {
            key: 1,
            type: "",
            msg: msg,
            image:
              "https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png",
          },
        ]);
        scrollToBottom();
        setMsg("");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    scrollToBottom();
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [msg]);

  return (
    <div className="main__chatcontent">
      <div className="content__header">
        <div className="blocks">
          <div className="current-chatting-user">
            {windowWidth <= 670 && (
              <ArrowLeftIcon
                title="plus"
                color="#fff"
                titleId="plusId"
                className="block h-7 w-7 mr-3"
                aria-hidden="true"
                onClick={changeToList}
              />
            )}
            <Avatar
              isOnline="active"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
            />
            <p className="font-text text-white">Tim Hover</p>
          </div>
        </div>

        <div className="blocks">
          <div className="settings"></div>
        </div>
      </div>
      <div className="content__body">
        <div className=" pt-2">
          {chatItems.map((itm, index) => {
            return (
              <ChatItem
                animationDelay={index + 2}
                key={itm.key}
                user={itm.type ? itm.type : "me"}
                msg={itm.msg}
                image={itm.image}
              />
            );
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="content__footer">
        <div className="sendNewMessage">
          <input
            type="text"
            placeholder="Type a message here"
            onChange={onStateChange}
            value={msg}
            className="outline-0 outline-none text-[#e97d05] font-text"
          />
          <button className="btnSendMsg" id="sendMsgBtn">
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
