import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import rateLimiter from 'express-rate-limit';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import { Server } from 'http';
import dotenv from 'dotenv';

import applicationRoutes from './routes';
import logger from './services/logger.service';
import errorHandler from './middlewares/errorHandler.middleware';
import unknownRoutesMiddleware from './middlewares/unknownRoutes.middleware';
import { Constants } from './utils/constants';
import { DefaultConfigs } from './utils/configs';

class Application {
  public serverStatus: boolean;
  private app: Express;
  private _server: Server;

  constructor() {
    dotenv.config();
    this.app = express();
    this.setup();
  }

  public startServer = async (): Promise<void> => {
    const port = process.env.PORT || DefaultConfigs.DEFAULT_PORT;

    this._server = await this.app.listen(port);
    this.serverStatus = true;
    logger.info(`server is running on port ${port}`);
  };

  public initiateProcessListeners() {
    process.on('exit', this.closeServer);
    process.on('SIGINT', this.closeServer);
    process.on('SIGUSR1', this.closeServer);
    process.on('SIGUSR2', this.closeServer);
    process.on('uncaughtException', this.closeServer);
  }

  public closeServer = (): void => {
    if (this.serverStatus) {
      this.serverStatus = false;
      this._server?.close();
      logger.info(`server is closed!`);
    }
  };

  private setup() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.static(DefaultConfigs.ASSETS_DIR));
    this.app.use(morgan('tiny'));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(rateLimiter(DefaultConfigs.RATE_LIMITER_OPTIONS));
    this.app.use(DefaultConfigs.API_BASE_ROUTE, applicationRoutes);
    this.app.use(
      DefaultConfigs.DOCS_API_ROUTE,
      swaggerUi.serve,
      swaggerUi.setup(undefined, DefaultConfigs.SWAGGER_CONFIG),
    );
    this.app.use(Constants.ALL_PATHS, unknownRoutesMiddleware);
    this.app.use(errorHandler);
  }
}

export default new Application();
