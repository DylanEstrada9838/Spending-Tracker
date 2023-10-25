const { create,findAll,findById,updateById,deleteById } = require("../services/userSetting.js")


exports.createUserSetting= async function (request, response) {
	const {type } = request.body;
    const {settingValue} = request.body;
    const {categoryId} = request.body;
    const {methodId} = request.body;
	const { id } = request.user;

	const userSetting = await create({type, settingValue,userId: id,categoryId,methodId});

	response.status(201).json(userSetting);
}
exports.getUserSettings = async function (request, response) {
	const usersetting = await findAll();
	response.status(200).json( usersetting);
};

exports.getUserSetting = async function (request, response) {
	const { id } = request.params;
	const  usersetting = await findById(id);
	response.status(200).json( usersetting);
};

exports.updateUserSetting = async function (request, response) {
	const { name } = request.body;
	const { id } = request.params;

	await updateById(id, { name});
	response.status(204).end();
};

exports.deleteUserSetting = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};