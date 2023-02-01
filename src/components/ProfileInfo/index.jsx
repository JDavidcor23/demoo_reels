import React from "react";
import { PencilIcon, ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";

export const ProfileInfo = () => {
  return (
    <div className="p-3 ">
      {" "}
      <div className="flex flex-col justify-center items-center w-96 p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl min-h-[790px]">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
          className=" w-28 rounded-full"
        />
        <h2 className="font-headings text-3xl my-5">Jorge David Diaz</h2>
        <button className="justify-center items-center bg-orangeCustom p-3 w-48 text-center text-white font-text flex">
          <PencilIcon
            title="edit"
            titleId="edits"
            className="block h-6 w-6 mr-3"
            aria-hidden="true"
          />
          <span className=" w-[100px]">EDIT PROFILE</span>
        </button>
        <button className="justify-center items-center border-2 border-orangeCustom p-3 mt-3 w-48 text-center text-white font-text flex">
          <ArrowUpTrayIcon
            title="edit"
            titleId="edits"
            className="block h-6 w-6 mr-3"
            aria-hidden="true"
          />
          <span className=" w-[100px]">UPLOAD</span>
        </button>
        <h3 className="font-text text-xl mt-10">Profile description</h3>
        <p className="  mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores modi
          rem error similique autem accusamus. Eligendi quia totam illo adipisci
          facilis mollitia voluptates cumque repellendus voluptatem, commodi ut!
          Ab, provident.
        </p>
        <div className="flex mt-9 w-full justify-between">
          <img src={behance} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
};
