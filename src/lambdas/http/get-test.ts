import { lambdaHttpHandler } from '../../utils/lambda-utils/LambdaHttp';
import { ITestInterface } from 'testInterface';

export const handler = lambdaHttpHandler(async (event) => {
  const testValue: ITestInterface = {
    age: 10,
    name: 'Andreas',
    isMarried: false
  }

  return {
    statusCode: 200,
    response: testValue
  }
});
