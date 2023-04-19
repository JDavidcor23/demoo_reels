export const uploadFileCloudinary = async (fileSelected) => {
  const cloudUrl = "https://api.cloudinary.com/v1_1/dbtk64lp4/upload";
  const formData = new FormData();
  formData.append("upload_preset", "demo_reel");
  formData.append("file", fileSelected);
  const resp = await fetch(cloudUrl, {
    method: "POST",
    body: formData,
  });
  const cloudResp = await resp.json();
  return cloudResp.secure_url;
};
