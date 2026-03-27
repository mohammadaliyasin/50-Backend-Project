const express = require("express");
const urlRoutes = require("./routes/url_routes");

const app = express();

app.use(express.json());
app.use("/", urlRoutes);

app.use((req, res) => {
  res.status(200).json("Welcome to URL Shortener API");
});
module.exports = app;
