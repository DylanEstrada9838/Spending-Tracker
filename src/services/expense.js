const Expense = require("../models/expense");
const Category = require("../models/category")
const Method = require("../models/method")
const Sequelize = require("../models/sequelize")

exports.create = function (data) {
	return Expense.create(data);
};

exports.findAll = function (id) {
	return Expense.findAll({
		
		  where: {
			userId: id,
		  },
		  include:[
			{
				model:Category,
				attributes:['name']
			},
			{
				model:Method,
				attributes:['name']
			}
		],	
		order: [['date', 'DESC']]	  
	})
};

exports.findById = function (id) {
	return Expense.findByPk(id);
};

exports.updateById = async function (id, data) {
	await Expense.update(data, {
		where: {
			id,
		},
	});
};
exports.deleteById = async function (id) {
	const expense = await Expense.findByPk(id);
	await expense.destroy();
};

exports.calculateSumGroupByCategory = function (id){
	return Expense.findAll({
		attributes: [
			'CategoryId',
			[Sequelize.sequelize.fn('SUM', Sequelize.sequelize.col('amount')), 'totalAmount'],
		  ],
		  include:[
			{
				model:Category,
				attributes:['name']
			},
		],
		  where: {
			userId: id,
		  },
		  group: ['CategoryId'],
	  });
}  

exports.calculateSumGroupByMethod = function (id){
	return Expense.findAll({
		attributes: [
			'MethodId',
			[Sequelize.sequelize.fn('SUM', Sequelize.sequelize.col('amount')), 'totalAmount'],
		  ],
		  include:[
			{
				model:Method,
				attributes:['name']
			},
		],
		  where: {
			userId: id,
		  },
		  group: ['MethodId'],
	  });
}  

