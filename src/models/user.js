const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("users", {
	email: {
		type: DataTypes.STRING(50),
		allowNull: false,
		unique: true,
	},
	username:{
		type: DataTypes.STRING(50),
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(100),
		allowNull: false,
		validate:{
			len:[5,200],
		},
	}
});