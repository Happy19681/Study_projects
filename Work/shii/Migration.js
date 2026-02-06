const pool = require('./config/db');

async function runMigration() {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS EmployeeTable (
                EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
                FirstName VARCHAR(50),
                LastName VARCHAR(50),
                Gender VARCHAR(10),
                DateOfBirth DATE,
                PhoneNumber VARCHAR(15),
                EmailAddress VARCHAR(100),
                Department VARCHAR(50),
                JobTitle VARCHAR(50),
                Salary DECIMAL(10, 2),
                DateOfJoining DATE
            )
        `);
        console.log('Migration successfully created.');
    } catch (error) {
        console.error('Migration failed:', error);
        process.exit(1);
    }
}
runMigration()

module.exports = runMigration;

