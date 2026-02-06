const express = require('express');

const router = express.Router();

const {
    createEmployee,
    AllEmployee,
    AllEmployeeById,
    DeleteEmployee,
    UpdateEmployeeById
} = require('../controller/EmployeeController');


router.post('/create',createEmployee)
router.get('/All',AllEmployee)
router.get('/:id',AllEmployeeById)
router.delete('/:id',DeleteEmployee)
router.put('/:id',UpdateEmployeeById)

module.exports = router