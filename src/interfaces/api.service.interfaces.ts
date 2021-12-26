import { AxiosResponse } from 'axios';
import IResponse from '@models/response.model';

export interface IAPIService {
  get<T, R = AxiosResponse<T>>(baseURL: string, queryParams?: Record<string, string>): Promise<R>;
}

export interface IResponseWithStatusCode {
  response: IResponse<void>;
  statusCode: number;
}
