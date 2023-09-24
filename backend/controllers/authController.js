const User = require("../models/User");
// const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.json({ message: "Registration successful" });
  } catch (error) {
    res.status(500).json({ error: "Registration failed" });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user._id }, "secret_key");
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
