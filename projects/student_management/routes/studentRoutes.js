const express = require('express');

const router = express.Router();

const {
    createStudents,
    AllStudents
} = require('../controller/studentcontroller');

router.post('/create',createStudents)
router.get('/All',AllStudents)

module.exports = router