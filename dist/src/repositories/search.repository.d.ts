import { Client } from '../core/client';
import { ProfileId } from '../entities/mini-profile.entity';
import { CompanySearchScroller } from '../scrollers/company-search.scroller';
import { PeopleSearchScroller } from '../scrollers/people-search.scroller';
import { PeopleSearchFilters } from '../types/people-search-filters';
export declare class SearchRepository {
    client: Client;
    constructor({ client }: {
        client: Client;
    });
    searchPeople({ skip, limit, filters, keywords, }?: {
        skip?: number;
        limit?: number;
        filters?: PeopleSearchFilters;
        keywords?: string;
    }): PeopleSearchScroller;
    searchCompanies({ skip, limit, keywords, }?: {
        skip?: number;
        limit?: number;
        keywords?: string;
    }): CompanySearchScroller;
    searchOwnConnections({ skip, limit, filters, keywords, }?: {
        skip?: number;
        limit?: number;
        filters?: Omit<PeopleSearchFilters, 'network'>;
        keywords?: string;
    }): PeopleSearchScroller;
    searchConnectionsOf({ profileId, skip, limit, filters, keywords, }: {
        profileId: ProfileId;
        skip?: number;
        limit?: number;
        filters?: Omit<PeopleSearchFilters, 'network' | 'connectionOf'>;
        keywords?: string;
    }): PeopleSearchScroller;
    private fetchPeople;
    private fetchCompanies;
}
