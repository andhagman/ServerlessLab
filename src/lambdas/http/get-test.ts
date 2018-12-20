import { lambdaHandler } from '../../utils/lambdaUtils';
import { ITest } from '../../models/Test';

export const handler = lambdaHandler(async (event) => {

  const test: ITest = { 
    TestBool: true,
    TestNumber: 1,
    TestString: "string"
  }

  return {
    statusCode: 200,
    response: test
  }
});
