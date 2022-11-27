const express = require("express");

const { getUser } = require("../controller/userController");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlRespose");

const router = express.Router();

router.get("/", decorateHtmlResponse("Users"), getUser);

module.exports = router;
