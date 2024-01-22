import React from "react";
import { LoaderForm } from "./LoaderForm";

export const AddRender = ({ loader, values }) => {
  return (
    <>
      <div className="w-full h-auto relative mt-5">
        <div className="relative h-auto">
          {loader && (
            <>
              <LoaderForm />
            </>
          )}
          <img
            className="new-split-white h-[250px] w-full object-cover "
            src={
              values?.img ??
              "https://res.cloudinary.com/dbtk64lp4/image/upload/v1680722646/preview_oe6wyc_wgace6.png"
            }
          />
        </div>
      </div>
    </>
  );
};

export const InputsRender = ({ getImage }) => {
  return (
    <>
      <input
        className="custom-file-input font-text"
        type="file"
        accept=".jpg, .png"
        onChange={(e) => getImage(e.target.files[0])}
      />
    </>
  );
};
