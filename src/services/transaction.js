const Transaction = require("../models/transaction");


exports.create = function (data) {
	return Transaction.create(data);
};

exports.findAll = function () {
	return Transaction.findAll()
};
exports.findById = function (id) {
	return Transaction.findByPk(id);
};
exports.updateById = async function (id, data) {
	await Transaction.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const transaction = await Transaction.findByPk(id);
	await transaction.destroy();
};