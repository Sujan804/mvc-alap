const express = require("express");

const { getInbox } = require("../controller/inboxController");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlRespose");

const router = express.Router();

router.get("/", decorateHtmlResponse("Inbox"), getInbox);
