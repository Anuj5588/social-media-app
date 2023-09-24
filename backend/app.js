const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const commentRoutes = require("./routes/commentRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb://localhost/social-media-db";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);
app.use("/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
