const mysql = require("mysql2/promise");
require("dotenv").config();

// const is_hosted = process.env.IS_HOSTED === true;

const dbConfigHosted = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: Number(process.env.DB_PORT),
    multipleStatements: false,
    namedPlaceholders: true,
};

// const dbConfigLocal = {
//   host: "localhost",
//   user: "root",
//   password: "Password",
//   database: "database1",
//   multipleStatements: false,
//   namedPlaceholders: true,
// };

// if (is_hosted) {
//   var database = mysql.createPool(dbConfigHosted);
// } else {
//   var database = mysql.createPool(dbConfigLocal);
// }
var database = mysql.createPool(dbConfigHosted);

module.exports = database;
