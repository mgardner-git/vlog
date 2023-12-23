const { Sequelize, DataTypes } = require("sequelize");


const User = {
	username: {
		primaryKey: true,
		type: DataTypes.STRING,
		allowNull: false
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	}	
}

module.exports = User;