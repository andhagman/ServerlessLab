export enum StatusCodes {
  Ok = 200,
  Created = 201,
  Accepted = 202,

  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,

  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504
}

export type SuccessfulStatuses = StatusCodes.Ok | StatusCodes.Created | StatusCodes.Accepted;

export type ClientErrorStatuses =
  | StatusCodes.BadRequest
  | StatusCodes.Unauthorized
  | StatusCodes.Forbidden
  | StatusCodes.NotFound
  | StatusCodes.TooManyRequests;

export type InternalErrorStatuses =
  | StatusCodes.InternalServerError
  | StatusCodes.BadGateway
  | StatusCodes.ServiceUnavailable
  | StatusCodes.GatewayTimeout;
