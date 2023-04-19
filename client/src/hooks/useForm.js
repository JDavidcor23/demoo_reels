import React, { useState } from "react";
import { uploadFileCloudinary } from "../helper/uploadFile";

export const useForm = (initialState, changeFalseUpload) => {
  const [loader, setLoader] = useState(false);
  const [loaderVideo, setLoaderVideo] = useState(false);

  const [values, setValues] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };
  const handleChangeSelect = (array) => {
    setValues({ ...values, programs: array });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    changeFalseUpload();
  };
  const getImage = async (event) => {
    try {
      setLoader(true);
      const url = await uploadFileCloudinary(event);
      setValues({ ...values, url });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  const getImageVideo = async (event) => {
    try {
      setLoaderVideo(true);
      const video = await uploadFileCloudinary(event);
      setValues({ ...values, video });
    } catch (error) {
      console.log(error);
    } finally {
      setLoaderVideo(false);
    }
  };

  return {
    values,
    loader,
    getImage,
    setValues,
    loaderVideo,
    handleSubmit,
    handleChange,
    getImageVideo,
    handleChangeSelect,
  };
};
