const { json } = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'tododb'
});

connection.connect((err) => {
    if (!err) {
        console.log("Connected to MySQL");
    } else {
        console.log("Connection failed.." + JSON.stringify(err));
    }
    
});

module.exports = connection;
