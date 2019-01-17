import { ErrorCodes, StatusCodes } from '../http-utils';
import { ClientError } from './ClientError';

export class BadRequestError extends ClientError {
  constructor(message: string = 'Bad request', errorCode: string = ErrorCodes.BadRequest) {
    super(
      message,
      errorCode,
      StatusCodes.BadRequest,
      'BadRequestError'
    );
  }
}
