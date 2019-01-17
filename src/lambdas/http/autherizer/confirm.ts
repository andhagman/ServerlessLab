import { lambdaHttpHandler, validateOrThrow } from '../../../utils';
import * as AWS from 'aws-sdk';
import * as joi from 'joi';


const schema: joi.SchemaLike = joi.object().keys({
    username: joi.string().required(),
    confirmationCode: joi.string().required(),
});

const cognitoProvider = new AWS.CognitoIdentityServiceProvider();

export const handler = lambdaHttpHandler(async (event) => {
    const body = JSON.parse(event.body);
    validateOrThrow(body, schema);

    const { username, confirmationCode } = body;

    const params: AWS.CognitoIdentityServiceProvider.ConfirmSignUpRequest = {
        ClientId: process.env.UserPoolClientId, 
        ConfirmationCode: confirmationCode,
        Username: username
    };

   await cognitoProvider.confirmSignUp(params).promise()

    return {
        statusCode: 200,
        response: {
            message: 'User confirmed successfully'
        }
    }
});
