const Joi = require("joi");
const joi = require("../middlewares/joi");

exports.createTransactionSchema = Joi.object({
	description: Joi.string().min(5).max(150).required(),
	amount: Joi.number().required(),
});

exports.updateTransactionSchema = Joi.object({
	description: Joi.string().min(5).max(150).optional(),
	amount: Joi.number().required().optional(),
}).min(1)

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});