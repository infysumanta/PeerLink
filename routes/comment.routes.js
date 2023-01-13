const express = require("express");
const { commentController } = require("./../controllers");
const router = express.Router();

const { verifyAuth } = require("./../middleware/auth");
router.use(verifyAuth);

router.post("/create", commentController.createComment);
router.delete("/delete", commentController.deleteComment);
router.get("/:post_id", commentController.getCommentByPost);

module.exports = router;
