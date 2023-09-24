const Post = require("../models/Post");

// Create a new post
exports.createPost = async (req, res) => {
  try {
    const { text } = req.body;
    const userId = req.user.userId; // Extracted from the authentication middleware
    const post = new Post({ text, user: userId });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: "Post creation failed" });
  }
};

// Get all posts
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch posts" });
  }
};
