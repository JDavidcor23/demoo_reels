import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadFileCloudinary } from "../helper/uploadFile";
import { setInformationToEdit } from "../store/slices/informationToEdit";
import { setDataRenderSlice } from "../store/slices/dataRender";
import { setDataVideoSlice } from "../store/slices/dataVideo";
import { useSocketIo } from "./useSocketIo";
import { setOpenModalUpload } from "../store/slices/openModalUpload";

export const useForm = (initialState) => {
  const dispatch = useDispatch();

  const informationToEdit = useSelector((state) => state.informationToEdit);

  const dataVideo = useSelector((state) => state.dataVideo.data);

  const dataRender = useSelector((state) => state.dataRender.data);

  const [loader, setLoader] = useState(false);

  const { socket } = useSocketIo(import.meta.env.VITE_BACKEND);

  const [loaderVideo, setLoaderVideo] = useState(false);

  const [valueInput, setValueInput] = useState("");

  const [values, setValues] = useState(
    informationToEdit?.id.length > 0 ? informationToEdit : initialState
  );
  const getRender = () => {
    socket.emit("getDBrenders");
    socket.on("getRenders", (data) => {
      dispatch(setDataRenderSlice([]));
      dispatch(setDataRenderSlice(data));
    });
  };

  const getDemoReel = () => {
    socket.on("getDBdemoReels");
    socket.on("getDemoReels", (data) => {
      dispatch(setDataVideoSlice([]));
      dispatch(setDataVideoSlice(data));
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValueInput(value);
    setValues({ ...values, [name]: value });
  };

  const handleChangeSelect = (array) => {
    setValues({ ...values, programs: array });
  };

  const updateDesignSocket = (values) => {
    try {
      socket.emit("updateDesign", values);
      socket.on("updatedData", (newData) => {
        console.log(newData);
        new Promise((resolve, reject) => {
          if (values.type === "render") {
            const index = dataRender.findIndex(
              (data) => data._id === newData._id
            );
            const newDataRender = [...dataRender];
            newDataRender.splice(index, 1, newData);
            dispatch(setDataRenderSlice([]));
            dispatch(setDataRenderSlice(newDataRender));
          }

          if (values.type === "demo_reel") {
            const index = dataVideo.findIndex(
              (data) => data._id === newData._id
            );
            dataVideo.splice(index, 1, newData);
            dispatch(setDataVideoSlice([]));
            dispatch(setDataVideoSlice(dataVideo));
          }
          resolve();
        }).then(() => {
          dispatch(setOpenModalUpload(false));
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      if (informationToEdit.id) {
        updateDesignSocket(values);
        dispatch(setInformationToEdit({ id: "" }));
        return;
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
      setLoader(true);
      const img = await uploadFileCloudinary(event);
      console.log(img);
      setValues({ ...values, img });
    } catch (error) {
      console.log(error);
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
      socket.emit("addRender", data);
      socket.on("newRender", (newData) => {
        new Promise((resolve, reject) => {
          dispatch(setDataRenderSlice([]));
          dispatch(setDataRenderSlice([...dataRender, newData]));
          resolve();
        }).then(() => {
          dispatch(setOpenModalUpload(false));
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoaderSocket(false);
    }
  };

  const addDemoReel = async (data) => {
    try {
      // setLoaderSocket(true);
      socket.emit("addDemoReel", data);
      socket.on("newDemoReel", (newData) => {
        new Promise((resolve, reject) => {
          dispatch(setDataVideoSlice([]));
          dispatch(setDataVideoSlice([...dataVideo, newData]));
          resolve();
        }).then(() => {
          dispatch(setOpenModalUpload(false));
        });
      });
    } catch (error) {
      console.log(error);
    } finally {
      // setLoaderSocket(false);
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
    getImage,
    setValues,
    loaderVideo,
    handleSubmit,
    handleChange,
    getVideo,
    valueInput,
    handleChangeSelect,
  };
};
