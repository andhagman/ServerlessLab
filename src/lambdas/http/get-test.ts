import { lambdaHttpHandler } from '../../utils/lambda-utils/LambdaHttp';
import { getTestValue } from 'testModule';

export const handler = lambdaHttpHandler(async (event) => {
  const testValue = getTestValue();

  return {
    statusCode: 200,
    response: testValue
  }
});
