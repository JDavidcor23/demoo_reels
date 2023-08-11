import { Inputs } from "../Inputs";
import { SelectOptions } from "../SelectOptions";
import { useForm } from "../../hooks";
import { useEffect, useState } from "react";
import { LoaderForm } from "./LoaderForm";
import { LoaderButton } from "./LoaderButton";

const allInputs = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
  },
];

export const AddProject = ({ changeFalseUpload }) => {
  const [uploadProject, setUploadProject] = useState("render");
  const {
    values,
    loader,
    getImage,
    setValues,
    loaderVideo,
    loaderSocket,
    handleSubmit,
    handleChange,
    getImageVideo,
    handleChangeSelect,
  } = useForm({}, changeFalseUpload);

  useEffect(() => {
    setValues({ ...values, type: uploadProject, user: "jorge" });
  }, [uploadProject]);

  return (
    <>
      <div className="w-screen h-screen fixed bg-black top-0 opacity-50 z-[8000] "></div>
      <div className=" fixed inset-0 z-[9999] overflow-y-auto animation-modal">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <form
            onSubmit={handleSubmit}
            className="relative transform overflow-hidden rounded-lg gradient-bg-welcome px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[650px] sm:p-6"
          >
            <div className="w-90 flex flex-col justify-center items-center m-auto py-3">
              <SelectOptions handleChangeSelect={handleChangeSelect} />
              <div className="w-full relative mt-5">
                <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
                  <li
                    className="font-text text-2xl cursor-pointer color-change"
                    onClick={() => setUploadProject("demo_reel")}
                  >
                    Demo reel
                  </li>
                  <li
                    className="font-text color-change text-2xl cursor-pointer"
                    onClick={() => setUploadProject("render")}
                  >
                    Render
                  </li>
                </ul>
                <div className="w-full h-auto relative mt-5">
                  {uploadProject === "render" ? (
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
                  ) : values.video ? (
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
              </div>
              {uploadProject === "render" ? (
                <input
                  className="custom-file-input font-text"
                  type="file"
                  accept=".jpg, .png"
                  onChange={(e) => getImage(e.target.files[0])}
                />
              ) : (
                <input
                  className="custom-file-input-video font-text"
                  type="file"
                  accept=".mp4"
                  onChange={(e) => getImageVideo(e.target.files[0])}
                />
              )}
              {uploadProject === "demo_reel" && (
                <>
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
              )}
              {allInputs.map((input) => (
                <Inputs
                  key={input.name}
                  {...input}
                  marginTop="mt-5"
                  handleChange={handleChange}
                />
              ))}
              <div className="w-full">
                {loaderSocket ? (
                  <LoaderButton />
                ) : (
                  <button
                    type="submit"
                    className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom mt-4 font-text"
                  >
                    PUBLISH
                  </button>
                )}
                <button
                  type="button"
                  className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 border-2 border-orangeCustom mt-4 font-text"
                  onClick={changeFalseUpload}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
