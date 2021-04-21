import { LinkedInRequest } from '../core/linkedin-request';
import { GetBlendedSearchResponse } from '../responses/blended-search.reponse.get';
import { BlendedSearchFilters } from '../types/blended-search-filters';
export declare class SearchRequest {
    private request;
    constructor({ request }: {
        request: LinkedInRequest;
    });
    searchBlended({ skip, limit, filters, keywords, }: {
        skip?: number;
        limit?: number;
        filters?: BlendedSearchFilters;
        keywords?: string;
    }): Promise<GetBlendedSearchResponse>;
}
