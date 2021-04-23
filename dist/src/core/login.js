'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.Login = void 0;
const cookie_1 = require('cookie');
const lodash_1 = require('lodash');
const config_1 = require('../../config');
const parseCookies = cookies =>
  cookies.reduce((res, c) => {
    let parsedCookie = cookie_1.parse(c);
    parsedCookie = lodash_1.pickBy(parsedCookie, (v, k) => k === Object.keys(parsedCookie)[0]);
    return lodash_1.merge(res, parsedCookie);
  }, {});
class Login {
  constructor({ client }) {
    this.client = client;
  }
  setRequestHeaders({ cookies }) {
    const cookieStr = lodash_1.reduce(cookies, (res, v, k) => `${res}${k}="${v}"; `, '');
    this.client.request.setHeaders({
      ...config_1.requestHeaders,
      cookie: cookieStr,
      'csrf-token': cookies.JSESSIONID,
    });
  }
  async userPass({ username, password, useCache = true }) {
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
    const sessionId = parseCookies(anonymousAuthResponse.headers['set-cookie']).JSESSIONID;
    const authRes = await this.client.request.auth.authenticateUser({ username, password, sessionId });
    const parsedCookies = parseCookies(authRes.headers['set-cookie']);
    if (cache) {
      cache.set(username, parsedCookies);
    }
    this.setRequestHeaders({ cookies: parsedCookies });
    return this.client;
  }
}
exports.Login = Login;
//# sourceMappingURL=login.js.map
