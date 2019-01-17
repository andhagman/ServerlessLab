import { ErrorCodes, StatusCodes } from '../http-utils';
import { ClientError } from './ClientError';

export class ForbiddenError extends ClientError {
  constructor(message: string = 'Forbidden', errorCode: string = ErrorCodes.Forbidden) {
    super(
      message,
      errorCode,
      StatusCodes.Forbidden,
      'ForbiddenError'
    );
  }
}
