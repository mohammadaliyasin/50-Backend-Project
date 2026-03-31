const express = require("express");
const urlRoutes = require("./routes/url_routes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());
app.use("/", urlRoutes);

app.get((req, res) => {
  res.status(200).json("Welcome to URL Shortener API");
});

module.exports = app;
