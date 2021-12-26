import { NextFunction, Request, Response } from 'express';

import { ERROR_MESSAGES, RESPONSE_MESSAGES, STATUS_CODES } from '@utils/constants';
import APIError from '@models/apiError.model';

export default (req: Request, res: Response, next: NextFunction): void => {
  next(new APIError(ERROR_MESSAGES.UNKNOWN_ROUTE, STATUS_CODES.NOT_FOUND, true, RESPONSE_MESSAGES.UNKNOWN_ROUTE));
};
