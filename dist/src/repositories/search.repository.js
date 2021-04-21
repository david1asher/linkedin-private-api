"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchRepository = void 0;
const lodash_1 = require("lodash");
const linkedin_mini_company_entity_1 = require("../entities/linkedin-mini-company.entity");
const company_search_scroller_1 = require("../scrollers/company-search.scroller");
const people_search_scroller_1 = require("../scrollers/people-search.scroller");
const network_enum_1 = require("../types/network.enum");
const search_result_type_enum_1 = require("../types/search-result-type.enum");
const search_type_enum_1 = require("../types/search-type.enum");
const profile_repository_1 = require("./profile.repository");
class SearchRepository {
    constructor({ client }) {
        this.client = client;
    }
    searchPeople({ skip = 0, limit = 10, filters = {}, keywords, } = {}) {
        return new people_search_scroller_1.PeopleSearchScroller({
            skip,
            limit,
            filters,
            keywords,
            fetchPeople: this.fetchPeople.bind(this),
        });
    }
    searchCompanies({ skip = 0, limit = 10, keywords, } = {}) {
        return new company_search_scroller_1.CompanySearchScroller({
            skip,
            limit,
            keywords,
            fetchCompanies: this.fetchCompanies.bind(this),
        });
    }
    searchOwnConnections({ skip = 0, limit = 10, filters = {}, keywords, } = {}) {
        return new people_search_scroller_1.PeopleSearchScroller({
            skip,
            limit,
            keywords,
            filters: { ...filters, network: network_enum_1.LinkedInNetworkType.F },
            fetchPeople: this.fetchPeople.bind(this),
        });
    }
    searchConnectionsOf({ profileId, skip = 0, limit = 10, filters = {}, keywords, }) {
        return new people_search_scroller_1.PeopleSearchScroller({
            skip,
            limit,
            keywords,
            filters: { ...filters, connectionOf: profileId, network: network_enum_1.LinkedInNetworkType.F },
            fetchPeople: this.fetchPeople.bind(this),
        });
    }
    async fetchPeople({ skip = 0, limit = 10, filters = {}, keywords, } = {}) {
        const response = await this.client.request.search.searchBlended({
            keywords,
            skip,
            limit,
            filters: { ...filters, resultType: search_type_enum_1.LinkedInSearchType.PEOPLE },
        });
        const profiles = lodash_1.keyBy(profile_repository_1.getProfilesFromResponse(response), 'entityUrn');
        const searchHits = lodash_1.flatten(response.data.elements.filter(e => e.type === search_result_type_enum_1.SearchResultType.SEARCH_HITS && e.elements).map(e => e.elements));
        return searchHits.map(searchHit => ({
            ...searchHit,
            profile: profiles[searchHit.targetUrn],
        }));
    }
    async fetchCompanies({ skip = 0, limit = 10, keywords, }) {
        const response = await this.client.request.search.searchBlended({
            skip,
            limit,
            keywords,
            filters: { resultType: search_type_enum_1.LinkedInSearchType.COMPANIES },
        });
        const companies = response.included
            .filter(entity => entity.$type === linkedin_mini_company_entity_1.MINI_COMPANY_TYPE)
            .map(company => ({
            ...company,
            companyId: company.entityUrn.replace('urn:li:fs_miniCompany:', ''),
        }));
        const companiesByUrn = lodash_1.keyBy(companies, 'entityUrn');
        const searchHits = lodash_1.flatten(response.data.elements.filter(e => e.type === search_result_type_enum_1.SearchResultType.SEARCH_HITS && e.elements).map(e => e.elements));
        return searchHits.map(searchHit => ({
            ...searchHit,
            company: companiesByUrn[searchHit.targetUrn],
        }));
    }
}
exports.SearchRepository = SearchRepository;
//# sourceMappingURL=search.repository.js.map