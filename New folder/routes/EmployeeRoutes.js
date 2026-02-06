const express = require('express');

const router = express.Router();

const {
    createEmployee,
    AllEmployee
} = require('../controller/studentcontroller');
const { createEmployee, AllEmployee } = require('../controller/EmployeeController');

router.post('/create',createEmployee)
router.get('/All',AllEmployee)

module.exports = router