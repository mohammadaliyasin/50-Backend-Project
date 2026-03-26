const Comment = require("../models/blog_comment_model");

exports.createComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    return res.status(200).json(comment);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

exports.getCommentsByPost = async (req, res) => {
  try {
    const comment = await Comment.find(req.params.postId)
      .populate("user", "name")
      .populate("post", "title");
    return res.status(200).json(comment);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
