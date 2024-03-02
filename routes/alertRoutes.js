const express = require("express");
const router = express.Router();
const {
  uploadVideo,
  uploadImg,
  processImg,
} = require("../controllers/alertController");

const { authenticateUser } = require("../middleware/authentication");

router.post("/", authenticateUser, processImg);
router.post("/upload-img", authenticateUser, uploadImg);
router.post("/upload-video", authenticateUser, uploadVideo);

module.exports = router;
