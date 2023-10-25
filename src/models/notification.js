const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("notifications", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING(250),
		allowNull: false,
	},
	isread: {
		type: DataTypes.BOOLEAN,
		allowNull: false
	}
});