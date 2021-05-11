var mysql = require('mysql');
require('dotenv').config();
var connection;

exports.connectBillindoDb = (callback) => {

    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    callback(connection);

} // connectBillindoDb

exports.connectDbServer = (callback) => {

    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    });

    callback(connection);

} // connectDbServer