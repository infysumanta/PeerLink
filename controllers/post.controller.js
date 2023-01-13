const asyncHandler = require("express-async-handler");

const { Post, Like, User } = require("./../models");
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

exports.deletePost = asyncHandler(async (req, res) => {
  try {
    const { postId } = req.body;
    await Post.findByIdAndDelete(postId);

    return res.status(200).json({
      success: true,
      postId,
      message: "Post Deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
});

exports.getUserPost = asyncHandler(async (req, res) => {
  try {
    const userId = req.params.userId;

    const posts = await Post.find({ postBy: userId })
      .populate("postBy", "firstName lastName email username")
      .populate("likes", "likeBy")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      posts,
      message: "User Post Fetch",
    });
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

exports.getSinglePost = asyncHandler(async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId)
      .populate("postBy", "name email username")
      .populate("likes", "likeBy");

    return res.status(200).json({
      success: true,
      post: post,
      message: "Feed Post Fetch ss",
    });
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
