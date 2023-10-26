const { create, findAll,findById,updateById,deleteById } = require("../services/transaction");

exports.createTransaction = async function (request, response) {
	const { description, amount, methodId, categoryId } = request.body;
	const { id } = request.user;

	const transaction = await create({ description, amount, methodId, categoryId, userId: id });

	response.status(201).json(transaction);
};

exports.getTransactions = async function (request, response) {
	const {id}=request.user
	const transactions = await findAll(id);
	response.status(200).json(transactions);
};

exports.getTransaction = async function (request, response) {
	const { id } = request.params;
	const transaction = await findById(id);
	response.status(200).json(transaction);
};

exports.updateTransaction = async function (request, response) {
	const { description,amount } = request.body;
	const { id } = request.params;

	await updateById(id, { description,amount});
	response.status(204).end();
};

exports.deleteTransaction= async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
