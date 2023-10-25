const Notification = require("../models/notification");

exports.create = function (data) {
	return Notification.create(data);
};


exports.findById = function (id) {
	return Notification.findByPk(id);
};

exports.updateById = async function (id, data) {
	await Notification.update(data, {
		where: {
			id,
		},
	});
};

exports.deleteById = async function (id) {
	const notification = await Notification.findByPk(id);
	await notification.destroy();
};