const db = require('../config/db');

exports.createEmployee = async (req, res) => {
    try {
        const {
            EmployeeID, FirstName, LastName, Gender, DateOfBirth,
            PhoneNumber, EmailAddress, Department, JobTitle,
            Salary, DateOfJoining
        } = req.body;

        const [result] = await db.query(
            `INSERT INTO EmployeeTable (
                EmployeeID, FirstName, LastName, Gender, DateOfBirth,
                PhoneNumber, EmailAddress, Department, JobTitle,
                Salary, DateOfJoining
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                EmployeeID, FirstName, LastName, Gender, DateOfBirth,
                PhoneNumber, EmailAddress, Department, JobTitle,
                Salary, DateOfJoining
            ]
        );

        res.status(201).json({ message: 'Employee Created Successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Select
exports.AllEmployee = async (req, res) => {
    try {
        const [Employee] = await db.query(`SELECT * FROM EmployeeTable`);
        res.status(200).json(Employee); // 200 is more appropriate for GET
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Select By Id
exports.AllEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;

        const [Employee] = await db.query(
            `SELECT * FROM EmployeeTable WHERE EmployeeID = ?`,
            [id]
        );

        if (Employee.length === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json(Employee[0]); // Send the first (and only) match
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete
exports.DeleteEmployee = async (req, res) => {
    try {
        const { id } = req.params; 

        const [result] = await db.query(
            `DELETE FROM EmployeeTable WHERE EmployeeID = ?`,
            [id]
        );

       
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }

        res.status(200).json({ message: `Employee with ID ${id} deleted successfully` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Update
exports.UpdateEmployeeById = async (req, res) => {
    try {
        const id = req.params.id;

        const {
            FirstName,
            LastName,
            Gender,
            DateOfBirth,
            PhoneNumber,
            EmailAddress,
            Department,
            JobTitle,
            Salary,
            DateOfJoining
        } = req.body;

        // Check if employee exists
        const [existing] = await db.query(
            `SELECT * FROM EmployeeTable WHERE EmployeeID = ?`,
            [id]
        );

        if (existing.length === 0) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Update the employee
        const [result] = await db.query(
            `UPDATE EmployeeTable SET
                FirstName = ?, LastName = ?, Gender = ?, DateOfBirth = ?,
                PhoneNumber = ?, EmailAddress = ?, Department = ?, JobTitle = ?,
                Salary = ?, DateOfJoining = ?
            WHERE EmployeeID = ?`,
            [
                FirstName,
                LastName,
                Gender,
                DateOfBirth,
                PhoneNumber,
                EmailAddress,
                Department,
                JobTitle,
                Salary,
                DateOfJoining,
                id
            ]
        );

        res.status(200).json({ message: "Employee updated successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
