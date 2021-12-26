import { STATUS_CODES } from '@utils/constants';

export class BaseError extends Error {
  public readonly name: string;
  public readonly httpCode: STATUS_CODES;
  public readonly isOperational: boolean;

  constructor(name: string, httpCode: STATUS_CODES, description: string, isOperational: boolean) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);

    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}
