const express = require('express');
const connectDB = require("./config/db");
const noteRoutes = require('./routes/note_routes');

connectDB();

const app = express();

app.use(express.json());

app.use('/api/notes', noteRoutes); 

app.get('/',(req,res)=>{
    res.send('API RUNNING SUCCESS FULLY..')
})

module.exports= app;

