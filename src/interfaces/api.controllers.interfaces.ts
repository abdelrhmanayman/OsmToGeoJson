import { ValidatedRequest, ValidatedRequestSchema } from 'express-joi-validation';
import { NextFunction, Response } from 'express';

export type IControllerFunction<T extends ValidatedRequestSchema> = (
  req: ValidatedRequest<T>,
  res: Response,
  next: NextFunction,
) => void;
