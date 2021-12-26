import { IMapManagement, IOsmJSON } from '@interfaces/map.interfaces';
import { IAPIService } from '@interfaces/api.service.interfaces';
import APIService from '@services/api.service';
import { RESPONSE_MESSAGES, STATUS_CODES } from '@utils/constants';
import osmToGeoJson from 'osmtogeojson';
import { FeatureCollection, GeometryObject } from 'geojson';
import APIError from '@models/apiError.model';
import { DefaultConfigs } from '@utils/configs';

class mapManagements implements IMapManagement {
  constructor(private apiService: IAPIService = APIService) {
  }

  public async getOSMData(bboxData: string): Promise<IOsmJSON> {
    try {
      const osmApiUrl: string = process.env.OSM_API_BASE_URL || DefaultConfigs.OSM_API_BASE_URL;
      const response = await this.apiService.get<IOsmJSON>(osmApiUrl, { bbox: bboxData });
      return response.data;
    } catch (error) {
      throw new APIError(RESPONSE_MESSAGES.OPERATION_FAILED, STATUS_CODES.BAD_REQUEST, true, (error as any)?.response?.data);
    }

  }

  public convertOSMToGeoJSON(osmData: IOsmJSON): FeatureCollection<GeometryObject> {
    return osmToGeoJson(osmData);
  }

}

export default new mapManagements();
