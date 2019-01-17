import { ErrorCodes, StatusCodes } from '../http-utils';
import { ClientError } from './ClientError';

export class TooManyRequestsError extends ClientError {
  constructor(message: string = 'Too many requests', errorCode: string = ErrorCodes.TooManyRequests) {
    super(
      message,
      errorCode,
      StatusCodes.TooManyRequests,
      'TooManyRequestsError'
    );
  }
}
