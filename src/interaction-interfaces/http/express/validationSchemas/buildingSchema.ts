import Joi from "joi";

export const createBuildingSchema = Joi.object({
    category: Joi.string().required(),
    title: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
});
