const { Sequelize, DataTypes } = require("sequelize");


const Comment = {
	id: {
		primaryKey: true,DataTypes,
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	article: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT		
	}
};

module.exports = Comment;