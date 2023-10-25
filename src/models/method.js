const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("methods", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false
	}
});