import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios-https-proxy-fix';
import { URL } from 'url';

import { linkedinApiUrl } from '../../config';
import { paramsSerializer } from '../utils/paramsSerializer';

const buildUrl = (url: string) => new URL(url, linkedinApiUrl).toString();

type ConfigFullResponse = AxiosRequestConfig & { fullResponse?: true };
type ConfigNonFullResponse = AxiosRequestConfig & { fullResponse?: false };

export class Request {
  request: AxiosInstance;

  constructor(config: AxiosRequestConfig = {}) {
    this.request = axios.create({
      paramsSerializer,
      withCredentials: true,
      ...config,
    });
  }

  setHeaders(headers: Record<string, string>): void {
    this.request.defaults.headers = headers;
  }

  async get<T>(url: string, reqConfig?: ConfigNonFullResponse): Promise<T>;
  async get<T>(url: string, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
  async get<T>(url: string, reqConfig?: ConfigFullResponse | ConfigNonFullResponse): Promise<T | AxiosResponse<T>> {
    const response = await this.request.get<T>(buildUrl(url), reqConfig);

    return reqConfig?.fullResponse ? response : response.data;
  }

  async post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigNonFullResponse): Promise<T>;
  async post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
  async post<T>(
    url: string,
    data: string | Record<string, unknown>,
    reqConfig?: ConfigFullResponse | ConfigNonFullResponse,
  ): Promise<T | AxiosResponse<T>> {
    const response = await this.request.post<T>(buildUrl(url), data, reqConfig);

    return reqConfig?.fullResponse ? response : response.data;
  }
}
