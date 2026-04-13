const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected.");
  } catch (err) {
    console.log("Connection Error:", err);
    process.exit(1);
  }
};

module.exports = connectDB;