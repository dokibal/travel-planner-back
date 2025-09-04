import * as Joi from "joi";

export const configValidationSchema = Joi.object({
    DEEPSEEK_API_KEY: Joi.string().required(),
    DEEPSEEK_BASE_URL: Joi.string().required()
})