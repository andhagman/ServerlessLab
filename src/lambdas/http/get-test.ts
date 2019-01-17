import { lambdaHttpHandler } from '../../utils/lambda-utils/LambdaHttp';
import { ITest } from '../../models/Test';

export const handler = lambdaHttpHandler(async (event) => {
  const test: ITest = {
    TestBool: true,
    TestNumber: 1,
    TestString: "string"
  }


  return {
    statusCode: 200,
    response: "Ok"
  }
});
