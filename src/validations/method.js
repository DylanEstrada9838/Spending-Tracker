const Joi = require("joi");

exports.createMethodSchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
});

exports.updateMethodSchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
})

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});