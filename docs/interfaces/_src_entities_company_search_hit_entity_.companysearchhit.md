**[linkedin-private-api](../README.md)**

> [Globals](../globals.md) / ["src/entities/company-search-hit.entity"](../modules/_src_entities_company_search_hit_entity_.md) / CompanySearchHit

# Interface: CompanySearchHit

## Hierarchy

- [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md)

  ↳ **CompanySearchHit**

## Index

### Properties

- [$type](_src_entities_company_search_hit_entity_.companysearchhit.md#$type)
- [\*badges](_src_entities_company_search_hit_entity_.companysearchhit.md#*badges)
- [company](_src_entities_company_search_hit_entity_.companysearchhit.md#company)
- [headless](_src_entities_company_search_hit_entity_.companysearchhit.md#headless)
- [headline](_src_entities_company_search_hit_entity_.companysearchhit.md#headline)
- [image](_src_entities_company_search_hit_entity_.companysearchhit.md#image)
- [memberDistance](_src_entities_company_search_hit_entity_.companysearchhit.md#memberdistance)
- [nameMatch](_src_entities_company_search_hit_entity_.companysearchhit.md#namematch)
- [navigationUrl](_src_entities_company_search_hit_entity_.companysearchhit.md#navigationurl)
- [publicIdentifier](_src_entities_company_search_hit_entity_.companysearchhit.md#publicidentifier)
- [secondaryTitle](_src_entities_company_search_hit_entity_.companysearchhit.md#secondarytitle)
- [socialProofText](_src_entities_company_search_hit_entity_.companysearchhit.md#socialprooftext)
- [subline](_src_entities_company_search_hit_entity_.companysearchhit.md#subline)
- [targetUrn](_src_entities_company_search_hit_entity_.companysearchhit.md#targeturn)
- [title](_src_entities_company_search_hit_entity_.companysearchhit.md#title)
- [trackingId](_src_entities_company_search_hit_entity_.companysearchhit.md#trackingid)
- [trackingUrn](_src_entities_company_search_hit_entity_.companysearchhit.md#trackingurn)
- [type](_src_entities_company_search_hit_entity_.companysearchhit.md#type)

## Properties

### $type

• **$type**: \"com.linkedin.voyager.search.SearchHitV2\"

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[$type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#$type)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:5](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L5)_

---

### \*badges

• **\*badges**: string

*Inherited from [LinkedInSearchHit](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[*badges](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#_badges)_

_Defined in [src/entities/linkedin-search-hit.entity.ts:6](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L6)_

---

### company

• **company**: [MiniCompany](_src_entities_mini_company_entity_.minicompany.md)

_Defined in [src/entities/company-search-hit.entity.ts:5](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/company-search-hit.entity.ts#L5)_

---

### headless

• **headless**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[headless](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headless)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:7](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L7)_

---

### headline

• **headline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[headline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#headline)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:8](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L8)_

---

### image

• **image**: [LinkedInImageViewModel](_src_entities_linkedin_image_view_model_entity_.linkedinimageviewmodel.md)

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[image](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#image)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:9](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L9)_

---

### memberDistance

• **memberDistance**: { $type: \"com.linkedin.voyager.common.MemberDistance\" ; value: string }

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[memberDistance](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#memberdistance)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:10](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L10)_

#### Type declaration:

| Name    | Type                                           |
| ------- | ---------------------------------------------- |
| `$type` | \"com.linkedin.voyager.common.MemberDistance\" |
| `value` | string                                         |

---

### nameMatch

• **nameMatch**: boolean

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[nameMatch](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#namematch)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:14](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L14)_

---

### navigationUrl

• **navigationUrl**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[navigationUrl](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#navigationurl)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:15](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L15)_

---

### publicIdentifier

• **publicIdentifier**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[publicIdentifier](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#publicidentifier)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:16](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L16)_

---

### secondaryTitle

• **secondaryTitle**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[secondaryTitle](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#secondarytitle)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:17](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L17)_

---

### socialProofText

• **socialProofText**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[socialProofText](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#socialprooftext)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:18](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L18)_

---

### subline

• **subline**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[subline](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#subline)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:19](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L19)_

---

### targetUrn

• **targetUrn**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[targetUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#targeturn)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:20](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L20)_

---

### title

• **title**: [LinkedInTextViewModel](_src_entities_linkedin_text_view_model_entity_.linkedintextviewmodel.md)

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[title](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#title)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:21](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L21)_

---

### trackingId

• **trackingId**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[trackingId](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingid)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:22](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L22)_

---

### trackingUrn

• **trackingUrn**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[trackingUrn](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#trackingurn)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:23](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L23)_

---

### type

• **type**: string

_Inherited from [LinkedInSearchHit](\_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md).[type](_src_entities_linkedin_search_hit_entity_.linkedinsearchhit.md#type)\_

_Defined in [src/entities/linkedin-search-hit.entity.ts:24](https://github.com/david1asher/linkedin-private-api/blob/8f509eb/src/entities/linkedin-search-hit.entity.ts#L24)_
