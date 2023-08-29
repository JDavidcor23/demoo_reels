const bcrypt = require("bcryptjs");

const DataVideo = require("../model/dataVideo.model.js");
const DataRender = require("../model/dataRender.model.js");
const UserModel = require("../model/user.model.js");
const { signToken } = require("./jwt/index.js");

const addDemoReel = (data) => {
  try {
    const newDataVideo = new DataVideo(data);
    return newDataVideo.save();
  } catch (error) {
    throw new Error(error);
  }
};

const addRender = (data) => {
  try {
    const newDataRender = new DataRender(data);
    return newDataRender.save();
  } catch (error) {
    throw new Error(error);
  }
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

// -------------------------USER_MODEL------------------------------//

const login = async (data) => {
  try {
    const user = await UserModel.findOne({ email: data.email });

    if (user) {
      const result = await new Promise((resolve, reject) => {
        bcrypt.compare(data.password, user.password, (err, result) => {
          if (err) reject(err);
          resolve(result);
        });
      });

      if (result) {
        return await signToken({
          _id: user._id,
          email: user.email,
          username: user.username,
          profile_img: user?.profile_img || "",
          description: user?.description || "",
        });
      }
    }

    return null;
  } catch (error) {
    throw new Error(error);
  }
};

const signup = async (data) => {
  try {
    data.password = await bcrypt.hash(data.password, 10);

    const newUser = new UserModel(data);

    newUser.save();

    return await signToken({
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      profile_img: newUser?.profile_img || "",
      description: newUser?.description || "",
    });
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
  signup,
  login,
};
