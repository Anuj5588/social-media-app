const jwt = require("jsonwebtoken");

// Middleware to authenticate user based on JWT token
exports.authenticateUser = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res
      .status(401)
      .json({ error: "Authentication failed. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed. Invalid token." });
  }
};
