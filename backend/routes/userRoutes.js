const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Get user profile and their posts and comments
router.get("/:userId", userController.getUserProfile);

module.exports = router;
