import * as joi from 'joi';

export const validateOrThrow = (attributes, schema) => {
    const options: joi.ValidationOptions = {
        convert: false,
        allowUnknown: false,
        presence: 'required',
        abortEarly: false
    };

    const validation = joi.validate(attributes, schema, options);

    console.log(validation.error);
    if (validation.error) {
        throw {
            message: validation.error.message,
            statusCode: 400
        }
    }
};

