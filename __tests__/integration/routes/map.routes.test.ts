import { agent as request } from 'supertest';
import express from 'express';
import { Server } from 'http';

import errorHandler from '@middlewares/errorHandler.middleware';
import router from '@routes/index';
import ApiService from '@services/api.service';
import mapManagements from '@managements/map.managements';
import { IOsmJSON } from '@interfaces/map.interfaces';
import { DefaultConfigs } from '@utils/configs';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);
app.use(errorHandler);
jest.setTimeout(15000);

describe('Url routes', () => {
  let server: Server;
  beforeAll(() => {
    server = app.listen();
    return server;
  });
  afterAll(() => {
    return server.close();
  });

  it('/map, it should get bbox data and return geojson information', (done: any) => {
    const getOSMDataMock = jest.spyOn(ApiService, 'get').mockImplementation((baseUrl: string, params: any) => {
      return { data: {} } as any;
    });
    const convertToGeoJsonMock = jest.spyOn(mapManagements, 'convertOSMToGeoJSON').mockImplementation((osmData: IOsmJSON) => {
      return {} as any;
    });
    request(app)
      .get('/api/map?bbox=11.54,48.14,11.543,50.265')
      .send()
      .end((err, response) => {
        expect(getOSMDataMock).toBeCalledWith(DefaultConfigs.OSM_API_BASE_URL, { bbox: '11.54,48.14,11.543,50.265' });
        expect(convertToGeoJsonMock).toBeCalledWith({});
        expect(response.statusCode).toEqual(200);
        expect(response.body.payload).toBeTruthy();
        done();
      });
  });

});
