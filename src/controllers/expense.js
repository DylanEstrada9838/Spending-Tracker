const { create, findAll,findById,updateById,deleteById } = require("../services/expense");

exports.createExpense = async function (request, response) {
	const { amount, description,  methodId, categoryId } = request.body;
	const { id } = request.user;

	const expense = await create({ amount, description,  methodId, categoryId, userId: id });

	response.status(201).json(expense);
};

exports.getExpenses = async function (request, response) {
	const {id}=request.user
	const expenses = await findAll(id);
	response.status(200).json(expenses);
};

exports.getExpense = async function (request, response) {
	const { id } = request.params;
	const expense = await findById(id);
	response.status(200).json(expense);
};

exports.updateExpense = async function (request, response) {
	const { description,amount } = request.body;
	const { id } = request.params;

	await updateById(id, { description,amount});
	response.status(204).end();
};

exports.deleteExpense= async function (request, response) {
	const { id } = request.params;
	const currentExpense = await findById(id);

	if (currentExpense) {
		await deleteById(id);
		response.status(204).end();
	}
	else {
		response.status(400).json({
			message: "Expense does not exist"
		});
	};
};
