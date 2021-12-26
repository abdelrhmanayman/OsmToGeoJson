import axios, { AxiosResponse } from 'axios';

class APIService {
  public get<T, R = AxiosResponse<T>>(baseURL: string, queryParams?: Record<string, string>): Promise<R> {
    return axios.get(baseURL, { params: queryParams });
  }
}

export default new APIService();
