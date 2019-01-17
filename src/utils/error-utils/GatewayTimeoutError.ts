import { InternalErrorCodes, StatusCodes } from '../http-utils';
import { InternalError } from './InternalError';

export class GatewayTimeoutError extends InternalError {
  constructor(message: string = 'Gateway timeout', errorCode: string = InternalErrorCodes.GatewayTimeout) {
    super(
      message,
      errorCode,
      StatusCodes.GatewayTimeout,
      'GatewayTimeoutError'
    );
  }
}
