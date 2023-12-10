import { CustomError } from "./customError";

const MAX_IMAGE_SIZE = 2000000; // 2MB

const MAX_VIDEO_SIZE = 4000000; // 4MB

export const sizeImage = (event) => {
  if (event.size > MAX_IMAGE_SIZE) {
    throw new CustomError("200");
  } else {
    return true;
  }
};

export const sizeVideo = (event) => {
  if (event.size > MAX_VIDEO_SIZE) {
    throw new Error("Video size is too large");
  } else {
    return true;
  }
};
