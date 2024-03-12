import React, { useEffect, useState } from "react";
import logo from "../assets/header/logo.png";
import { ComponentForm } from "../components";
import { useAuth } from "../hooks";
import { saveLocalStorage } from "../helper/saveLocalStorage";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const socket = io(import.meta.env.VITE_BACKEND);
  const { setTrue } = useAuth();
  const [loaderAuthentication, setLoaderAuthentication] = useState(false);

  const functionLogin = async (values) => {
    if (socket) {
      setLoaderAuthentication(true);

      socket.emit("login", values);

      new Promise((resolve, reject) => {
        socket.on("token", (userInfoAndToken) => {
          if (userInfoAndToken !== null) {
            navigate("/");
            saveLocalStorage(userInfoAndToken);
            setTrue();
            resolve();
          } else {
            reject();
          }
        });
      })
        .then(() => {
          setLoaderAuthentication(false);
        })
        .catch((error) => {
          console.error(error);
          setLoaderAuthentication(false);
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen relative gradient-bg-welcome">
      <img src={logo} alt="" className="w-28 m-4" />
      <div className=" flex justify-center w-90 m-auto items-center h-full">
        <ComponentForm
          allInputs={allInputs}
          title={title}
          socket={socket}
          fn={functionLogin}
          loaderAuthentication={loaderAuthentication}
          titleButton="Login"
        />
      </div>
    </div>
  );
};
