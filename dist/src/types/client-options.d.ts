import { AxiosRequestConfig } from 'axios-https-proxy-fix';
import { AuthCookies } from './auth-cookies';
import { Country } from '../types';
export interface Session {
  cookies: AuthCookies;
  country?: Country;
}
export interface ClientOptions {
  requestConfig?: AxiosRequestConfig;
  sessionCache?: {
    get: (username: string) => Promise<AuthCookies>;
    set: (username: string, session: AuthCookies) => Promise<AuthCookies>;
  };
}
