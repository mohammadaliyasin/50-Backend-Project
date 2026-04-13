const express = require("express");
const connectDB = require("./config/db");
const logger = require("./middleware/log.middleware");
const logRoute = require('./routes/log.routes');

connectDB();

const app = express();

app.use(express.json());

app.use(logger);

app.use('/api/logs',logRoute);

app.get("/", (req, res) => {
  res.send("API IS RUNNING SUCCESSFULLY");
});

module.exports = app;