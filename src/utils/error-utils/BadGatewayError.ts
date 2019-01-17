import { InternalErrorCodes, StatusCodes } from '../http-utils';
import { InternalError } from './InternalError';

export class BadGatewayError extends InternalError {
  constructor(message: string = 'Bad gateway', errorCode: string = InternalErrorCodes.BadGateway) {
    super(
      message,
      errorCode,
      StatusCodes.BadGateway,
      'BadGatewayError'
    );
  }
}
