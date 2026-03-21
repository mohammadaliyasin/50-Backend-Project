const express = require('express');
const connectDB = require('./config/db')
const todoRoutes = require('./routes/todo_routes');

//connection
connectDB();


const app = express();

app.use(express.json());4

app.use('/api/todos',todoRoutes);

app.get('/',(req,res)=>{
 console.log('API IS RUNNING SUCCESSFULLY...')
});

module.exports = app