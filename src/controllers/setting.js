const { create,findAll,findById,updateById,deleteById } = require("../services/setting.js")


exports.createSetting= async function (request, response) {
	const {type } = request.body;
    const {value} = request.body;
	const { id } = request.user;

	const setting = await create({type, value,userId: id});

	response.status(201).json(setting);
}

exports.getSettings = async function (request, response) {
	const {id}=request.user
	const setting = await findAll(id);
	response.status(200).json(setting);
};

exports.getSetting = async function (request, response) {
	const { id } = request.params;
	const  setting = await findById(id);
	response.status(200).json(setting);
};
exports.updateSetting = async function (request, response) {
	const { type,value } = request.body;
	const { id } = request.params;

	await updateById(id, { type,value});
	response.status(204).end();
};

exports.deleteSetting = async function (request, response) {
	const { id } = request.params;
	await deleteById(id);
	response.status(204).end();
};
