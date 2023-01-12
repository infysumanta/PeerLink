const express = require("express");
const { userController } = require("./../controllers");
const router = express.Router();

router.post("/user", userController.getUser);

module.exports = router;
