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
    validate: {
      validator: function (value) {
        return value.length > 5;
      },
      message: "Password must be longer than 5 characters",
    },
  },

  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return value.length > 3;
      },
      message: "Username must be longer than 3 characters",
    },
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
