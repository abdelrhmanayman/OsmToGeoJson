import { NextFunction, Response } from 'express';
import { ValidatedRequest } from 'express-joi-validation';
import { FeatureCollection, GeometryObject } from 'geojson';

import mapManagement from '@managements/map.managements';
import { IControllerFunction } from '@interfaces/api.controllers.interfaces';
import { GetGeoCoordinatesRequestSchema, IMapControllers, IMapManagement } from '@interfaces/map.interfaces';
import IResponse from '@models/response.model';
import { STATUS_CODES } from '@utils/constants';


class MapControllers implements IMapControllers {
  constructor(private management: IMapManagement = mapManagement) {
  }

  getGeoJSONController(): IControllerFunction<GetGeoCoordinatesRequestSchema> {
    return async (req: ValidatedRequest<GetGeoCoordinatesRequestSchema>, res: Response, next: NextFunction) => {
      try {
        const { bbox } = req.query;
        const osmData = await this.management.getOSMData(bbox);
        const geoJSONData = this.management.convertOSMToGeoJSON(osmData);
        const response: IResponse<FeatureCollection<GeometryObject>> = {
          payload: geoJSONData,
        };
        res.status(STATUS_CODES.SUCCESS).json(response);
      } catch (error) {
        next(error);
      }
    };
  }
}

export default new MapControllers();
