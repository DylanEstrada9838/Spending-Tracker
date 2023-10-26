const Joi = require("joi");


exports.createSettingSchema = Joi.object({
	type: Joi.string().min(5).max(150).required(),
	value: Joi.number().required(),
});
exports.updateSettingSchema = Joi.object({
	type: Joi.string().min(5).max(150).optional(),
	value: Joi.number().optional(),
}).min(1)

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});