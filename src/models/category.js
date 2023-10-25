const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("categories", {
	name: {
		type: DataTypes.STRING(100),
		allowNull: false,
	}
});