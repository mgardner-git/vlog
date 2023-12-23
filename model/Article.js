const { Sequelize, DataTypes } = require("sequelize");


const Article = {
	id: {
		primaryKey: true,DataTypes,
		type: DataTypes.INTEGER,
		autoIncrement: true
	},
	title: {
		type: DataTypes.STRING,		
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT		
	}
};

module.exports = Article;
	
	