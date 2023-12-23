const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();


const connection = new Sequelize(
	process.env.schema,
	process.env.db_username,
	process.env.db_password,
	{
		host: process.env.host,
		dialect: "mysql", 
		define: {
			freezeTableName: true
		}
	}
	
);

module.exports = connection;