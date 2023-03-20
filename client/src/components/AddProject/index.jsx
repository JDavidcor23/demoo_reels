import { Inputs } from "../Inputs";
import { SelectOptions } from "../SelectOptions";
import { useDragAndDrop } from "../../hooks/useDragAndDrop";

const allInputs = [
  {
    name: "Name",
    type: "text",
    placeholder: "Name",
  },
];

export const AddProject = ({ changeFalseUpload }) => {
  const { drop, dragging } = useDragAndDrop();

  return (
    <>
      <div className="w-screen h-screen fixed bg-black top-0 opacity-50 z-[8000] "></div>
      <div className=" fixed inset-0 z-[9999] overflow-y-auto animation-modal">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg gradient-bg-welcome px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full max-w-[650px] sm:p-6">
            <div className="w-90 flex flex-col justify-center items-center m-auto py-3">
              <SelectOptions />
              <div className="w-full relative mt-5">
                <ul className="flex gap-6 border-b-[5px] border-orangeCustom justify-center w-90 m-auto">
                  <li className="font-text text-3xl cursor-pointer color-change">
                    Demo reels
                  </li>
                  <li className="font-text color-change text-3xl cursor-pointer">
                    Renders
                  </li>
                </ul>
                <div className="w-full h-full">
                  <div
                    className={`${dragging} w-full bg-black absolute h-full opacity-50 p-2`}
                    ref={drop}
                  >
                    <div className="w-full h-full border-dashed border-[#e97d05] border-8"></div>
                  </div>
                  <img
                    className="new-split-white h-[300px] object-contain "
                    src="https://res.cloudinary.com/dbtk64lp4/image/upload/v1679314152/preview_oe6wyc.png"
                  />
                </div>
              </div>

              <input
                className="custom-file-input font-text"
                type="file"
                accept=".jpg, .png"
              />
              {allInputs.map((input) => (
                <Inputs key={input.name} {...input} marginTop="mt-5" />
              ))}
              <div className="w-full">
                <button
                  className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 bg-orangeCustom mt-4 font-text"
                  onClick={changeFalseUpload}
                >
                  PUBLISH
                </button>
                <button
                  className="w-full flex flex-col content-center justify-center items-center text-center text-[white] p-2.5 border-2 border-orangeCustom mt-4 font-text"
                  onClick={changeFalseUpload}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
