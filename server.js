require('dotenv').config();
const connectDb = require('./config/db');
const express = require('express');
const employeeRoutes = require('./routes/employeeRoutes'); // Import your routes

const app = express();
// connect to db
connectDb();
//middleware
app.use(express.json());
app.use('/api/employees', employeeRoutes);
//PORT 
const PORT = process.env.PORT || 5000 ;
// Port mapping
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}` ) );