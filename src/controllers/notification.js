const { create,findById,updateById,deleteById} = require("../services/notification");

exports.createNotification = async function (request, response) {
	const { name,description } = request.body;
	const { id } = request.user;

	const notification= await create({ name,description, userId: id });

	response.status(201).json(notification);
};

exports.getNotification = async function (request, response) {
	const { id } = request.params;
	const notification = await findById(id);
	response.status(200).json(notification);
};

exports.updateNotification = async function (request, response) {
	const { name,description,isread } = request.body;
	const { id } = request.params;

	await updateById(id, { name,description,isread});
	response.status(204).end();
};
exports.deleteNotification= async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};