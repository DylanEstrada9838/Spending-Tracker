const { DataTypes } = require("sequelize");
const { sequelize } = require("./sequelize");

module.exports = sequelize.define("expenses", {
	
    amount: {
        type: DataTypes.FLOAT,
		allowNull: false,
    },
	description: {
		type: DataTypes.STRING(150),
		allowNull: true,
	},
	date: {
        type: DataTypes.DATE,
		allowNull: false, 
    },
	month:{
		type:DataTypes.INTEGER,
		allowNull:false,
	}
});
