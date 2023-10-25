const Method = require("../models/method");

exports.create = function (data) {
	return Method.create(data);
};


exports.findAll = function () {
	return Method.findAll()
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