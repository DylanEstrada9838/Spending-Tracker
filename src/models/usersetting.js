const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("usersettings", {
	type: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
	settingValue: {
		type: DataTypes.STRING(250),
		allowNull: null
	}
});