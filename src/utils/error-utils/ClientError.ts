import { ClientErrorStatuses, ErrorCodes } from '../http-utils';
import { CustomError, ICustomError } from './CustomError';

interface IClientError extends ICustomError {
  errorCode: ErrorCodes;
  statusCode: ClientErrorStatuses;
}

export class ClientError extends CustomError implements IClientError {
  public errorCode: ErrorCodes;
  public statusCode: ClientErrorStatuses;

  constructor(message: string, errorCode: string, statusCode: ClientErrorStatuses, name: string) {
    super(message, errorCode, statusCode, name);
  }
}
