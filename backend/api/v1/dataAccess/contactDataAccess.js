/*
    Komunikacja z baza danych
*/

const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.ROOT,
    password: process.env.PASSWORD,
    database: 'contact_book',
});


const getAllContacts = async () => {
    const sql = 'SELECT * FROM contacts';
    let data = [];
    try {
        const [rows] = await pool.query(sql);
        data = rows;
    } catch (err) {
        console.error(err)
    }

    return data;
}

module.exports = {
    getAllContacts,

}