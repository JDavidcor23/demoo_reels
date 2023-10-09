import React from "react";
import logo from "../assets/header/logo.png";
import { ComponentForm } from "../components";
import { useSocketIo } from "../hooks";
import { saveLocalStorage } from "../helper/saveLocalStorage";
import { useNavigate } from "react-router-dom";

const allInputs = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "username",
    type: "text",
    placeholder: "Username",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

const title = "Signup";

export const Signup = () => {
  const navigate = useNavigate();
  const socket = io(import.meta.env.VITE_BACKEND);

  const functionSignup = async (values) => {
    if (socket) {
      socket.emit("signup", values);
      socket.on("token", (userInfoAndToken) => {
        if (userInfoAndToken !== null) {
          navigate("/");
          saveLocalStorage(userInfoAndToken);
        }
      });
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen relative gradient-bg-welcome">
      <img src={logo} alt="" className="w-28 m-4" />
      <div className=" flex justify-center w-90 m-auto items-center h-full">
        <ComponentForm
          allInputs={allInputs}
          title={title}
          fn={functionSignup}
        />
      </div>
    </div>
  );
};
