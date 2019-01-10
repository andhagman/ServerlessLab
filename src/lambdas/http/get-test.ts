import { lambdaHttpHandler } from '../../utils/lambdaUtils';
import { ITest } from '../../models/Test';
import { v4 } from 'uuid';

export const handler = lambdaHttpHandler(async (event) => {
  const test: ITest = {
    TestBool: true,
    TestNumber: 1,
    TestString: "string"
  }


  return {
    statusCode: 200,
    response: v4()
  }
});
