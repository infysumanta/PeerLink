const express = require("express");
const { postController } = require("./../controllers");
const router = express.Router();

const { verifyAuth } = require("./../middleware/auth");
router.use(verifyAuth);

router.post("/create", postController.createPost);
router.post("/delete", postController.deletePost);
router.get("/get-user-post/:userId", postController.getUserPost);
router.get("/get-feed-post", postController.getFeedPost);
router.get("/get-single-post/:postId", postController.getSinglePost);
router.post("/like-post", postController.likePost);
router.post("/dislike-post", postController.dislikePost);

module.exports = router;
