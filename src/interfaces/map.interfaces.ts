import { ContainerTypes, ValidatedRequestSchema } from 'express-joi-validation';
import { IControllerFunction } from './api.controllers.interfaces';
import { FeatureCollection, GeometryObject } from 'geojson';

export interface GetGeoCoordinatesRequestSchema extends ValidatedRequestSchema {
  [ContainerTypes.Query]: {
    bbox: string;
  };
}

export interface IMapControllers {
  getGeoJSONController(): IControllerFunction<GetGeoCoordinatesRequestSchema>
}

export interface IOsmJSON {
  version: string,
  generator: string,
  copyright: string,
  attribution: string,
  license: string,
  elements: IElement[]
}

interface IElement {
  type: string,
  id: number,
  lat: number,
  lon: number,
  timestamp: string,
  version: number,
  changeset: number,
  user: string,
  uid: number
}

export interface IMapManagement {
  getOSMData(bboxData: string): Promise<IOsmJSON>;

  convertOSMToGeoJSON(osmData: IOsmJSON): FeatureCollection<GeometryObject>
}
