const express = require('express');
const router = express.Router();
const departmentController = require('../controller/departmentController');


router.post('/',departmentController.createDepartment);
router.get('/',departmentController.getallDepartments)
router.delete('/:id',departmentController.deleteDepartment)

module.exports = router ;
