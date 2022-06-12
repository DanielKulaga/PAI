/*
    Komunikacja z baza danych
*/

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PASSWORD,
    database: 'przetargi_db',
});


const getAllAuctions = async () => {
    const sql = 'SELECT * FROM przetargi WHERE isDeleted=0';
    let data = [];
    try {
        const [rows] = await pool.query(sql);
        data = rows;
        data = data.filter(auction => auction.deadline.getTime() > new Date().getTime())
    } catch (err) {
        console.error(err)
    }

    return data;
}