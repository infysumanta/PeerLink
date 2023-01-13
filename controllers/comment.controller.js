const { Comment, Post } = require("./../models");
exports.createComment = async (req, res) => {
  try {
    const { comment, post_id } = req.body;

    const newComment = new Comment();
    newComment.comment = comment;
    newComment.postId = post_id;
    newComment.commentBy = req.user._id;
    await newComment.save();

    const post = await Post.findById(post_id);
    post.comments.push(newComment);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Comment saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};
exports.deleteComment = async (req, res) => {
  try {
    const { comment_id } = req.body;

    const comment = await Comment.findById(comment_id);
    await comment.delete();

    const post = await Post.findById(comment.postId);
    post.comments.pull(comment_id);
    await post.save();

    return res.status(200).json({
      success: true,
      message: "Comments Deleted Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};
exports.getCommentByPost = async (req, res) => {
  try {
    const postId = req.params.post_id;

    const comments = await Comment.find({ postId: postId })
      .populate("commentBy", "firstName lastName email username")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      comments,
      message: "Comments Fetched Successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500);
    throw new Error(`Something went Wrong`);
  }
};
