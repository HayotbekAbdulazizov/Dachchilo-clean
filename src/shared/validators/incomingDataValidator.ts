import Joi from 'joi';

export function dataValidator(schema:Joi.ObjectSchema, data: any) {
    const { error } = schema.validate(data);
    console.log("--- here")
    if (error) {
        throw new Error(`Invalid data --- ${error.message}`)
    }
    return true
}