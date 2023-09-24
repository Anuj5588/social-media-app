const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new post
router.post("/", authMiddleware.authenticateUser, postController.createPost);

// Get all posts
router.get("/", postController.getAllPosts);

module.exports = router;
