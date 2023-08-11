import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const schema = new Schema({
  type: {
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
  user: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  programs: {
    type: Array,
    required: true,
  },
});

schema.plugin(uniqueValidator);

export default mongoose.model("DataVideo", schema);
