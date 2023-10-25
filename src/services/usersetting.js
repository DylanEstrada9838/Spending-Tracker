const UserSetting = require("../models/userSetting");

exports.createUserSetting = async function (data) {
	const usersetting = await UserSetting.create(data);
	return usersetting;
};

exports.findAll = function () {
	return UserSetting.findAll()
};

exports.findById = function (id) {
	return UserSetting.findByPk(id);
};

exports.updateById = async function (id, data) {
	await UserSetting.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const usersetting = await UserSetting.findByPk(id);
	await usersetting.destroy();
};


exports.findByUser  = function (userId) {
	return UserSetting.findAll({
		where: {
			userId,
            isread: false
		},
		order: ['createdAt', 'DESC']
	});
};