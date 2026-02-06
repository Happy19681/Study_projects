
const pool = require('./config/db');

async function runMigration() {
    try {
        //await pool.query('CREATE DATABASE IF NOT EXIST StudentDatabase');
        await pool.query('USE StudentDatabase');

        await pool.query(`
             Create table IF NOT EXISTS StudentTable(
            id INT AUTO_INCREMENT PRIMARY KEY,
            StudentName VARCHAR(30),
            StudentEmail VARCHAR(30),
            Phone INT
           )`)
        console.log('Migration Successfully Created')
         
    } catch (error) {
           console.error('Migration Failed:', error)
    }

}
runMigration();
