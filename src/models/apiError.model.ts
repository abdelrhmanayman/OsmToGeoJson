import { BaseError } from './baseError.model';
import { RESPONSE_MESSAGES, STATUS_CODES } from '@utils/constants';

export default class APIError extends BaseError {
  constructor(
    name: string,
    httpCode: STATUS_CODES = STATUS_CODES.INTERNAL_SERVER_ERROR,
    isOperational: boolean,
    description: string = RESPONSE_MESSAGES.INTERNAL,
  ) {
    super(name, httpCode, description, isOperational);
  }
}
