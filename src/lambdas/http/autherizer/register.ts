import { lambdaHttpHandler } from '../../../utils/lambdaUtils';
import * as AWS from 'aws-sdk';
import * as joi from 'joi';
import { validateOrThrow } from '../../../utils/validationUtils'

const schema: joi.SchemaLike = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
    email: joi.string().required(),
});

const cognitoProvider = new AWS.CognitoIdentityServiceProvider();

export const handler = lambdaHttpHandler(async (event) => {
    const body = JSON.parse(event.body);
    validateOrThrow(body, schema);

    const { username, password, email } = body;

    const params: AWS.CognitoIdentityServiceProvider.SignUpRequest = {
        ClientId: process.env.UserPoolClientId,
        Password: password,
        Username: username,
        UserAttributes: [
            {
                Name: 'email',
                Value: email
            }
        ],
    };

    const res = await cognitoProvider.signUp(params).promise()

    return {
        statusCode: 200,
        response: res
    }
});
