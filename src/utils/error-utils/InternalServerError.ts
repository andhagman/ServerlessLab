import { InternalErrorCodes, StatusCodes } from '../http-utils';
import { InternalError } from './InternalError';

export class InternalServerError extends InternalError {
  constructor(message: string = 'Internal server error', errorCode: string = InternalErrorCodes.InternalServerError) {
    super(
      message,
      errorCode,
      StatusCodes.InternalServerError,
      'InternalServerError'
    );
  }
}
