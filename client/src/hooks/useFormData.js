import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileCloudinary } from "../helper/uploadFile";
import { setInformationToEdit } from "../store/slices/informationToEdit";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setDataVideoSlice } from "../store/slices/dataVideo";
import { useSocketIo } from "./useSocketIo";
import { setOpenModalUpload } from "../store/slices/openModalUpload";
import { setLoaderButtons } from "../store/slices/loaderButtons";
import { sizeImage } from "../helper/validateSize";

export const useFormData = (initialState) => {
  const dispatch = useDispatch();

  const [errorFormData, setErrorFormData] = useState("");

  const informationToEdit = useSelector((state) => state.informationToEdit);

  const dataVideo = useSelector((state) => state.dataVideo.data);

  const dataRender = useSelector((state) => state.dataRender.data);

  const loaderButtons = useSelector((state) => state.loaderButtons.state);

  const [loader, setLoader] = useState(false);

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const [loaderVideo, setLoaderVideo] = useState(false);

  const [valueInput, setValueInput] = useState("");

  const [values, setValues] = useState(
    informationToEdit?.id.length > 0 ? informationToEdit : initialState
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueInput(value);
    setValues({ ...values, [name]: value });
  };

  const handleChangeSelect = (array) => {
    setValues({ ...values, programs: array });
  };

  const updateDesignSocket = async (values) => {
    try {
      dispatch(setLoaderButtons(true));
      socket.emit("updateDesign", values);
      if ("render" === values.type) {
        const index = dataRender.findIndex((item) => item._id === values.id);
        let newData = [...dataRender];
        newData.splice(index, 1, { ...values, _id: values.id });
        dispatch(setDataRenderSlice([]));
        dispatch(setDataRenderSlice([...newData]));
      }
      if ("demo_reel" === values.type) {
        const index = dataVideo.findIndex((item) => item._id === values.id);
        let newData = [...dataVideo];
        newData.splice(index, 1, { ...values, _id: values.id });
        dispatch(setDataVideoSlice([]));
        dispatch(setDataVideoSlice([...newData]));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setOpenModalUpload(false));
      dispatch(setLoaderButtons(false));
      dispatch(setInformationToEdit({ id: "" }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (informationToEdit.id) {
        updateDesignSocket(values);
      } else {
        if (values.type === "render") {
          addRender(values);
        }

        if (values.type === "demo_reel") {
          addDemoReel(values);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getImage = async (event) => {
    try {
      if (sizeImage(event)) {
        setLoader(true);
        const img = await uploadFileCloudinary(event);
        setValues({ ...values, img });
        setErrorFormData("");
      }
    } catch (error) {
      setErrorFormData(error.message);
    } finally {
      setLoader(false);
    }
  };

  const getVideo = async (event) => {
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

  const addRender = async (data) => {
    try {
      dispatch(setLoaderButtons(true));
      socket.emit("addRender", data);
      socket.on("newRender", (newData) => {
        new Promise((resolve, reject) => {
          dispatch(setDataRenderSlice([]));
          dispatch(setDataRenderSlice([...dataRender, newData]));
          resolve();
        }).then(() => {
          setTimeout(() => {
            dispatch(setOpenModalUpload(false));
            dispatch(setLoaderButtons(false));
          }, 1000);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addDemoReel = async (data) => {
    try {
      dispatch(setLoaderButtons(true));
      socket.emit("addDemoReel", data);
      socket.on("newDemoReel", (newData) => {
        new Promise((resolve, reject) => {
          dispatch(setDataVideoSlice([]));
          dispatch(setDataVideoSlice([...dataVideo, newData]));
          resolve();
        }).then(() => {
          setTimeout(() => {
            dispatch(setLoaderButtons(false));
            dispatch(setOpenModalUpload(false));
          }, 1000);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Add the title of the render to the input
  useEffect(() => {
    if (informationToEdit?.id.length > 0) {
      setValueInput(informationToEdit.title);
    }
  }, [informationToEdit]);

  return {
    values,
    loader,
    errorFormData,
    getImage,
    setValues,
    loaderVideo,
    handleSubmit,
    handleChange,
    loaderButtons,
    getVideo,
    valueInput,
    handleChangeSelect,
  };
};
