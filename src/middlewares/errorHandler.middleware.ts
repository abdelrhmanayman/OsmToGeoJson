import IResponse from '@models/response.model';
import { BaseError } from '@models/baseError.model';
import { NextFunction, Request, Response } from 'express';
import { ERROR_MESSAGES, RESPONSE_MESSAGES, STATUS_CODES } from '@utils/constants';
import logger from '@services/logger.service';
import { IResponseWithStatusCode } from '@interfaces/api.service.interfaces';

export default (error: BaseError | Error, req: Request, res: Response, next: NextFunction): void => {

  const { response, statusCode } = getResponseWithStatusCode(error);
  res.statusCode = statusCode;
  res.json(response);
  handleError(error);
  next();
};

const getResponseWithStatusCode = (error: BaseError | Error): IResponseWithStatusCode => {
  const response: IResponse<void> = {};
  let statusCode: number;
  if (isTrustedError(error)) {
    response.error = error.name;
    response.message = error.message;
    statusCode = (error as BaseError).httpCode;
  } else {
    response.error = ERROR_MESSAGES.INTERNAL;
    response.message = RESPONSE_MESSAGES.INTERNAL;
    statusCode = STATUS_CODES.INTERNAL_SERVER_ERROR;
  }
  return { response, statusCode };
};

const isTrustedError = (error: Error): boolean => error instanceof BaseError && error.isOperational;
const handleError = (error: Error): void => {
  if (error) logger.error(error.message);
};
