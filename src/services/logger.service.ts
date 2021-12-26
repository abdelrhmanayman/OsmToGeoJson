import winston, { Logger } from 'winston';

class LoggerService {
  public logger: Logger;
  private options: winston.LoggerOptions = {
    transports: [
      new winston.transports.Console({
        level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
      }),
      new winston.transports.File({ filename: 'debug.log', level: 'debug' }),
    ],
  };

  constructor() {
    this.logger = winston.createLogger(this.options);
    if (process.env.NODE_ENV !== 'production') {
      this.logger.debug('Logging initialized at debug level');
    }
  }
}

export default new LoggerService().logger;
