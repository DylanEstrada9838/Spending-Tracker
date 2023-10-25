const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("transactions", {
	description: {
		type: DataTypes.STRING(150),
		allowNull: false,
	},
    amount: {
        type: DataTypes.FLOAT,
		allowNull: false,
    },
});