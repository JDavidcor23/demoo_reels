import React, { useState } from "react";
import { uploadFileCloudinary } from "../helper/uploadFile";
import { useWebSocket } from "./useWebSocket";
import { stateOfEdit } from "../constants";

export const useForm = (initialState, changeFalseUpload) => {
  const [loader, setLoader] = useState(false);
  const {
    addRender,
    addDemoReel,
    disconnect,
    loaderSocket,
    deleteDesignSocket,
  } = useWebSocket();
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
    try {
      if (values.type === "render") {
        addRender(values);
      } else {
        addDemoReel(values);
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (loaderSocket === false) {
        disconnect();
        changeFalseUpload();
      }
    }
  };

  const getImage = async (event) => {
    try {
      setLoader(true);
      const img = await uploadFileCloudinary(event);
      setValues({ ...values, img });
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

  const deleteDesign = (id, type, setLoaderDelete, changeFalseDelete) => {
    try {
      setLoaderDelete(stateOfEdit.LOADING);
      deleteDesignSocket(id, type);
      setLoaderDelete(stateOfEdit.SUCCESS);
    } catch (error) {
      console.log(error);
    } finally {
      if (loaderSocket === false) {
        disconnect();
      }
      setTimeout(() => changeFalseDelete(), 1800);
    }
  };

  return {
    values,
    loader,
    getImage,
    setValues,
    loaderVideo,
    loaderSocket,
    handleSubmit,
    handleChange,
    getImageVideo,
    deleteDesign,
    handleChangeSelect,
  };
};
