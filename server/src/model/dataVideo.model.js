const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const schema = new Schema({
  type: {
    type: String,
    required: true,
  },
  id_user: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  video: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  programs: {
    type: Array,
    required: true,
  },
  Date: {
    type: Date,
    default: Date.now,
  },
});

schema.plugin(uniqueValidator);

module.exports = mongoose.model("DataVideo", schema);
