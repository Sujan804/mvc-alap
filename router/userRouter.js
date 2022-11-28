const express = require("express");

const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/userController");

const decorateHtmlResponse = require("../middlewares/common/decorateHtmlRespose");
const avatarUpload = require("../middlewares/users/avatarUpload.js");

const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const router = express.Router();
router.get("/", decorateHtmlResponse("Users"), getUsers);

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);
router.delete("/:id", removeUser);

module.exports = router;
