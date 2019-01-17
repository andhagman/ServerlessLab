import { InternalErrorCodes, InternalErrorStatuses } from '../http-utils';
import { CustomError, ICustomError } from './CustomError';

interface IInternalError extends ICustomError {
  errorCode: InternalErrorCodes;
  statusCode: InternalErrorStatuses;
}

export class InternalError extends CustomError implements IInternalError {
  public errorCode: InternalErrorCodes;
  public statusCode: InternalErrorStatuses;

  constructor(message: string, errorCode: string, statusCode: InternalErrorStatuses, name: string) {
    super(message, errorCode, statusCode, name);
  }
}
