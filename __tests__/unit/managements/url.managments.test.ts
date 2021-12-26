import mapManagements from '@managements/map.managements';
import ApiService from '@services/api.service';
import { IOsmJSON } from '@interfaces/map.interfaces';
import { DefaultConfigs } from '@utils/configs';

describe('map management', () => {

  it('getOSMData, it should get the osm json data for the provided bbox data', () => {
    const getOSMDataMock = jest.spyOn(ApiService, 'get').mockImplementation((baseUrl: string, params: any) => {
      return {} as any;
    });
    const result = mapManagements.getOSMData('11.54,48.14,11.543,50.265');
    expect(getOSMDataMock).toBeCalledWith(DefaultConfigs.OSM_API_BASE_URL, { bbox: '11.54,48.14,11.543,50.265' });
    expect(result).toBeTruthy();
  });

  it('convertOSMToGeoJSON, It should convert the osm data to geoJson', () => {

    const result = mapManagements.convertOSMToGeoJSON(mockOSMData);
    expect(result).toBeTruthy();
  });


});

const mockOSMData: IOsmJSON = {
  'version': '0.6',
  'generator': 'CGImap 0.8.1 (6263 thorn-01.openstreetmap.org)',
  'copyright': 'OpenStreetMap and contributors',
  'attribution': 'http://www.openstreetmap.org/copyright',
  'license': 'http://opendatacommons.org/licenses/odbl/1-0/',
  'elements': [
    {
      'type': 'node',
      'id': 35352001,
      'lat': 50.2106234,
      'lon': 8.5856189,
      'timestamp': '2012-12-08T23:04:02Z',
      'version': 6,
      'changeset': 14206963,
      'user': 'HoloDuke',
      'uid': 75317,
    },
    {
      'type': 'node',
      'id': 35352063,
      'lat': 50.2121617,
      'lon': 8.5867523,
      'timestamp': '2018-11-21T20:52:44Z',
      'version': 4,
      'changeset': 64755187,
      'user': 'Jonaes',
      'uid': 4433367,
    },
  ],
};
