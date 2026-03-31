const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Import your Model

// @desc    Create a new employee
// @route   POST /api/employees
router.post('/', async (req, res) => {
    try {
        // 1. Get data from the request body (sent by React or Postman)
        const { 
            employeeNumber, firstName, lastName, 
            position, address, telephone, 
            gender, hiredDate, department 
        } = req.body;

        // 2. Use the Model to create a new document in MongoDB
        const newEmployee = new Employee({
            employeeNumber,
            firstName,
            lastName,
            position,
            address,
            telephone,
            gender,
            hiredDate,
            department // This should be the ID of a Department
        });

        // 3. Save to database
        const savedEmployee = await newEmployee.save();

        // 4. Send success response back to user
        res.status(201).json(savedEmployee);

    } catch (error) {
        // Handle errors (like duplicate employeeNumber)
        res.status(400).json({ message: error.message });
    }
});

// @desc    Get all employees (For the Report - Q9)
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find().populate('department');
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;