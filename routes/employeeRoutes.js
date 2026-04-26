const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');
const Employee = require('../models/Employee');



router.post('/',employeeController.createEmployee);
router.get('/',employeeController.getallEmployees);
router.delete('/:id', employeeController.deleteEmployee);


module.exports = router ;