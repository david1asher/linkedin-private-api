'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.Request = void 0;
const axios_https_proxy_fix_1 = __importDefault(require('axios-https-proxy-fix'));
const url_1 = require('url');
const config_1 = require('../../config');
const paramsSerializer_1 = require('../utils/paramsSerializer');
const buildUrl = url => new url_1.URL(url, config_1.linkedinApiUrl).toString();
class Request {
  constructor(config = {}) {
    this.request = axios_https_proxy_fix_1.default.create({
      paramsSerializer: paramsSerializer_1.paramsSerializer,
      withCredentials: true,
      ...config,
    });
  }
  setHeaders(headers) {
    this.request.defaults.headers = headers;
  }
  async get(url, reqConfig) {
    const response = await this.request.get(buildUrl(url), reqConfig);
    return (reqConfig === null || reqConfig === void 0 ? void 0 : reqConfig.fullResponse) ? response : response.data;
  }
  async post(url, data, reqConfig) {
    const response = await this.request.post(buildUrl(url), data, reqConfig);
    return (reqConfig === null || reqConfig === void 0 ? void 0 : reqConfig.fullResponse) ? response : response.data;
  }
}
exports.Request = Request;
//# sourceMappingURL=request.js.map
