const express = require("express");
const router = express.Router();
const commentController = require("../controllers/commentController");
const authMiddleware = require("../middleware/authMiddleware");

// Create a new comment on a post
router.post(
  "/:postId",
  authMiddleware.authenticateUser,
  commentController.createComment
);

// Get comments for a specific post
router.get("/:postId", commentController.getCommentsForPost);

module.exports = router;
