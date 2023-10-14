const Joi = require("joi");

exports.createUserSchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
});