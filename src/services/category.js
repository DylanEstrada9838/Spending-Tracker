const Category = require("../models/category");
const Expense = require ("../models/expense")

exports.create = function (data) {
	return Category.create(data);
};

exports.findAll = function (id) {
	return Category.findAll({
		where:{
			userId:id,
		}
	})
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

exports.findByName = function(name) {
	return Category.findOne({
		where:{
			name,
		}
	})
}

exports.findAllExpenses = function (id){
	return Expense.count({
		where:{
			categoryId:id
		},
	})
}
