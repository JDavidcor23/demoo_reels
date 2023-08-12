const DataVideo = require("../model/dataVideo.model.js");
const DataRender = require("../model/dataRender.model.js");

const addDemoReel = (data) => {
  const newDataVideo = new DataVideo(data);
  return newDataVideo.save();
};

const addRender = (data) => {
  const newDataRender = new DataRender(data);
  return newDataRender.save();
};

const getDataRender = async () => {
  try {
    return await DataRender.collection.find({}).toArray();
  } catch (error) {
    throw new Error(error);
  }
};

const getDataVideo = async () => {
  try {
    return await DataVideo.collection.find({}).toArray();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteVideo = async (id) => {
  const data = await DataVideo.findByIdAndDelete(id);
  if (data) {
    return data;
  }
  return null;
};

const deleteRender = async (id) => {
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

const updateVideo = async (id, data) => {
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

const updateRender = async (id, data) => {
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

module.exports = {
  addDemoReel,
  addRender,
  getDataRender,
  getDataVideo,
  deleteVideo,
  deleteRender,
  updateVideo,
  updateRender,
};
