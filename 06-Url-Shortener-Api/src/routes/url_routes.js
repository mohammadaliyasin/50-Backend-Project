const express = require("express");
const router = express.Router();

const urlController = require("../controller/url_controller");

router.post("/shorten", urlController.createShortUrl);
router.get("/:code", urlController.redirectUrl);

module.exports = router;
