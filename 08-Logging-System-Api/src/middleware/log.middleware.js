const { timeStamp } = require("node:console");
const Log = require("../model/log.model");

const logger = async (req, res, next) => {
  const start = Date.now;

  res.on("finish", async () => {
    try {
      await Log.create({
        method: req.method,
        url: req.originalUrl,
        status: res.statusCode,
        message: `${req.method} ${req.originalUrl}`,
        timestamp: new Date()
      });
    } catch (err) {
      console.log("Logging failed:", err);
    }
  });
};

module.exports = logger;
