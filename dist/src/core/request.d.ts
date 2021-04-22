import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios-https-proxy-fix';
declare type ConfigFullResponse = AxiosRequestConfig & {
  fullResponse?: true;
};
declare type ConfigNonFullResponse = AxiosRequestConfig & {
  fullResponse?: false;
};
export declare class Request {
  request: AxiosInstance;
  constructor(config?: AxiosRequestConfig);
  setHeaders(headers: Record<string, string>): void;
  get<T>(url: string, reqConfig?: ConfigNonFullResponse): Promise<T>;
  get<T>(url: string, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
  post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigNonFullResponse): Promise<T>;
  post<T>(url: string, data: string | Record<string, unknown>, reqConfig?: ConfigFullResponse): Promise<AxiosResponse<T>>;
}
export {};
