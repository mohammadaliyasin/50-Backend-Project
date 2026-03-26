const express = require("express");
const router = express.Router();

const upload = require("../config/multer");

const uploadFileController = require("../controller/file_controller");

router.post("/upload", upload.single("file"), uploadFileController.uploadFile);

module.exports = router;
