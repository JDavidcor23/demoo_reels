const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },
  social_media: {
    type: Array,
    required: false,
  },
  profile_img: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model("UserModel", schema);
