import { parse as parseCookie } from 'cookie';
import { merge, pickBy, reduce } from 'lodash';

import { requestHeaders } from '../../config';
import { AnonymousCookies } from '../types/anonymous-cookies';
import { AuthCookies } from '../types/auth-cookies';
import { Client } from './client';

const parseCookies = <T>(cookies: string[]): Partial<T> =>
  cookies.reduce((res, c) => {
    let parsedCookie = parseCookie(c);

    parsedCookie = pickBy(parsedCookie, (v, k) => k === Object.keys(parsedCookie)[0]);

    return merge(res, parsedCookie);
  }, {});

export class Login {
  private client: Client;

  constructor({ client }: { client: Client }) {
    this.client = client;
  }

  private setRequestHeaders({ cookies }: { cookies: AuthCookies }): void {
    const cookieStr = reduce(cookies, (res, v, k) => `${res}${k}="${v}"; `, '');

    this.client.request.setHeaders({
      ...requestHeaders,
      cookie: cookieStr,
      'csrf-token': cookies.JSESSIONID!,
    });
  }

  async userPass({
    username,
    password,
    useCache = true,
  }: {
    username: string;
    password?: string;
    useCache?: boolean;
  }): Promise<Client> {
    let cache;

    if (useCache && this.client.options.sessionCache) {
      cache = this.client.options.sessionCache;
      const cookies = await cache.get(username);

      if (cookies) {
        this.setRequestHeaders({ cookies });

        return this.client;
      }
    }

    if (!password) {
      throw new TypeError('password is required for login');
    }

    const anonymousAuthResponse = await this.client.request.auth.getAnonymousAuth();

    const sessionId = parseCookies<AnonymousCookies>(anonymousAuthResponse.headers['set-cookie']).JSESSIONID!;

    const authRes = await this.client.request.auth.authenticateUser({ username, password, sessionId });

    const parsedCookies = parseCookies<AuthCookies>(authRes.headers['set-cookie']);

    if (cache) {
      cache.set(username, parsedCookies);
    }

    this.setRequestHeaders({ cookies: parsedCookies });

    return this.client;
  }
}
