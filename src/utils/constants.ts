export class Constants {
  public static readonly ALL_PATHS: string = '*';
  public static readonly COMMA_SEPARATED_NUMBERS_REGEX = /^(([0-9]+)(,(?=[0-9]))?)+$/;
}

export enum STATUS_CODES {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  SUCCESS = 200,
}

export enum ERROR_MESSAGES {
  UNKNOWN_ROUTE = 'Unknown route',
  NOT_FOUND = 'Not Found',
  FAILED = 'Failed',
  INTERNAL = 'Internal server error',
}

export enum RESPONSE_MESSAGES {
  OPERATION_FAILED = 'Operation failed, Please try again!',
  UNKNOWN_ROUTE = 'Please think of another route!',
  INTERNAL = 'Something went wrong, Please try again!',
}
