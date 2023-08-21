import { Inputs } from "../Inputs";
import { SelectOptions } from "../SelectOptions";
import { useForm } from "../../hooks";
import { useEffect, useState } from "react";
import { LoaderForm } from "./LoaderForm";
import { LoaderButton } from "./LoaderButton";
import { useDispatch, useSelector } from "react-redux";
import { setOpenModalUpload } from "../../store/slices/openModalUpload";
import { setInformationToEdit } from "../../store/slices/informationToEdit";
import { AddRender, InputsRender } from "./AddRender";
import { AddVideo, InputsVideo } from "./AddVideo";

const allInputs = [
  {
    name: "title",
    type: "text",
    placeholder: "Title",
  },
];

export const AddProject = () => {
  const informationToEdit = useSelector((state) => state.informationToEdit);
  const [uploadProject, setUploadProject] = useState(
    informationToEdit?.type ?? "render"
  );

  const {
    values,
    loader,
    getImage,
    setValues,
    loaderVideo,
    loaderSocket,
    handleSubmit,
    handleChange,
    getVideo,
    handleChangeSelect,
    valueInput,
  } = useForm({});

  useEffect(() => {
    setValues({ ...values, type: uploadProject, user: "jorge" });
  }, [uploadProject]);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setInformationToEdit({ id: "" }));
    dispatch(setOpenModalUpload(false));
  };

  return (
    <>
      <div className="w-[200%] h-screen fixed bg-black top-0 opacity-50 z-[8000] "></div>
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
                {(uploadProject === "render" ||
                  informationToEdit?.type === "render") && (
                  <AddRender loader={loader} values={values} />
                )}
                {(uploadProject === "demo_reel" ||
                  informationToEdit?.type === "demo_reel") && (
                  <AddVideo values={values} loaderVideo={loaderVideo} />
                )}
              </div>
              {(uploadProject === "render" ||
                informationToEdit?.type === "render") && (
                <InputsRender getImage={getImage} />
              )}
              {(uploadProject === "demo_reel" ||
                informationToEdit?.type === "demo_reel") && (
                <InputsVideo
                  values={values}
                  loaderVideo={loaderVideo}
                  getImage={getImage}
                  loader={loader}
                  getVideo={getVideo}
                />
              )}

              {allInputs.map((input) => (
                <Inputs
                  valueInput={valueInput}
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
                  onClick={closeModal}
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
