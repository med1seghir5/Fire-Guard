const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const NodeRSA = require("node-rsa");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const User = require("../models/User");
const Alert = require("../models/Alert")
const {
  sendAlertFire
} = require("../utils");

const uploadImg = async (req, res) => {
  if (!req.files || !req.files.image) {
    throw new CustomError.BadRequestError("please provide image");
  }
  const result = await cloudinary.uploader.upload(
    req.files.image.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.image.tempFilePath);
  return res.status(StatusCodes.OK).json({ image: { src: result.secure_url } });
};

const uploadVideo = async (req, res) => {
  const result = await cloudinary.uploader.upload(
    req.files.video.tempFilePath,
    {
      use_filename: true,
      folder: "file-upload",
    }
  );
  fs.unlinkSync(req.files.video.tempFilePath);
  return res.status(StatusCodes.OK).json({ video: { src: result.secure_url } });
};

const uploadLocalImg = async (req, res) => {
  if (!req.files) {
    throw new CustomError.BadRequestError("No File Uploaded");
  }
  const productImage = req.files.image;
  if (!productImage.mimetype.startsWith("image")) {
    throw new CustomError.BadRequestError("Please Upload Image");
  }
  const maxSize = 1024 * 1024;
  if (productImage.size > maxSize) {
    throw new CustomError.BadRequestError("Please upload image smaller 1MB");
  }
  const imagePath = path.join(
    __dirname,
    "../public/uploads/" + `${productImage.name}`
  );
  await productImage.mv(imagePath);
  return res
    .status(StatusCodes.OK)
    .json({ image: { src: `/uploads/${productImage.name}` } });
};

const uploadLocalVideo = async (req, res) => {
    if (!req.files) {
      throw new CustomError.BadRequestError("No File Uploaded");
    }

    const videoFile = req.files.video;

    // Validate video file type (adjust the mimetype check as needed)
    if (!videoFile.mimetype.startsWith("video")) {
      throw new CustomError.BadRequestError("Please Upload Video");
    }

    const maxSize = 1024 * 1024 * 100; // 100 MB
    if (videoFile.size > maxSize) {
      throw new CustomError.BadRequestError("Please upload video smaller 100MB");
    }

    const videoPath = path.join(
      __dirname,
      "../public/uploads/videos",
      `${videoFile.name}`
    );
    await videoFile.mv(videoPath);

    return res
      .status(StatusCodes.OK)
      .json({ video: { src: `/uploads/videos/${videoFile.name}` } });
  
};


const processImg = async (req, res) => {
  const { media } = req.body;
  if (!media) {
    throw new CustomError.BadRequestError("please provide media");
  }
  const alert = await Alert.create({ user: req.user.userId, media });
  //the process.media functionality 

  // result of process.media
  const result = false
  const user = await User.findById(req.user.userId);
  const email = user.email;
  if(result){
    await sendAlertFire({ name: req.user.name, email: email });
  }
  res.status(StatusCodes.CREATED).json({ msg:"result" , result:"img url" });
};


module.exports = {
  uploadVideo,
  uploadImg,
  processImg,
  uploadLocalImg,
  uploadLocalVideo,
};
