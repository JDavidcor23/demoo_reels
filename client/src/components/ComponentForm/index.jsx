import React from "react";
import { Inputs } from "../Inputs";
import { useErrorSocket, useForm } from "../../hooks";
import { LoaderButton } from "../AddProject/LoaderButton";

export const ComponentForm = ({
  allInputs,
  title,
  fn,
  titleButton,
  socket,
  loaderAuthentication,
}) => {
  const { handleChange, handleSubmit } = useForm({});
  const { error: authenticationError } = useErrorSocket(socket);

  return (
    <form
      className="w-90 max-w-sm p-5 gradient-bg-welcome text-white rounded-sm shadow-2xl "
      onSubmit={(e) => handleSubmit(e, fn)}
    >
      <h2 className=" text-orangeCustom  text-7xl mb-5 text-center font-headings">
        {title}
      </h2>
      <div className="flex flex-col">
        <div>
          {allInputs.map((input) => (
            <Inputs key={input.name} {...input} onChange={handleChange} />
          ))}
        </div>
        {authenticationError.length > 0 &&
          authenticationError.map((error) => (
            <p className="text-red-500 text-sm mt-2" key={error.message}>
              {error.message}
            </p>
          ))}
        {loaderAuthentication ? (
          <LoaderButton />
        ) : (
          <button
            type="submit"
            className=" mt-12 flex justify-center  border border-transparent w-full  font-text bg-orangeCustom px-6 py-[9px] text-base font-medium text-white shadow-sm hover:bg-orangeCustom focus:outline-none focus:ring-2 focus:ring-orangeCustom focus:ring-offset-2"
          >
            {titleButton}
          </button>
        )}
      </div>
    </form>
  );
};
