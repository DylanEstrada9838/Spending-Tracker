const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("settings", {
	type: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
	value: {
		type: DataTypes.STRING(250),
		allowNull: null
	}
});