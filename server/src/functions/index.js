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
  try {
    return await DataRender.collection.find({}).toArray();
  } catch (error) {
    throw new Error(error);
  }
};

export const getDataVideo = async () => {
  try {
    return await DataVideo.collection.find({}).toArray();
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteVideo = async (id) => {
  const data = await DataVideo.findByIdAndDelete(id);
  if (data) {
    return data;
  }
  return null;
};

export const deleteRender = async (id) => {
  try {
    const data = await DataRender.findByIdAndDelete(id);
    if (data) {
      return data;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateVideo = async (id, data) => {
  try {
    await DataVideo.findByIdAndUpdate(id, data);
    const newData = await DataVideo.findById(id);
    if (newData) {
      return newData;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};

export const updateRender = async (id, data) => {
  try {
    await DataRender.findByIdAndUpdate(id, data);
    const newData = await DataRender.findById(id);
    if (newData) {
      return newData;
    }
    return null;
  } catch (error) {
    throw new Error(error);
  }
};
