const Category = require("../models/category");

exports.create = function (data) {
	return Category.create(data);
};

exports.findAll = function () {
	return Category.findAll()
};

exports.findById = function (id) {
	return Category.findByPk(id);
};

exports.updateById = async function (id, data) {
	await Category.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const category = await Category.findByPk(id);
	await category.destroy();
};