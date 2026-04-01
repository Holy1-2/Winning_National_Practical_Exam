const express = require('express');
const router = express.Router();
const salaryController = require('../controller/salaryController')

router.post('/',salaryController.createSalary);

router.get('/',salaryController.getallsalaries)

module.exports = router ;