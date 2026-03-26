const { Sequelize, DataTypes } = require("sequelize");
const databaseConnectionString = include("/databaseConnectionSequelize");
const sequelize = new Sequelize(databaseConnectionString);
const userModel = sequelize.define(
    "web_user",
    {
        web_user_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: { type: Sequelize.STRING, allowNull: false },
        last_name: { type: Sequelize.STRING, allowNull: false },
        email: { type: Sequelize.STRING, allowNull: false },
        // password_hash: { type: Sequelize.STRING, allowNull: true },
        // password_salt: { type: Sequelize.STRING, allowNull: false }, These weren't used and they were crashing the app so I just removed them
    },
    {
        tableName: "web_user",
        timestamps: false,
        singular: "web_user",
        plural: "web_user",
    },
);
module.exports = userModel;
