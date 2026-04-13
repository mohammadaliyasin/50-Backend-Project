const express = require('express');
// const connectDB = require('./config/db')
const weatherRoute = require('./routes/Weather_routes');


// connectDB();

const app = express();

app.use(express.json());

app.use('/api/weather', weatherRoute);

app.get('/',(req,res)=>{
    res.send('API IS RUNNING SUCCESSFULLY');
});

module.exports = app;
