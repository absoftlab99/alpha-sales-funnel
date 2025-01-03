import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Load environment variables from the .env file
dotenv.config();

export default async function handler(req, res) {
    // Create the database connection using environment variables
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,  // Access DB host from .env
        user: process.env.DB_USER,  // Access DB user from .env
        password: process.env.DB_PASSWORD,  // Access DB password from .env
        database: process.env.DB_NAME,  // Access DB name from .env
    });

    // Handle POST request (Create)
    if (req.method === 'POST') {
        const { name, value } = req.body;

        // Insert into the database
        const [result] = await connection.query(
            'INSERT INTO your_table (name, value) VALUES (?, ?)', [name, value]
        );

        res.status(201).json({ id: result.insertId });
    }

    // Handle other CRUD operations like Read, Update, Delete here
}
