import React from "react";
import logo from "../assets/header/logo.png";
import { ComponentForm } from "../components";

const allInputs = [
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
];

const title = "Login";

export const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen relative gradient-bg-welcome">
      <img src={logo} alt="" className=" w-28 m-4" />
      <div className=" flex justify-center w-90 m-auto items-center h-full">
        <ComponentForm allInputs={allInputs} title={title} />
      </div>
    </div>
  );
};
