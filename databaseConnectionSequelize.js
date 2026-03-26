require("dotenv").config();

const dbConnString = process.env.DB_CONN_STR;

module.exports = dbConnString;
