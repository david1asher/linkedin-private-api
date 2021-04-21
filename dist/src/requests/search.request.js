"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRequest = void 0;
class SearchRequest {
    constructor({ request }) {
        this.request = request;
    }
    searchBlended({ skip = 0, limit = 10, filters = {}, keywords, }) {
        const queryParams = {
            filters,
            count: limit,
            ...(keywords ? { keywords: encodeURIComponent(keywords) } : {}),
            origin: 'TYPEAHEAD_ESCAPE_HATCH',
            q: 'all',
            queryContext: {
                spellCorrectionEnabled: true,
                relatedSearchesEnabled: true,
            },
            start: skip,
        };
        return this.request.get('search/blended', {
            params: queryParams,
        });
    }
}
exports.SearchRequest = SearchRequest;
//# sourceMappingURL=search.request.js.map