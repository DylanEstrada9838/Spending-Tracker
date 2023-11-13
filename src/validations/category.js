const Joi = require("joi");

exports.createCategorySchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
});

exports.updateCategorySchema = Joi.object({
	name: Joi.string().min(3).max(100).required(),
})

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});