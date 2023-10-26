const Setting = require("../models/setting");

exports.createSetting = function (data) {
	return Setting.create(data);
};

exports.findAll = function (id) {
	return Setting.findAll({
		where:{
			userId:id,
		}
	})
};

exports.findById = function (id) {
	return Setting.findByPk(id);
};

exports.updateById = async function (id, data) {
	await Setting.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const setting = await Setting.findByPk(id);
	await setting.destroy();
};
