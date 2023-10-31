const Joi = require("joi");
const joi = require("../middlewares/joi");

exports.createExpenseSchema = Joi.object({
	amount: Joi.number().required(),
	description: Joi.string().min(0).max(150).optional(),
	categoryId: Joi.number().required(),
	methodId: Joi.number().required(),
});
exports.updateExpenseSchema = Joi.object({
	description: Joi.string().min(5).max(150).optional(),
	amount: Joi.number().required().optional(),
	categoryId: Joi.number().optional(),
	methodId: Joi.number().optional()
}).min(1)

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});