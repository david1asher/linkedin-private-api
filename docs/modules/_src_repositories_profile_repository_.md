**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / "src/repositories/profile.repository"

# Module: "src/repositories/profile.repository"

## Index

### Classes

- [ProfileRepository](../classes/_src_repositories_profile_repository_.profilerepository.md)

### Functions

- [getProfilesFromResponse](_src_repositories_profile_repository_.md#getprofilesfromresponse)

## Functions

### getProfilesFromResponse

▸ `Const`**getProfilesFromResponse**<T\>(`response`: T): Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>

_Defined in [src/repositories/profile.repository.ts:23](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/repositories/profile.repository.ts#L23)_

#### Type parameters:

| Name | Type                                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `T`  | { included: ([LinkedInMiniProfile](../interfaces/_src_entities_linkedin_mini_profile_entity_.linkedinminiprofile.md) \| { $type: string })[] } |

#### Parameters:

| Name       | Type |
| ---------- | ---- |
| `response` | T    |

**Returns:** Record<[ProfileId](_src_entities_mini_profile_entity_.md#profileid), [MiniProfile](../interfaces/_src_entities_mini_profile_entity_.miniprofile.md)\>
