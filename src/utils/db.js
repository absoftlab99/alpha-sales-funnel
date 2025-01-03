import mysql from 'mysql2/promise';

import dotenv from 'dotenv';
dotenv.config();


// // Create a connection pool
const pool = mysql.createPool({
    connectionLimit: 1000, // Adjust based on your needs
    host: process.env.DB_HOST,  // Access DB host from .env
    user: process.env.DB_USER,  // Access DB user from .env
    password: process.env.DB_PASSWORD,  // Access DB password from .env
    database: process.env.DB_NAME,  // Access DB name from .env
});




export default pool;