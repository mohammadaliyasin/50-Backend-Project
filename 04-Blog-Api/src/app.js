const express = require("express");
const connectDB = require("./config/db");
const blogPostRoutes = require("./routes/blog_post_routes");
const blogCommentRoutes = require("./routes/blog_comment_routes");
const blogUserRoutes = require("./routes/blog_user_routes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/posts", blogPostRoutes);
app.use("/api/comments", blogCommentRoutes);
app.use("/api/users", blogUserRoutes);

app.get("/", (req, res) => {
  res.send("API RUNNING SUCCESSFULLY..");
});

module.exports = app;
