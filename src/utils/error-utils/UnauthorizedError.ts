import { ErrorCodes, StatusCodes } from '../http-utils';
import { ClientError } from './ClientError';

export class UnauthorizedError extends ClientError {
  constructor(message: string = 'Unauthorized', errorCode: string = ErrorCodes.Unauthorized) {
    super(
      message,
      errorCode,
      StatusCodes.Unauthorized,
      'UnauthorizedError'
    );
  }
}
