import { StatusCodes } from '../http-utils';

export interface ICustomError {
  errorCode: string;
  message: string;
  name: string;
  statusCode: StatusCodes;

  toBody(): string;
}

export class CustomError extends Error implements ICustomError {
  public errorCode: string;
  public name: string;
  public statusCode: StatusCodes;

  constructor(message: string, errorCode: string, statusCode: StatusCodes, name: string) {
    super(message);

    this.errorCode = errorCode;
    this.statusCode = statusCode;
    this.name = name;
  }

  public toBody(): string {
    return JSON.stringify({
      message: this.message,
      code: this.errorCode
    });
  }
}
