const db = require('../config/db');

exports.createEmployee = async (req,res) => {
    try {
        const {EmployeeID ,FirstName ,LastName ,Gender ,DateOfBirth ,PhoneNumber ,EmailAddress ,Department ,JobTitle,Salary ,DateOfJoining} = req.body;
        const [result] = await db.query(
            `INSERT INTO EmployeeTable(EmployeeID ,FirstName ,LastName ,Gender ,DateOfBirth ,PhoneNumber ,EmailAddress ,Department ,JobTitle,Salary ,DateOfJoining)
             VALUES(?,?,?)`,
            [EmployeeID ,FirstName ,LastName ,Gender ,DateOfBirth ,PhoneNumber ,EmailAddress ,Department ,JobTitle,Salary ,DateOfJoining]

        );
        res.status(201).json({ message: 'Employee  Created Successfully'})
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}

exports.AllEmployee = async (req,res) => {
    try {
       const [Employee] = await db.query(`SELECT * FROM EmployeeTable`);
       res.status(201).json(Employee)
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
}