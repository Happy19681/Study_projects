const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const Mysqlconnection = require('./config/db');

dotenv.config();

console.log('✅ Bootstrapping server.js...');

app.use(cors({
    origin: 'http://localhost:5173', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/employee', require('./routes/EmployeeRoute'));


const PORT = process.env.PORT || 4000;

(async () => {
    try {
        console.log('⏳ Connecting to MySQL...');
        const [rows] = await Mysqlconnection.query('SELECT 1');
        console.log('✅ MySQL connected:', rows);

        app.listen(PORT, () => {
            console.log(`🚀 Server is running at http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error('❌ Failed to connect to database:', error.message);
    }
})();
