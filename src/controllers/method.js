const { create,findAll,findById,updateById,deleteById} = require("../services/method");

exports.createMethod = async function (request, response) {
	const { name } = request.body;
	const { id } = request.user;

	const method = await create({ name, userId: id });

	response.status(201).json(method);
};

exports.getMethods = async function (request, response) {
	const methods = await findAll();
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
	await deleteById(id);
	response.status(204).end();
};

