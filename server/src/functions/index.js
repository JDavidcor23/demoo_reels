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

const calculateTotalPagesDataRender = async (limit) => {
  try {
    const totalDocuments = await DataRender.countDocuments();
    const totalPages = Math.ceil(totalDocuments / limit);
    return totalPages;
  } catch (error) {
    throw new Error(`Error counting DataRender documents: ${error.message}`);
  }
};

const getDataRender = async (limit, page) => {
  try {
    const offset = limit * page;
    const data = await DataRender.find()
      .sort({ Date: -1 })
      .skip(offset)
      .limit(limit)
      .exec();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const getDataVideo = async () => {
  try {
    return await DataVideo.collection.find().sort({ Date: -1 }).toArray();
  } catch (error) {
    throw new Error(error);
  }
};

const deleteVideo = async (id) => {
  try {
    const data = await DataVideo.findByIdAndDelete(id);
    if (data) {
      return data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

const deleteRender = async (id) => {
  try {
    const data = await DataRender.findByIdAndDelete(id);
    if (data) {
      return data;
    }
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
    throw new Error("Something went wrong");
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
    throw new Error("Something went wrong");
  } catch (error) {
    throw new Error(error);
  }
};

const getDataRenderByUserId = async (id) => {
  try {
    return await DataRender.collection
      .find({ id_user: id })
      .sort({ Date: -1 })
      .toArray();
  } catch (error) {
    throw new Error(error);
  }
};

const getDemoReelByUserId = async (id) => {
  try {
    return await DataVideo.collection
      .find({ id_user: id })
      .sort({ Date: -1 })
      .toArray();
  } catch (error) {
    throw new Error(error);
  }
};

// -------------------------USER_MODEL------------------------------//

const login = async (data) => {
  try {
    const user = await UserModel.findOne({ email: data.email });

    if (user !== null) {
      const result = await new Promise((resolve, reject) => {
        bcrypt.compare(data.password, user.password, (err, result) => {
          if (!result) {
            reject(
              new Error(
                "The password is incorrect. Please check your password."
              )
            );
          }
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
          social_media: user?.social_media || [],
        });
      }
    }

    throw new Error("The email does not exist. Please check your email.");
  } catch (error) {
    throw new Error(error);
  }
};

const getUser = async (id) => {
  try {
    return await UserModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const signup = async (data) => {
  try {
    data.password = await bcrypt.hash(data.password, 10);

    const currentUser = {
      ...data,
      profile_img:
        data?.profile_img ||
        "https://res.cloudinary.com/dbtk64lp4/image/upload/v1668383643/2.0/blank-profile-picture-973460__480_jvgcue.png",
    };

    const newUser = new UserModel(currentUser);
    await newUser.save();

    return await signToken({
      _id: newUser._id,
      email: newUser.email,
      username: newUser.username,
      profile_img: newUser?.profile_img || "",
      description: newUser?.description || "",
      social_media: newUser?.social_media || [],
    });
  } catch (error) {
    throw new Error(error);
  }
};

const editProfile = async (data) => {
  try {
    const result = await UserModel.findByIdAndUpdate(data._id, data);
    const { _doc } = await UserModel.findById(data._id);

    if (result) {
      return await signToken({
        _id: _doc._id,
        email: _doc.email,
        username: _doc.username,
        profile_img: _doc?.profile_img || "",
        description: _doc?.description || "",
        social_media: _doc?.social_media || [],
      });
    }

    throw new Error("The email does not exist. Please check your email.");
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  login,
  signup,
  getUser,
  addRender,
  deleteVideo,
  addDemoReel,
  editProfile,
  updateVideo,
  updateRender,
  getDataVideo,
  deleteRender,
  getDataRender,
  getDemoReelByUserId,
  getDataRenderByUserId,
  calculateTotalPagesDataRender,
};
