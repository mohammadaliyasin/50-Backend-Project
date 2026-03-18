const express = require('express');
const connectDB = require('./config/db')

//connection
connectDB();


const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
 console.log('API IS RUNNING SUCCESSFULLY...')
});

module.exports = app