require('dotenv').config();
const connectDb = require('./config/db');
const express = require('express');
const salaryRoutes = require('./routes/salaryRoutes');
const employeeRoutes = require('./routes/employeeRoutes'); 
const departmentRoutes = require('./routes/departmentRoutes')
const app = express();
// connect to db
connectDb();
//middleware
app.use(express.json());
app.use('/api/employees', employeeRoutes);
app.use('/api/salaries',salaryRoutes);
app.use('/api/departments',departmentRoutes)
//PORT 
const PORT = process.env.PORT || 5000 ;
// Port mapping
app.listen(PORT, () => console.log(`Server is running on port : ${PORT}` ) );