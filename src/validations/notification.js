const Joi = require("joi");

exports.createNotificationSchema = Joi.object({
	name: Joi.string().min(5).max(100).required(),
	description: Joi.string().min(5).max(250).required(),
    isread: Joi.boolean().required()
});

exports.updateNotificationSchema = Joi.object({
	name: Joi.string().min(5).max(100).optional(),
	description: Joi.string().min(5).max(250).optional(),
    isread: Joi.boolean().optional()
}).min(1)

exports.paramsSchema = Joi.object({
	id: Joi.number().required(),
});