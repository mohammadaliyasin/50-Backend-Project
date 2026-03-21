const express = require('express');
const connectDB = require('./config/db')
const contactRoutes = require('./routes/contact_routes');

//connection
connectDB();


const app = express();

app.use(express.json());4

app.use('/api/contacts',contactRoutes);

app.get('/',(req,res)=>{
 console.log('API IS RUNNING SUCCESSFULLY...')
});

module.exports = app