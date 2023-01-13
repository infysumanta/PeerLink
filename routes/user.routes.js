const express = require("express");
const { userController } = require("./../controllers");
const { verifyAuth } = require("./../middleware/auth");

const router = express.Router();

router.use(verifyAuth);
router.get("/user", userController.getUser);

module.exports = router;
