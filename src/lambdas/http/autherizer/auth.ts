import { lambdaHttpHandler } from '../../../utils/lambdaUtils';
import * as AWS from 'aws-sdk';
import * as joi from 'joi';
import { validateOrThrow } from '../../../utils/validationUtils'
import { CognitoIdentity, CognitoIdentityServiceProvider } from 'aws-sdk';

const schema: joi.SchemaLike = joi.object().keys({
    username: joi.string().required(),
    password: joi.string().required(),
});

const cognitoProvider = new AWS.CognitoIdentityServiceProvider();

export const handler = lambdaHttpHandler(async (event) => {
    const body = JSON.parse(event.body);
    validateOrThrow(body, schema);

    const { username, password } = body;

    const authResult = await authenticate(username, password);

    return {
        statusCode: 200,
        response: authResult.AuthenticationResult
    }
});

const authenticate = async (username: string, password: string): Promise<AWS.CognitoIdentityServiceProvider.AdminInitiateAuthResponse> => {
    const initiateParams: AWS.CognitoIdentityServiceProvider.AdminInitiateAuthRequest =
    {
        AuthFlow: 'ADMIN_NO_SRP_AUTH',
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
        UserPoolId: process.env.UserPoolId,
        ClientId: process.env.UserPoolClientId,
    }

    return await cognitoProvider.adminInitiateAuth(initiateParams).promise();
}
