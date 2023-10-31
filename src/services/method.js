const Method = require("../models/method");
const Expense = require("../models/expense")

exports.create = function (data) {
	return Method.create(data);
};


exports.findAll = function (id) {
	return Method.findAll({
		where:{
			userId:id,
		}
	})
};

exports.findById = function (id) {
	return Method.findByPk(id);
};

exports.updateById = async function (id, data) {
	await Method.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const method = await Method.findByPk(id);
	await method.destroy();
};

exports.findByName = function(name) {
	return Method.findOne({
		where:{
			name,
		}
	})
}

exports.findAllExpenses = function (id){
	return Expense.count({
		where:{
			methodId:id
		},
	})
}