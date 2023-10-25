const Joi = require("joi");

exports.createUserSchema = Joi.object({
	username: Joi.string().min(3).max(100).required(),
	email: Joi.string().email().min(5).max(200).required(),
	password: Joi.string().min(5).max(200).required(),
});