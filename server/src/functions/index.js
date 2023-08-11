import DataVideo from "../model/dataVideo.model.js";
import DataRender from "../model/dataRender.model.js";

export const addDemoReel = (data) => {
  const newDataVideo = new DataVideo(data);
  return newDataVideo.save();
};

export const addRender = (data) => {
  const newDataRender = new DataRender(data);
  return newDataRender.save();
};

export const getDataRender = async () => {
  return await DataRender.collection.find({}).toArray();
};

export const getDataVideo = async () => {
  return await DataVideo.collection.find({}).toArray();
};

export const deleteVideo = async (id) => {
  const data = await DataVideo.findByIdAndDelete(id);
  if (data) {
    return data;
  }
  return null;
};

export const deleteRender = async (id) => {
  const data = await DataRender.findByIdAndDelete(id);
  if (data) {
    return data;
  }
  return null;
};

export const updateVideo = async (id, data) => {
  const newData = await DataVideo.findByIdAndUpdate(id, data);
  if (newData) {
    return newData;
  }
  return null;
};

export const updateRender = async (id, data) => {
  const newData = await DataRender.findByIdAndUpdate(id, data);
  if (newData) {
    return newData;
  }
  return null;
};
