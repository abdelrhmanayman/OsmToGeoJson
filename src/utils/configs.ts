import { SwaggerUiOptions } from 'swagger-ui-express';

export class DefaultConfigs {
  public static readonly RATE_LIMITER_OPTIONS = { windowMs: 60 * 60 * 1000, max: 100 };
  public static readonly DEFAULT_PORT: number = 3002;
  public static readonly API_BASE_ROUTE = '/api';
  public static readonly DOCS_API_ROUTE = '/docs';
  public static readonly ASSETS_DIR = 'public';
  public static readonly OSM_API_BASE_URL = 'https://www.openstreetmap.org/api/0.6/map';
  public static readonly SWAGGER_CONFIG: SwaggerUiOptions = {
    swaggerOptions: {
      url: '/swagger.json',
    },
  };
}
