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
    unique: false,
    minlength: 3,
  },
  user: {
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
});

schema.plugin(uniqueValidator);

export default mongoose.model("DataRender", schema);
