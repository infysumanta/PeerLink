const express = require("express");

const router = express.Router();

router.use("/auth", require("./auth.routes"));
router.use("/users", require("./user.routes"));
router.use("/posts", require("./post.routes"));
router.use("/comments", require("./comment.routes"));

module.exports = router;
