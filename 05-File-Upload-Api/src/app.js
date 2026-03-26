const express = require("express");
const path = require("path");
const fileRoutes = require("./routes/file_routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extened: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", fileRoutes);

app.use((err, req, res, next) => {
  res.status(500).json(err.message);
});

module.exports = app;
