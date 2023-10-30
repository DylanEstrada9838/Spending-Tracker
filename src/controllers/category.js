const { create, findAll,findById,updateById,deleteById,findByName } = require("../services/category");



exports.createCategory = async function (request, response) {
	const { name } = request.body;
	const { id } = request.user;

	const currentCategory = await findByName(name);

	if (!currentCategory) {
		const category = await create({ name, userId: id });
		response.status(201).json(category)
		
	}

	else {
		response.status(400).json({
			message: "Category already exist"
		});
	};
};

exports.getCategories = async function (request, response) {
	const {id} = request.user
	const categories = await findAll(id);
	response.status(200).json(categories);
};

exports.getCategory = async function (request, response) {
	const { id } = request.params;
	const category = await findById(id);
	response.status(200).json(category);
};

exports.updateCategory = async function (request, response) {
	const { name } = request.body;
	const { id } = request.params;

	await updateById(id, { name});
	response.status(204).end();
};

exports.deleteCategory = async function (request, response) {
	const { id } = request.params;

	const currentCategory = await findById(id);

	if (currentCategory) {
		await deleteById(id);
		response.status(204).end();
	}
	else {
		response.status(400).json({
			message: "Category does not exist"
		});
	};

};