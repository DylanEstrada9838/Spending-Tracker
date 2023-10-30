const Expense = require("../models/expense");


exports.create = function (data) {
	return Expense.create(data);
};

exports.findAll = function (id) {
	return Expense.findAll({
		where:{
			userId:id
		}
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