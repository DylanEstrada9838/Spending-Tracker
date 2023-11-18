const { create, findAll,findById,updateById,deleteById,calculateSumGroupByCategory, calculateSumGroupByMethod,calculateSumGroupByCategoryMonth,calculateSumGroupByCategoryMonth1 } = require("../services/expense");

exports.createExpense = async function (request, response) {
	const { amount, description, date, methodId, categoryId } = request.body;
	const { id } = request.user;
	const month = new Date(date).getMonth()+1
	const expense = await create({ amount, description,date,month,  methodId, categoryId, userId: id });

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
	const { description,amount,date,categoryId,methodId } = request.body;
	const { id } = request.params;

	await updateById(id, { description,amount,date,categoryId,methodId});
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

exports.getSumGroupByCategory= async function (request,response){
	const {id}=request.user
	const expenses = await calculateSumGroupByCategory(id);
	response.status(200).json(expenses);
}

exports.getSumGroupByMethod= async function (request,response){
	const {id}=request.user
	const expenses = await calculateSumGroupByMethod(id);
	response.status(200).json(expenses);
}

exports.getSumGroupByCategoryMonth= async function (request,response){
	const {id}=request.user
	const {month} = request.params
	const {year} = request.body
	const expenses = await calculateSumGroupByCategoryMonth(id,year,month);
	response.status(200).json(expenses);
}
exports.getSumGroupByCategoryMonth1= async function (request,response){
	const {id}=request.user
	const {year} = request.params
	const expenses = await calculateSumGroupByCategoryMonth1(id,year);
	response.status(200).json(expenses);

}
