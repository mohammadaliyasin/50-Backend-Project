const Post = require("../models/blog_post_model");

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(400).json(err.message);
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await Post.find().populate("author", "name email");
    return res.status(200).json(posts);
  } catch (err) {
    return res.status(500).json(err.message);
  }
};
