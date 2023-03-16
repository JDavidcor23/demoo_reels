import React from "react";
import behance from "../../assets/Profile/behance.svg";
import instagram from "../../assets/Profile/instagram.svg";
import linkedin from "../../assets/Profile/linkedin.svg";

export const ProfileInfo = ({ children }) => {
  return (
    <div className="p-3">
      <div className=" container-profileInfo p-6 gradient-bg-welcome text-white rounded-sm shadow-2xl max-w-[400px] ">
        <img
          src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1678822603/jorgito23diaz6_siberian_husky_3d_pixar_style_render_3d_hd_b95a39ab-ae8b-4d09-8594-f42e35e81de5_-_Copy_tvfcfn.png"
          alt=""
          className=" w-28 rounded-full object-cover"
        />
        <h2 className="font-headings text-3xl my-5">Jorge David Diaz</h2>
        {children}
        <h3 className="font-text text-xl mt-10">Profile description</h3>
        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores modi
          rem error similique autem accusamus. Eligendi quia totam illo adipisci
          facilis mollitia voluptates cumque repellendus voluptatem, commodi ut!
          Ab, provident.
        </p>
        <div className="flex mt-9 w-full justify-between">
          <a href="">
            <img src={behance} alt="" />
          </a>
          <a href="" className="">
            <img src={instagram} alt="" className="mt-[-3px] h-[112%] " />
          </a>
          <a href="" className="">
            <img src={linkedin} alt="" className="" />
          </a>
        </div>
      </div>
    </div>
  );
};
