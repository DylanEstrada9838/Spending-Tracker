const { create,findAll,findById,updateById,deleteById,findByName,findAllExpenses} = require("../services/method");

exports.createMethod = async function (request, response) {
	const { name } = request.body;
	const { id } = request.user;

	const currentMethod= await findByName(name);

	if (!currentMethod) {
		const method = await create({ name, userId: id });
		response.status(201).json(method);
	}
	else {
		response.status(400).json({
			message: "Method already exist"
		});
	};
};

exports.getMethods = async function (request, response) {
	const {id}= request.user
	const methods = await findAll(id);
	response.status(200).json(methods);
};

exports.getMethod = async function (request, response) {
	const { id } = request.params;
	const method = await findById(id);
	response.status(200).json(method);
};

exports.updateMethod = async function (request, response) {
	const { name } = request.body;
	const { id } = request.params;

	await updateById(id, { name});
	response.status(204).end();
};

exports.deleteMethod = async function (request, response) {
	const { id } = request.params;
	const currentMethod = await findById(id);

	if (currentMethod) {
		const expenses = await findAllExpenses(id)
		if (expenses == 0){
			await deleteById(id);
		response.status(204).end();
			} else {
				response.status(400).json({
				message: "Cannot delete a method with expenses created"
			});
			}
	}
	else {
		response.status(400).json({
			message: "Method does not exist"
		});
	};
};

