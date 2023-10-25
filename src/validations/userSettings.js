const Joi = require("joi");


exports.createUserSettingSchema = Joi.object({
	type: Joi.string().min(5).max(150).required(),
	settingValue: Joi.number().required(),
});

exports.updateUserSettingSchema = Joi.object({
	description: Joi.string().min(5).max(150).optional(),
	amount: Joi.number().required().optional(),
}).min(1)

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});