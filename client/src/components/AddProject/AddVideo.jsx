import React from "react";
import { LoaderForm } from "./LoaderForm";

export const AddVideo = ({ values, loaderVideo, getImage, loader }) => {
  return (
    <>
      <div className="w-full h-auto relative mt-5">
        {values?.video ? (
          <video
            className="new-split-white h-[250px] w-full object-cover "
            src={values?.video}
            controls
          />
        ) : (
          <div className="relative h-auto">
            {loaderVideo && (
              <>
                <LoaderForm />
              </>
            )}
            <img
              className="new-split-white h-[250px] w-full object-cover "
              src={
                "https://res.cloudinary.com/dbtk64lp4/image/upload/v1680722646/preview_oe6wyc_wgace6.png"
              }
            />
          </div>
        )}
      </div>
    </>
  );
};

export const InputsVideo = ({
  values,
  loaderVideo,
  getImage,
  loader,
  getVideo,
}) => {
  return (
    <>
      <input
        className="custom-file-input-video font-text"
        type="file"
        accept=".mp4"
        onChange={(e) => getVideo(e.target.files[0])}
      />
      <div className="relative h-auto mt-5">
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
      <input
        className="custom-file-input font-text"
        type="file"
        name="image"
        accept=".jpg, .png"
        onChange={(e) => getImage(e.target.files[0])}
      />
    </>
  );
};
