const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');



router.post('/',employeeController.createEmployee);
router.get('/',employeeController.getallEmployees);


module.exports = router ;