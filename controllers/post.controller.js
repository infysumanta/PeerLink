const asyncHandler = require("express-async-handler");

const { Post, Like } = require("./../models");
exports.createPost = asyncHandler(async (req, res) => {
  try {
    const post = new Post();
    post.title = req.body.title;
    post.postBy = req.user._id;
    await post.save();
    res.status(201).json({
      success: true,
      message: "Post Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.deletePost = asyncHandler((req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getUserPost = asyncHandler((req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getFeedPost = asyncHandler(async (req, res) => {
  try {
    const posts = await Post.find({})
      .populate("postBy", "firstName lastName email username")
      .populate("likes", "likeBy")
      .sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      posts,
      message: "Feed Post Fetch",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getSinglePost = asyncHandler((req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.likePost = asyncHandler(async (req, res) => {
  try {
    const { likeBy, postId } = req.body;

    const like = new Like();
    like.likeBy = likeBy;
    like.postId = postId;
    await like.save();

    const post = await Post.findById(postId);
    post.likes.push(like);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Post Likes",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.dislikePost = asyncHandler(async (req, res) => {
  try {
    const { likeBy, postId } = req.body;

    const like = await Like.findOneAndDelete({
      likeBy: likeBy,
      postId: postId,
    });

    const post = await Post.findByIdAndUpdate(postId);
    post.likes.pull(like._id);
    await post.save();

    return res.status(200).json({
      success: true,
      post,
      message: "Post Likes",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});
