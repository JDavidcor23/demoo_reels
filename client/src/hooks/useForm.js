import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileCloudinary } from "../helper/uploadFile";
import { useWebSocket } from "./useWebSocket";
import { stateOfEdit } from "../constants";
import { setInformationToEdit } from "../store/slices/informationToEdit";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setDataVideoSlice } from "../store/slices/dataVideo";

export const useForm = (initialState, changeFalseUpload) => {
  const dispatch = useDispatch();

  const informationToEdit = useSelector((state) => state.informationToEdit);

  const [loader, setLoader] = useState(false);

  const {
    addRender,
    addDemoReel,
    disconnect,
    loaderSocket,
    dataRender,
    dataVideo,
    updateDesignSocket,
    deleteDesignSocket,
  } = useWebSocket();

  const [loaderVideo, setLoaderVideo] = useState(false);

  const [valueInput, setValueInput] = useState("");

  const [values, setValues] = useState(
    informationToEdit.id ? informationToEdit : initialState
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueInput(value);
    setValues({ ...values, [name]: value });
  };

  const handleChangeSelect = (array) => {
    setValues({ ...values, programs: array });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (informationToEdit.id) {
        updateDesignSocket(values);
        dispatch(setInformationToEdit({}));
        return;
      }
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
        // changeFalseUpload();
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

  const deleteDesign = async (id, type, setLoaderDelete, changeFalseDelete) => {
    try {
      setLoaderDelete(stateOfEdit.LOADING);

      deleteDesignSocket(id, type);

      setLoaderDelete(stateOfEdit.SUCCESS);

      if (type === "render") {
        setTimeout(() => {
          dispatch(
            setDataRenderSlice(dataRender.filter((item) => item._id !== id))
          );
        }, 2000);
      }

      if (type === "demo_reel") {
        setTimeout(() => {
          dispatch(
            setDataVideoSlice(dataVideo.filter((item) => item.id !== id))
          );
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (loaderSocket === false) {
        disconnect();
      }
      setTimeout(() => changeFalseDelete(), 1800);
    }
  };

  useEffect(() => {
    if (informationToEdit.id) {
      setValueInput(informationToEdit.title);
    }
  }, [informationToEdit]);

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
    valueInput,
    deleteDesign,
    handleChangeSelect,
  };
};
