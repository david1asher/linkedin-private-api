'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.ProfileRepository = exports.getProfilesFromResponse = void 0;
const lodash_1 = require('lodash');
const linkedin_company_entity_1 = require('../entities/linkedin-company.entity');
const linkedin_mini_profile_entity_1 = require('../entities/linkedin-mini-profile.entity');
const linkedin_profile_entity_1 = require('../entities/linkedin-profile.entity');
const getProfilePictureUrls = picture => {
  return lodash_1.map(
    picture === null || picture === void 0 ? void 0 : picture.artifacts,
    artifact => `${picture === null || picture === void 0 ? void 0 : picture.rootUrl}${artifact.fileIdentifyingUrlPathSegment}`,
  );
};
const transformMiniProfile = miniProfile => {
  return {
    ...miniProfile,
    pictureUrls: getProfilePictureUrls(miniProfile.picture),
    profileId: (miniProfile.entityUrn || '').replace('urn:li:fs_miniProfile:', ''),
  };
};
exports.getProfilesFromResponse = response => {
  const miniProfiles = lodash_1.filter(response.included, p => p.$type === linkedin_mini_profile_entity_1.MINI_PROFILE_TYPE);
  const transformedMiniProfiles = miniProfiles.map(miniProfile => transformMiniProfile(miniProfile));
  const newProfiles = transformedMiniProfiles.map(prof => {
    var _a, _b, _c;
    return {
      ...prof,
      memberDistance:
        (_c =
          (_b =
            (_a = response.data.elements) === null || _a === void 0
              ? void 0
              : _a.find(a => a.type === 'SEARCH_HITS').elements) === null || _b === void 0
            ? void 0
            : _b.find(a => a.publicIdentifier === prof.publicIdentifier)) === null || _c === void 0
          ? void 0
          : _c.memberDistance,
    };
  });
  return lodash_1.keyBy(newProfiles, 'profileId');
};
class ProfileRepository {
  constructor({ client }) {
    this.client = client;
  }
  async getProfile({ publicIdentifier }) {
    const response = await this.client.request.profile.getProfile({ publicIdentifier });
    const results = response.included || [];
    const profile = results.find(
      r => r.$type === linkedin_profile_entity_1.PROFILE_TYPE && r.publicIdentifier === publicIdentifier,
    );
    const company = results.find(r => r.$type === linkedin_company_entity_1.COMPANY_TYPE && profile.headline.includes(r.name));
    const pictureUrls = getProfilePictureUrls(lodash_1.get(profile, 'profilePicture.displayImageReference.vectorImage', {}));
    return {
      ...profile,
      company,
      pictureUrls,
    };
  }
  async getOwnProfile() {
    var _a;
    const response = await this.client.request.profile.getOwnProfile();
    const miniProfile =
      (_a = response === null || response === void 0 ? void 0 : response.included) === null || _a === void 0
        ? void 0
        : _a.find(r => r.$type === linkedin_mini_profile_entity_1.MINI_PROFILE_TYPE);
    if (!miniProfile) {
      return null;
    }
    return this.getProfile(miniProfile);
  }
}
exports.ProfileRepository = ProfileRepository;
//# sourceMappingURL=profile.repository.js.map
