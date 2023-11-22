const { create, findOneByEmail } = require("../services/user");
const {seed}= require("../seeds/userSeed")


exports.createUser = async function (request, response) {
	const { username,email, password } = request.body;

	const userCurrent = await findOneByEmail(email);

	if (!userCurrent) {
		const user = await create({ email, username, password });
		response.status(201).json(user);
		// Insert seed of default categories and methods
		const newuser = await findOneByEmail(email);
		seed(newuser.id)

	}
	else {
		response.status(400).json({
			code:"ERR_USER",
			message: "User with email already created"
		});
	}

	
	



};