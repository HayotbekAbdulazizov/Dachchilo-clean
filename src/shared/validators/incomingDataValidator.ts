import Joi from 'joi';

export function dataValidator(schema:Joi.ObjectSchema, data: any) {
    const { error } = schema.validate(data);
    if (error) {
        throw new Error(`Invalid data --- ${error.message}`)
    }
    return true
}