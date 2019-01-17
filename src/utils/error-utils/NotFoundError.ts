import { ErrorCodes, StatusCodes } from '../http-utils';
import { ClientError } from './ClientError';

export class NotFoundError extends ClientError {
  constructor(message: string = 'Not found', errorCode: string = ErrorCodes.NotFound) {
    super(
      message,
      errorCode,
      StatusCodes.NotFound,
      'NotFoundError'
    );
  }
}
