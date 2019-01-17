import { InternalErrorCodes, StatusCodes } from '../http-utils';
import { InternalError } from './InternalError';

export class ServiceUnavailableError extends InternalError {
  constructor(message: string = 'Service unavailable', errorCode: string = InternalErrorCodes.ServiceUnavailable) {
    super(
      message,
      errorCode,
      StatusCodes.ServiceUnavailable,
      'ServiceUnavailableError'
    );
  }
}
