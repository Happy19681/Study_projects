const db = require('../config/db');

exports.createStudents = async (req,res) => {
    try {
        const {StudentName,StudentEmail,Phone} = req.body;
        const [result] = await db.query(
            `INSERT INTO StudentTable(StudentName,StudentEmail,Phone) VALUES(?,?,?)`,
            [StudentName,StudentEmail,Phone]

        );
        res.status(201).json({ message: 'Student Created Successfully'})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

exports.AllStudents = async (req,res) => {
    try {
       const [student] = await db.query(`SELECT * FROM StudentTable`);
       res.status(201).json(student)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}