export enum ErrorCodes {
  BadRequest = 'BadRequest',
  Unauthorized = 'Unauthorized',
  Forbidden = 'Forbidden',
  NotFound = 'NotFound',
  TooManyRequests = 'TooManyRequests',
}

export enum InternalErrorCodes {
  InternalServerError = 'InternalServerError',
  BadGateway = 'BadGateway',
  ServiceUnavailable = 'ServiceUnavailable',
  GatewayTimeout = 'GatewayTimeout'
}
