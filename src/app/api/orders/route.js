import { NextResponse } from "next/server";
import pool from "../../../utils/db";

export const POST = async (req, res) => {
    console.log('POST request received');

    try {
        // Extract data from the request body
        const { name, phone, address, quantity, price, delivery_charge, total } = await req.json();
        console.log('Request Data:', { name, phone, address, quantity, price, delivery_charge, total });

        // Validate the data
        if (
            !name ||
            !phone ||
            !address ||
            !quantity ||
            !price ||
            delivery_charge === undefined ||
            delivery_charge === null ||
            !total
        ) {
            return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
        }

        // Use parameterized query to prevent SQL injection
        const [result] = await pool.query(
            `INSERT INTO orders (name, phone, address, quantity, price, delivery_charge, total) VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, phone, address, quantity, price, delivery_charge, total]
        );
        console.log('Insert Result:', result);

        // Retrieve the inserted row
        const [lastRow] = await pool.query(`SELECT * FROM orders WHERE id = ?`, [result.insertId]);
        console.log('Inserted Row:', lastRow);

        // Return the response using NestResponse
        return NextResponse.json(
            {
                message: 'Order created successfully',
                order: lastRow[0],
            },
            { status: 201 }
        );
    } catch (err) {
        console.error('Error:', err.message);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
};
