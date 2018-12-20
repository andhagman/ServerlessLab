import { lambdaHttpHandler } from '../../utils/lambdaUtils';
import { validateOrThrow } from '../../utils/validationUtils'
import * as joi from 'joi';

const schema: joi.SchemaLike = joi.object().keys({
    TestString: joi.string().required(),
    TestNumber: joi.number().required(),
    TestBool: joi.boolean().required()
});

export const handler = lambdaHttpHandler(async (event) => {

    const body = JSON.parse(event.body);

    validateOrThrow(body, schema);


    return {
        statusCode: 201,
        response: body
    }
});
