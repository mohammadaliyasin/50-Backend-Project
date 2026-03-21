const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async ()=>{
    try{
    console.log("MongDB Not Connected.");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongDB Connected.");
    }catch(err){
    console.log("Connection Error:",err);
    process.exit(1);
    }
}

module.exports = connectDB 