const User = require("../models/user");
const { hash } = require("./security");

exports.create = async function (data) {
	data.password = await hash(data.password);
	const user = await User.create(data);
	delete user.dataValues.password;
	return user;
};

exports.findOneByEmail  = function (email) {
	return User.findOne({
		where: {
			email,
		},
	});
};

exports.findById = function (id) {
	return User.findByPk(id);
};


