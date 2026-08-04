// This file is generated from spec/linkedin-postman.snapshot.json. Do not edit by hand.
import type {
  LinkedInClient,
  LinkedInRequestOptions,
  LinkedInResponse,
  RestliQueryValue,
} from "../../client.ts";

export const LINKEDIN_POSTMAN_API_VERSION = "202607";
export const LINKEDIN_POSTMAN_SOURCE_COUNT = 11;
export const LINKEDIN_POSTMAN_REQUEST_COUNT = 285;
export const LINKEDIN_POSTMAN_EXCLUDED_REQUEST_COUNT = 1;
export const linkedinExcludedOperations = [
  {
    "collection": "Content APIs",
    "name": "Get document content",
    "reason": "The official Postman request is a placeholder with no URL."
  }
] as const;

export const linkedinOperations = [
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets",
    "name": "Get a list of available Ad Targeting Facets",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingFacets",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d5a7c2b8-8e40-4ce9-bf86-ef9002cab847"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFace",
    "name": "Get all seniorities",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aseniorities&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "50a86081-816a-4714-b9f8-982a971b3afb"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
    "name": "Get all job functions",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AjobFunctions&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "efc7ad6a-1fce-4ce8-a3c2-5c60c7b6a233"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesU",
    "name": "Get all job titles (paginated)",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Atitles&fields=name,urn&start=0&count=1000&totals=false",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c265d1cb-8825-49d8-86e3-54f94b8c0013"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
    "name": "Get all skills (paginated)",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Askills&fields=name,urn&start=0&count=10000&totals=false",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c544e538-b9d8-4b3f-b33f-38a229fc7934"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
    "name": "Get all interests",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Ainterests&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b061a82b-f68e-4929-9f50-620db6a0240e"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
    "name": "Get all member behaviors",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AmemberBehaviors&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "949dbe95-9433-41e2-a726-a4501f91f416"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuery",
    "name": "Get all yearsOfExperience ranges",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AyearsOfExperienceRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "43d26886-dc3e-4d86-b9fc-7f6245ca71c2"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
    "name": "Get all age ranges",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AageRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "207003c2-0375-44ed-b3a0-53ddbf1c8e59"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacet",
    "name": "Get all industries",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aindustries&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "370ba19c-8e99-45b9-876b-6fc6278e9158"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
    "name": "Get all company revenue categories",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Arevenue&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "49d9e477-ddea-4d4c-9392-10e230f6a808"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersion",
    "name": "Get all company ranking list categories",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AcompanyCategory&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d7fa05c5-fca8-40f0-994a-e4ab16f152cb"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ",
    "name": "Get all company growth rate categories",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AgrowthRate&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "5ab2ca7d-c87a-4441-9dd8-38bfb2fbcd92"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ",
    "name": "Get all company staff count categories",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AstaffCountRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "49387ac6-2636-434e-a642-9ed17411cb82"
  },
  {
    "id": "audienceInsightsAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20s",
    "name": "Get Bing Geo locations using search typeahead",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=typeahead&query=united%20states&facet=urn%3Ali%3AadTargetingFacet%3Alocations&queryVersion=QUERY_USES_URNS&start=0&count=10",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "typeahead",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e14e5b54-f3ce-44ac-b57e-ea4b34291e63"
  },
  {
    "id": "audienceInsightsFetchAudienceInsightsWhatAreTheTopJobFunctionsAmongMembersWithProductManagementSkillsInNyPostTargetingAu",
    "name": "What are the top Job Functions among members with Product Management skills in NY?",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Fetch Audience Insights"
    ],
    "method": "POST",
    "url": "/targetingAudienceInsights?action=audienceInsights",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "audienceInsights",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e75fba00-bf72-4b04-b85a-96a72b7ad645"
  },
  {
    "id": "audienceInsightsFetchAudienceInsightsWhatTopYearOfExperienceRangesDoUsMembersWhoAreInterestedInComputerProgrammingHavePo",
    "name": "What top year of experience ranges do US members who are interested in ‘Computer Programming’ have?",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Fetch Audience Insights"
    ],
    "method": "POST",
    "url": "/targetingAudienceInsights?action=audienceInsights",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "audienceInsights",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "68b5c2af-f132-49f0-8405-25c9a7ee2d05"
  },
  {
    "id": "audienceInsightsFetchAudienceInsightsWhatAreTheTopSkillsOfSotwareEngineersInTheUsPostTargetingAudienceInsightsActionAudi",
    "name": "What are the top skills of sotware engineers in the US?",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Fetch Audience Insights"
    ],
    "method": "POST",
    "url": "/targetingAudienceInsights?action=audienceInsights",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "audienceInsights",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ab4f5965-c4a7-4b49-9e1f-ad4273d76797"
  },
  {
    "id": "audienceInsightsFetchAudienceInsightsWhatAreTheTopInterestsOfDirectorsInFinanceAndInTheUsPostTargetingAudienceInsightsAc",
    "name": "What are the top interests of Directors in Finance and in the US?",
    "collection": "Audience Insights",
    "access": "restricted",
    "folder": [
      "Fetch Audience Insights"
    ],
    "method": "POST",
    "url": "/targetingAudienceInsights?action=audienceInsights",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "audienceInsights",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e627e143-e258-4ea7-a116-0c3945a124e8"
  },
  {
    "id": "audiencesUseCasesStreamingCompaniesAccountTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearch",
    "name": "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Companies - Account Targeting"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "68e1d7e7-c1ad-499b-a9df-88250e18b4e9"
  },
  {
    "id": "audiencesUseCasesStreamingCompaniesAccountTargeting4FetchExistingAudiencesForChosenAdAccountsGetDmpSegmentsQAccountAccou",
    "name": "4. Fetch existing Audiences for chosen Ad Accounts",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Companies - Account Targeting"
    ],
    "method": "GET",
    "url": "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
    "variables": [
      "dmp_partner_platform_enum",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The api call [fetches all DMP segments for a specific ad account](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#find-dmp-segments-by-account) and your designated sourcePlatform ENUM. Display match rate, audience size, and segment status to the user. Match Rate is calculated by rounding matchedCount / inputCount. Review our online documentation for more information on [audienceSize vs matchedCount](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-destinations?tabs=http#differences-between-audience-size-and-matched-count-fields).",
    "postmanId": "68424ff3-65cd-401d-af94-a35d67a9c066"
  },
  {
    "id": "audiencesUseCasesStreamingCompaniesAccountTargeting6CreateACompanyDmpSegmentPostDmpSegments",
    "name": "6. Create a Company DMP Segment",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Companies - Account Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This call [creates a DMP segment](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#create-dmp-segment) named \"DMP Segment 1\" tied to the sponsored account the user chose in step 2. The sourcePlatform is an ENUM value that is provided by your LinkedIn contact after you have been granted access to the Audience APIs. **NOTE:** there must be at least a 5 second delay between step 2 (creating the segment) and step 3 (streaming company data) or the segment may not be populated.",
    "postmanId": "e88ce7fb-9e15-47ba-b027-783d1e33267f"
  },
  {
    "id": "audiencesUseCasesStreamingCompaniesAccountTargeting7StreamCompanyDataAddOrRemoveMultipleCompaniesPostDmpSegmentsCompanyS",
    "name": "7. Stream company data - add or remove multiple companies",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Companies - Account Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments/{company_segment_id}/companies",
    "variables": [
      "company_segment_id"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example adds multiple companies to the DMP segment created in step 2. To see what other fields can also be added/removed, review the [schema section](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-companies?tabs=http#add-or-remove-a-company) of our online documentation. The more information on a company that is provided, the better chance of a higher match rate.",
    "postmanId": "b7367f10-8925-4b1c-9624-c94777c8a00f"
  },
  {
    "id": "audiencesUseCasesStreamingCompaniesAccountTargeting8MonitorStatusOfTheCompanyDmpSegmentsGetDmpSegmentsQAccountAccountUrn",
    "name": "8. Monitor Status of the Company DMP Segments",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Companies - Account Targeting"
    ],
    "method": "GET",
    "url": "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
    "variables": [
      "dmp_partner_platform_enum",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The api call [fetches all DMP segments for a specific ad account](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#find-dmp-segments-by-account) and your designated sourcePlatform ENUM. After the initial processing, which could take up to 48 hours, any subsequent addition or removal of companies happen in near real-time. The API should be periodically polled to fetch the latest match rate, audience size, and segment status. Match Rate is calculated by rounding matchedCount / inputCount. Review our online documentation for more information on [audienceSize vs matchedCount](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-destinations?tabs=http#differences-between-audience-size-and-matched-count-fields).",
    "postmanId": "7919b3f1-05cc-4909-98cd-e4865b925bdd"
  },
  {
    "id": "audiencesUseCasesStreamingUsersContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchType",
    "name": "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Users - Contact Targeting"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View [Search for Accounts](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts) documentation for more information. This API call pulls back Ad Accounts that the member has access to where the status = ACTIVE, type = BUSINESS, and test = false (NOT a test Ad Account). Learn more about Test Ad Accounts [here](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#working-with-test-ad-accounts). For testing purposes, if you wish to use this example api to pull back a Test Ad Account, simply remove `test:false` from the search parameter. **3\\. Ask the user to select the Ad Account where the audience should be created or dynamically updated**",
    "postmanId": "1b96bc57-983b-4b15-8e17-43da3104bfca"
  },
  {
    "id": "audiencesUseCasesStreamingUsersContactTargeting4FetchExistingAudiencesForTheChosenAdAccountGetDmpSegmentsQAccountAccount",
    "name": "4. Fetch existing Audiences for the chosen Ad Account",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Users - Contact Targeting"
    ],
    "method": "GET",
    "url": "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
    "variables": [
      "dmp_partner_platform_enum",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The api call [fetches all DMP segments for a specific ad account](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#find-dmp-segments-by-account) and your designated sourcePlatform ENUM. Display match rate, audience size, and segment status to the user. Match Rate is calculated by rounding matchedCount / inputCount. Review our online documentation for more information on [audienceSize vs matchedCount](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-destinations?tabs=http#differences-between-audience-size-and-matched-count-fields). **5\\. Allow the user to choose if they want to create a new Audience or update an existing one**",
    "postmanId": "e2aacd72-e1e7-4f21-b2f9-14fa9dde0dd0"
  },
  {
    "id": "audiencesUseCasesStreamingUsersContactTargeting6CreateAUserDmpSegmentSkipThisStepIfTheUserChoseToUpdateAnExistingAudienc",
    "name": "6. Create a User DMP segment (skip this step if the user chose to update an existing Audience)",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Users - Contact Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This call [creates a DMP segment](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#create-dmp-segment) named \"DMP Segment 2\" for users to be streamed to. The sourcePlatform is an ENUM value that is provided by your LinkedIn contact after you have been granted access to the Audience APIs. **NOTE:** there must be at least a 5 second delay between step 2 (creating the segment) and step 3 (streaming user data) or the segment may not be populated.",
    "postmanId": "5bc31402-ab45-4123-b8d5-de019c25ef86"
  },
  {
    "id": "audiencesUseCasesStreamingUsersContactTargeting7StreamUserDataAddOrRemoveMultipleUsersPostDmpSegmentsUserSegmentIdUsers",
    "name": "7. Stream user data - add or remove multiple users",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Users - Contact Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments/{user_segment_id}/users",
    "variables": [
      "user_segment_id"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example adds multiple users to the DMP segment created in step 2. To see what other fields can also be added/removed, review the [schema section](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-users?tabs=http#add-or-remove-a-user) of our online documentation. The more information on a user that is provided, the better chance of a higher match rate.",
    "postmanId": "80a0fead-97b2-4270-8f47-41f5231b388c"
  },
  {
    "id": "audiencesUseCasesStreamingUsersContactTargeting8MonitorStatusOfTheUserDmpSegmentsGetDmpSegmentsQAccountAccountUrn3Ali3As",
    "name": "8. Monitor Status of the User DMP Segments",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Streaming Users - Contact Targeting"
    ],
    "method": "GET",
    "url": "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
    "variables": [
      "dmp_partner_platform_enum",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The api call [fetches all DMP segments for a specific ad account](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#find-dmp-segments-by-account) and your designated sourcePlatform ENUM. After the initial processing, which could take up to 48 hours, any subsequent addition or removal of users happen in near real-time. The API should be periodically polled to fetch the latest match rate, audience size, and segment status. Match Rate is calculated by rounding matchedCount / inputCount. Review our online documentation for more information on [audienceSize vs matchedCount](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-destinations?tabs=http#differences-between-audience-size-and-matched-count-fields).",
    "postmanId": "3f1db61f-f74f-41cd-a989-03307ce63e52"
  },
  {
    "id": "audiencesUseCasesPredictiveAudiences1RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchTypeValuesListB",
    "name": "1. Retrieve the user's Ad Accounts (sponsoredAccount)",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Predictive Audiences"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "176562b5-f412-4d99-8e03-98e31d900208"
  },
  {
    "id": "audiencesUseCasesPredictiveAudiences2CreateAPredictiveAudienceDmpSegmentPostDmpSegments",
    "name": "2. Create a Predictive Audience DMP Segment",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Predictive Audiences"
    ],
    "method": "POST",
    "url": "/dmpSegments",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This call [creates a DMP segment](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#create-dmp-segment) named \"DMP Segment 1\" tied to the sponsored account the user chose in step 2.",
    "postmanId": "41eb5a1f-275a-4959-9328-8ca4d02cc1e4"
  },
  {
    "id": "audiencesUseCasesPredictiveAudiences3CreatePredictiveAudiencePostDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudience",
    "name": "3. Create Predictive Audience",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Predictive Audiences"
    ],
    "method": "POST",
    "url": "/dmpSegments/{pa_dmp_segment_id}/businessObjectiveBasedAudiences",
    "variables": [
      "pa_dmp_segment_id"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example created a predictive audience within the DMP segment created in step 2.",
    "postmanId": "82eec0d8-123a-471d-9307-a14de82d808c"
  },
  {
    "id": "audiencesUseCasesPredictiveAudiences4RetrieveThePredictiveAudienceGetDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudi",
    "name": "4. Retrieve the Predictive Audience",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Predictive Audiences"
    ],
    "method": "GET",
    "url": "/dmpSegments/{pa_dmp_segment_id}/businessObjectiveBasedAudiences/{predictive_audience_id}",
    "variables": [
      "pa_dmp_segment_id",
      "predictive_audience_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "73fa4880-a441-4622-9ad1-c1e5a63317e0"
  },
  {
    "id": "audiencesUseCasesCsvListUploadAccountContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSear",
    "name": "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "CSV list upload - Account & Contact Targeting"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View [Search for Accounts](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts) documentation for more information. This API call pulls back Ad Accounts that the member has access to where the status = ACTIVE, type = BUSINESS, and test = false (NOT a test Ad Account). Learn more about Test Ad Accounts [here](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#working-with-test-ad-accounts). For testing purposes, if you wish to use this example api to pull back a Test Ad Account, simply remove `test:false` from the search parameter. **3\\. Ask the user to select the Ad Account where the audience should be created** **4\\. Create a CSV file to upload** **5\\. Upload the CSV file using the below curl command** curl --form \"fileupload=@filename.csv;type=text/csv\" -H 'Authorization: Bearer ' [https://api.linkedin.com/media/upload?media_type=ad_segments](https://api.linkedin.com/media/upload?media_type=ad_segments) See our online documentation for [example CSV file templates](https://desktop.postman.com/?desktopVersion=10.13.0&userId=16069442&teamId=1986404). See [Upload List File](https://desktop.postman.com/?desktopVersion=10.13.0&userId=16069442&teamId=1986404) in our online documentation for details on this API.",
    "postmanId": "bf403cbc-3325-47ca-8a00-76be81bdcbef"
  },
  {
    "id": "audiencesUseCasesCsvListUploadAccountContactTargeting6CreateListUploadDmpSegmentPostDmpSegments",
    "name": "6. Create list upload DMP Segment",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "CSV list upload - Account & Contact Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Here we create the CSV List Upload DMP segment. See our [online documentation](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/matched-audiences/create-and-manage-list-uploads?tabs=http#sample-request-1) for more information. **NOTE:** there must be at least a 5 second delay between step 6 (creating the segment) and step 7 (attaching the uploaded list file) or the segment may not be populated.",
    "postmanId": "8a3d7df4-c694-4565-8825-304383a31fb4"
  },
  {
    "id": "audiencesUseCasesCsvListUploadAccountContactTargeting7AttachTheUploadedListToTheListUploadDmpSegmentPostDmpSegmentsListu",
    "name": "7. Attach the Uploaded List to the List Upload DMP Segment",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "CSV list upload - Account & Contact Targeting"
    ],
    "method": "POST",
    "url": "/dmpSegments/{listupload_segment_id}/listUploads",
    "variables": [
      "listupload_segment_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This call attaches the uploaded CSV list file (using the media URN returned in step 5) to the DMP segment created in step 6. For more detail on [attaching an uploaded list to a DMP segment](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-list-uploads?tabs=http#attach-list-to-dmp-segment), see our online documentation.",
    "postmanId": "49be98ea-e9a8-4fee-99c7-15cc3f6d6c71"
  },
  {
    "id": "audiencesUseCasesCsvListUploadAccountContactTargeting8MonitorStatusOfTheListUploadDmpSegmentsGetDmpSegmentsQAccountAccou",
    "name": "8. Monitor Status of the List Upload DMP Segments",
    "collection": "Audiences",
    "access": "partner",
    "folder": [
      "Use Cases",
      "CSV list upload - Account & Contact Targeting"
    ],
    "method": "GET",
    "url": "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform=LIST_UPLOAD",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The api call [fetches all DMP segments for a specific ad account](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segments?tabs=http#find-dmp-segments-by-account) that are List Upload segments. Initial processing can take up to 48 hours. The API should be periodically polled to fetch the latest match rate, audience size, and segment status. Match Rate is calculated by rounding matchedCount / inputCount. Review our online documentation for more information on [audienceSize vs matchedCount](https://docs.microsoft.com/linkedin/marketing/integrations/matched-audiences/create-and-manage-segment-destinations?tabs=http#differences-between-audience-size-and-matched-count-fields).",
    "postmanId": "a091b002-9378-43f6-ab55-1a7cddc595cb"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessCreateAdAccountUserPutAdAccountUsersAccountUrn3Ali3AsponsoredAccount",
    "name": "Create Ad Account User",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "PUT",
    "url": "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
    "variables": [
      "person_id",
      "sponsoredaccount_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example [creates an Ad Account User](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#create-ad-account-user). Creating Ad Account Users grants a member access to an Ad Account.",
    "postmanId": "ff4a66c5-2d74-4f01-99ec-12da50ec81fe"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessFetchAnAdAccountUserGetAdAccountUsersAccountUrn3Ali3AsponsoredAccoun",
    "name": "Fetch an Ad Account User",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "GET",
    "url": "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
    "variables": [
      "person_id",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example [fetches an Ad Account User](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#get-ad-account-user). Fetching an existing Ad Account User requires both account and user parameters. The person id can also be retrieved from the [/me](https://docs.microsoft.com/linkedin/shared/integrations/people/profile-api#retrieve-current-members-profile) endpoint.",
    "postmanId": "91b1be2b-bad2-4bdc-9ff8-a9ecf025fec7"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessFindAdAccountUsersByAccountsGetAdAccountUsersQAccountsAccountsListUr",
    "name": "Find Ad Account Users by Accounts",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "GET",
    "url": "/adAccountUsers?q=accounts&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "accounts",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example searches for all Ad Account Users by sponsored ad account or multiple sponsored ad accounts. Learn more in our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#find-ad-account-users-by-accounts).",
    "postmanId": "c93593b5-d551-47d3-9e63-416f767866be"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSAdAccountsGetAdAccountUsersQAuthenticatedU",
    "name": "Fetch the Authenticated User's Ad Accounts",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "GET",
    "url": "/adAccountUsers?q=authenticatedUser",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "authenticatedUser",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example retrieves all Ad Accounts that an authenticated user has access to. Specifically, this api call will return the Ad Accounts associated with the member whose access token is being used! The only required parameter is q=authenticatedUser. To understand more about verifying Ad Account Access visit our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#find-ad-accounts-by-authenticated-user).",
    "postmanId": "52aab606-1f82-4c12-ab12-fe4d028a2355"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSOrganizationRolesGetOrganizationAclsQRoleA",
    "name": "Fetch the Authenticated User's Organization Roles",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=roleAssignee",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "roleAssignee",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "To understand more about verifying Company Page Access visit our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-access-control-by-role?tabs=http#find-a-members-organization-access-control-information). A role defines the privileges that a member has within the organization. You must be an authenticated member with role type **ADMINISTRATOR** of an organization to use many of the Organization APIs.",
    "postmanId": "ccc0343f-0a87-4123-bf7c-d9837a0e6814"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessUpdateExistingAdAccountUserPostAdAccountUsersAccountUrn3Ali3Asponsor",
    "name": "Update Existing Ad Account User",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "POST",
    "url": "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
    "variables": [
      "person_id",
      "sponsoredaccount_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example [updates an Ad Account User](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#update-existing-ad-account-user). An Ad Account User's role can be updated by using this endpoint.",
    "postmanId": "517216a8-c933-45b4-9259-b3aba1bcad1a"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureUserAccessDeleteAnAdAccountUserDeleteAdAccountUsersAccountUrn3Ali3AsponsoredAc",
    "name": "Delete an Ad Account User",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "User Access"
    ],
    "method": "DELETE",
    "url": "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
    "variables": [
      "person_id",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example [deletes an Ad Account User](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-account-users?tabs=http#delete-an-ad-account-user). Members can be removed from Ad Account access by using the delete Ad Account User endpoint. Deletion requires both account and user parameters to look up the appropriate Ad Account User.",
    "postmanId": "f8932b90-ae42-4fb5-a5fa-276b6513f421"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementCreateAnAdAccountPostAdAccounts",
    "name": "Create an Ad Account",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "POST",
    "url": "/adAccounts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example API [creates an Ad Account](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#create-ad-account)",
    "postmanId": "6ceed01e-6b4b-4f03-b301-065b5828c052"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementCreateATestAdAccountPostAdAccounts",
    "name": "Create a Test Ad Account",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "POST",
    "url": "/adAccounts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API example [creates a \"test\" ad account](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#creating-a-test-ad-account) by including an additional boolean `test` flag to `true` on the payload.",
    "postmanId": "31cd3952-4dfd-4414-a729-f9a0bbc2f868"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementFetchTheAdAccountByIdGetAdAccountsSponsoredaccountId",
    "name": "Fetch the Ad Account by ID",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{sponsoredaccount_id}",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Fetch an ad Account](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#fetch-ad-account) by sponsored account ID.",
    "postmanId": "76758e16-b1d0-47e7-87c7-119cb8991df5"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementSearchAccountsByStatusGetAdAccountsQSearchSearchStatusValuesL",
    "name": "Search Accounts by Status",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(status:(values:List(ACTIVE)))",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Use the `q=search` parameter with the adAccountsV2 API to [search for ad accounts](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts) by ID, name, reference, type, and status fields. Search criteria can be chained together for increased granularity. If a search query is omitted, all accounts the caller has access to are returned in the response. This example searches for accounts by the Status(DRAFT).",
    "postmanId": "e4a7b490-0a9c-403a-a6d9-1afe37e202f9"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementSearchAccountByTypeGetAdAccountsQSearchSearchTypeValuesListBu",
    "name": "Search Account by Type",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(type:(values:List(BUSINESS)))",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Use the `q=search` parameter with the adAccountsV2 API to [search for accounts](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts) by ID, name, reference, type, and status fields. Search criteria can be chained together for increased granularity. If a search query is omitted, all accounts the caller has access to are returned in the response. This example searches for accounts by the type(BUSINESS).",
    "postmanId": "9061d3f1-2f98-4d6d-bccc-238e63356569"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureAccountManagementUpdateAdAccountNamePostAdAccountsSponsoredaccountId",
    "name": "Update Ad Account Name",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Account Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{sponsoredaccount_id}",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Ad Accounts can be updated through a partial update by patching the fields you want to change. The following example changes the name field only. See our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#update-ad-account) for more information.",
    "postmanId": "6b0423c7-f4c9-4a1f-9d6f-044f25ffe145"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateACampaignGroupPostAdAccountsAdAccountsIdAdCampaig",
    "name": "Create a Campaign Group",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Campaign groups can be created in ACTIVE or DRAFT state. You can change ACTIVE to ARCHIVED or PAUSED. This example [creates a Campaign Group](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#create-a-campaign-group) in the state DRAFT.",
    "postmanId": "a19ed64d-3851-4664-af5e-73313dc38480"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA",
    "name": "Create Multiple Campaign Groups",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Campaign groups can be created in ACTIVE or DRAFT state. You can change ACTIVE to ARCHIVED or PAUSED. This example [creates multiple Campaign Groups](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#batch-create-campaign-groups) using the RestLi method BATCH_CREATE.",
    "postmanId": "22436bc4-212b-45e5-b249-efe965fd3f8a"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchACampaignGroupByIdGetAdAccountsAdAccountsIdAdCampa",
    "name": "Fetch a Campaign Group by ID",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "A Campaign Group can be fetched by the campaign group id as shown in this example call. See our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#get-a-campaign-group) for more information.",
    "postmanId": "fe70aede-b2c2-458b-bedd-be0b8c2837d2"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchMultipleCampaignGroupsByIdGetAdAccountsAdAccountsI",
    "name": "Fetch multiple Campaign Groups by ID",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1",
      "campaigngroup_id2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Multiple Campaign Groups can be fetched by the campaign group ids a shown in this example call. View our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#batch-get-campaign-groups) for more information.",
    "postmanId": "82180452-da50-4d10-a853-dbcdfd348f42"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementSearchForCampaignGroupsGetAdAccountsAdAccountsIdAdCampa",
    "name": "Search for Campaign Groups",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups?q=search&search=(status:(values:List(ACTIVE,DRAFT)))&sort=(field:ID,order:DESCENDING)",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Use the `q=search` parameter to [search for campaign groups](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#search-for-campaign-groups) by ID, account, name, and status fields. Search criteria can be chained together for increased granularity. If a search query is omitted, all campaign groups the caller has access to is returned in a paginated response. this example fetches campaign groups by the status values DRAFT or ACTIVE and orders it by ID descending.",
    "postmanId": "cf8bd999-376f-4a7e-9326-86f46f9cf44a"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateCampaignGroupPostAdAccountsAdAccountsIdAdCampaign",
    "name": "Update Campaign Group",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Campaign groups can be updated with a partial update. This example updates the amount and currencyCode for a Campaign Group. View our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#update-a-campaign-group) to learn more.",
    "postmanId": "c678d6a6-22d2-4d05-9dde-dba2ebcfc388"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA",
    "name": "Update Multiple Campaign Groups",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1",
      "campaigngroup_id2"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_PARTIAL_UPDATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Multiple campaign groups can be updated with a partial update. This example updates the amount and currencyCode for one Campaign Group and status for another Campaign Group using the RestLi method BATCH_PARTIAL_UPDATE. View our public documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#batch-update-campaign-groups) to learn more.",
    "postmanId": "3c32bb6c-f7a1-423d-9638-0d56f32c4827"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteACampaignGroupDeleteAdAccountsAdAccountsIdAdCampa",
    "name": "Delete a Campaign Group",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example call [deletes a Campaign Group](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#delete-a-campaign-group). Only campaign groups which are in DRAFT status are allowed to be deleted. Once deleted, a campaign group can't be retrieved or recovered.",
    "postmanId": "1c1ec144-d972-41d3-bdf3-9c988f37921b"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteMultipleCampaignGroupsDeleteAdAccountsAdAccountsI",
    "name": "Delete Multiple Campaign Groups",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Group Management"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1",
      "campaigngroup_id2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Multiple Campaign Group can be deleted as shown in this example call. View our online documentation [here](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaign-groups?tabs=http#batch-delete-campaign-groups) to learn more. Only campaign groups which are in DRAFT status are allowed to be deleted. Once deleted, a campaign group can't be retrieved or recovered.",
    "postmanId": "7cd783db-fabc-472b-b501-b31b8fb04f5c"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementFetchACampaignUsingCampaignIdGetAdAccountsAdAccountsIdAdCampa",
    "name": "Fetch a Campaign using Campaign ID",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaigns/{campaignId1}",
    "variables": [
      "adAccountsId",
      "campaignId1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "bbd00567-4f8c-4a44-8000-a7c66c961a7c"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementCreateCampaignSponsoredUpdatesPostAdAccountsAdAccountsIdAdCam",
    "name": "Create Campaign (SPONSORED_UPDATES)",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ee612ea0-0d73-4fc9-94e1-96d0a2e437f4"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementCreateMultipleCampaignUsingBatchPostAdAccountsAdAccountsIdAdC",
    "name": "Create multiple campaign using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c85ffdfc-90f6-466e-9e92-dfa75d2dc154"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementSearchForCampaignUsingCriteriaGetAdAccountsAdAccountsIdAdCamp",
    "name": "Search for Campaign using criteria",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaigns?q=search&search.campaignGroup.values[0]=urn:li:sponsoredCampaignGroup:{campaigngroup_id1}",
    "variables": [
      "adAccountsId",
      "campaigngroup_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "24f5fe28-fcdc-46ab-819d-2293deec8656"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementUpdateCampaignUsingCampaignIdPostAdAccountsAdAccountsIdAdCamp",
    "name": "Update Campaign Using campaignId",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns/{campaignId1}",
    "variables": [
      "adAccountsId",
      "campaignId1"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "df4ce990-3b92-4447-a20f-ce46f7edfde0"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementUpdateMultipleCampaignsUsingBatchPostAdAccountsAdAccountsIdAd",
    "name": "Update multiple campaigns using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns?ids[0]={campaign_id1}&ids[1]={campaign_id2}",
    "variables": [
      "adAccountsId",
      "campaign_id1",
      "campaign_id2"
    ],
    "hasBody": false,
    "restliMethod": "BATCH_PARTIAL_UPDATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "12493b8f-ebec-41a7-9f34-c6c7c9cead52"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementReactivateACampaignPostAdAccountsAdAccountsIdAdCampaignsCampa",
    "name": "Reactivate a Campaign",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
    "variables": [
      "adAccountsId",
      "campaign_id1"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "722bb174-8312-43de-917d-eb09897c7fe3"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementArchiveACampaignPostAdAccountsAdAccountsIdAdCampaignsCampaign",
    "name": "Archive a Campaign",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
    "variables": [
      "adAccountsId",
      "campaign_id1"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b20fc0c4-1786-450f-b4ab-823ff23722a5"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementDeleteCampaignUsingCampaignIdDeleteAdAccountsAdAccountsIdAdCa",
    "name": "Delete campaign Using campaign Id",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
    "variables": [
      "adAccountsId",
      "campaign_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "690f44c2-6854-4300-81d7-fab830a432bc"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCampaignMangementDeleteMultipleCampaignsUsingBatchDeleteAdAccountsAdAccountsId",
    "name": "Delete multiple campaigns using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Campaign Mangement"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/adCampaigns?ids=List({campaign_id1},{campaign_id2})",
    "variables": [
      "adAccountsId",
      "campaign_id1",
      "campaign_id2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ccc10876-a5b2-4270-9dd7-b29e3298d2b5"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementFetchACreativeUsingCreativeIdGetAdAccountsAdAccountsIdCreati",
    "name": "Fetch a Creative using Creative ID",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
    "variables": [
      "adAccountsId",
      "creative_Id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ba4d1df2-0805-482d-afdc-2b28e052d6f3"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementFetchMultipleCreativesUsingBatchGetAdAccountsAdAccountsIdCre",
    "name": "Fetch multiple Creatives using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1})",
    "variables": [
      "adAccountsId",
      "creative_Id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c6969d52-d37c-460f-a229-c29252759a4e"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementCreateACreativePostAdAccountsAdAccountsIdCreatives",
    "name": "Create a Creative",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/creatives",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "384ea70f-b258-4109-8589-1e32c7bd78c6"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementSearchCreativeUsingCriteriaGetAdAccountsAdAccountsIdCreative",
    "name": "Search Creative using Criteria",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/creatives?q=search&search.campaign.values[0]=urn:li:sponsoredCampaign:{campaign_id1}",
    "variables": [
      "adAccountsId",
      "campaign_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "8bbc86a6-5467-4ed7-8c46-f8b1709d9997"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementUpdateCreativeUsingCreativeIdPostAdAccountsAdAccountsIdCreat",
    "name": "Update Creative Using Creative Id",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
    "variables": [
      "adAccountsId",
      "creative_Id1"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "12712e03-9f5a-4a39-8f39-602bac9fba9b"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementUpdateMultipleCreativeUsingBatchPostAdAccountsAdAccountsIdCr",
    "name": "Update multiple Creative using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1},{creative_Id2})",
    "variables": [
      "adAccountsId",
      "creative_Id1",
      "creative_Id2"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f22fcaff-ff06-4506-b6ec-b9f0d2411b1f"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementDeleteCreativeUsingCreativeIdDeleteAdAccountsAdAccountsIdCre",
    "name": "Delete Creative Using Creative Id",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
    "variables": [
      "adAccountsId",
      "creative_Id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "44b726e7-a46f-43a1-87ce-aec3acb8d23f"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementDeleteMultipleCreativesUsingBatchDeleteAdAccountsAdAccountsI",
    "name": "Delete multiple Creatives using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "DELETE",
    "url": "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1})",
    "variables": [
      "adAccountsId",
      "creative_Id1"
    ],
    "hasBody": false,
    "restliMethod": "BATCH_DELETE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "2853adad-1d06-49d2-a6ef-ba204321a7f6"
  },
  {
    "id": "campaignManagementUseCasesAccountStructureCreativeManagementCreateMultipleCreativesUsingBatchPostAdAccountsAdAccountsIdC",
    "name": "Create multiple Creatives using BATCH",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Account structure",
      "Creative Management"
    ],
    "method": "POST",
    "url": "/adAccounts/{adAccountsId}/creatives",
    "variables": [
      "adAccountsId"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "99dea384-93fa-4baa-bede-b6b94b14f769"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFetchTheAdTargetingFacetsGetAdTargetingFacets",
    "name": "Fetch the Ad Targeting Facets",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Targeting"
    ],
    "method": "GET",
    "url": "/adTargetingFacets",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/advertising-targeting/ads-targeting?tabs=http&view=li-lms-unversioned) to understand more on Ads Targeting APIs. Facets are high-level categories of the types of targeting available to you. Use facets to narrow down your intended audience. The adTargetingFacets API returns available targeting facets.",
    "postmanId": "1b230cfb-5755-4c6a-ace5-aaf12d8ec24c"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByFacetSenioritiesGetAdTargetingEntitiesQAdTarg",
    "name": "Find Entities by Facet Seniorities",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Targeting"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=List(urn%3Ali%3AadTargetingFacet%3Aseniorities)&locale=(language:en,country:US)",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "To understand more about the Ad Targeting Entities refer to our public documentation [here](https://docs.microsoft.com/linkedin/shared/references/v2/ads/adtargetingentities?context=linkedin/marketing/contex&view=li-lms-unversioned). Once you've identified the facet type(s) you'd like to target, you can fetch their entity values. This API example fetches the Entities by facet Seniorities.",
    "postmanId": "26caaf3b-7759-4be3-b39e-2dbcbb5b12b7"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesBySimilarEntitiesGetAdTargetingEntitiesQSimilar",
    "name": "Find Entities by Similar Entities",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Targeting"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=similarEntities&facet=urn%3Ali%3AadTargetingFacet%3Aemployers&queryVersion=QUERY_USES_URNS&entities=List(urn%3Ali%3Aorganization%3A1003)&locale=(language:en,country:US)",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "similarEntities",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "To understand more about the Ad Targeting Entities refer to our public documentation [here](https://docs.microsoft.com/linkedin/shared/references/v2/ads/adtargetingentities?context=linkedin/marketing/contex&view=li-lms-unversioned). Once you've identified the facet type(s) you'd like to target, you can fetch their entity values. This API fetches the Entities by a similar entity.",
    "postmanId": "e35bfa2a-39dc-40a2-9469-e59a002c2af5"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByTypeaheadSuggestionsGetAdTargetingEntitiesQTy",
    "name": "Find Entities by Typeahead Suggestions",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Targeting"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=TYPEAHEAD&facet=List(urn%3Ali%3AadTargetingFacet%3Alocations)&query=afric",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "TYPEAHEAD",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "To understand more about the Ad Targeting Entities refer to our public documentation [here](https://docs.microsoft.com/linkedin/shared/references/v2/ads/adtargetingentities?context=linkedin/marketing/contex&view=li-lms-unversioned). Once you've identified the facet type(s) you'd like to target, you can fetch their entity values. This API example fetches the Entities using the typeahead suggestions.",
    "postmanId": "f3e6b1ba-53fa-4815-95c0-9a14d8e703c8"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByUrnsGetAdTargetingEntitiesQUrnsQueryVersionQu",
    "name": "Find Entities by URNs",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Targeting"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=urns&queryVersion=QUERY_USES_URNS&urns=List(urn%3Ali%3Ageo%3A102095887)",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "urns",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "To understand more about the Ad Targeting Entities refer to our public documentation [here](https://docs.microsoft.com/linkedin/shared/references/v2/ads/adtargetingentities?context=linkedin/marketing/contex&view=li-lms-unversioned). Once you've identified the facet type(s) you'd like to target, you can fetch their entity values. This API example fetches the Entities by URNs.",
    "postmanId": "c42499c9-1ce4-41c7-9c86-26e726749729"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdsForecastingAdSupplyForecastApiGetAdSupplyForecastsQCriteriaV2Account",
    "name": "Ad Supply Forecast API",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ads Forecasting"
    ],
    "method": "GET",
    "url": "/adSupplyForecasts?q=criteriaV2&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&timeRange=(start:1631790775000,end:1632136375000)&campaignType=SPONSORED_UPDATES&totalBudget=(amount:100.00,currencyCode:USD)&competingBid=(bidType:CPM,bidPrice:(currencyCode:USD,amount:10))&targetingCriteria=(include:(and:List((or:(urn%3Ali%3AadTargetingFacet%3Alocations:List(urn%3Ali%3Ageo%3A101165590))))),exclude:(or:(urn%3Ali%3AadTargetingFacet%3AstaffCountRanges:List(urn%3Ali%3AstaffCountRange%3A%2810001%2C2147483647%29))))",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "criteriaV2",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The Ad Supply Forecasts API enables you to forecast impressions, spending, and other metrics based on: \\* Targeting criteria \\* Campaign settings such as campaign type and objective type \\* Bid and spending settings \\* Time period",
    "postmanId": "6ec2d72e-7ec2-4059-84d1-c9d97c8afc14"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent2RegisterUploadPostAssetsActio",
    "name": "2. Register Upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/assets?action=registerUpload",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "action",
      "name": "registerUpload",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#register-an-upload-for-images) to understand more on this API. This API example covers Registering an upload for an Image File. The returned uploadUrl in the response can then subsequently be used to perform the actual upload in Step 3.",
    "postmanId": "b719b257-12f7-4569-a6a9-fa7a43de86a3"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent3UploadTheImageFileSelectAnIma",
    "name": "3. Upload the image file (select an image file in the Body for postman to use)",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "PUT",
    "url": "/{upload_url}",
    "variables": [
      "upload_url"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Select an image file on your local machine in the Body for postman to use in this example call. View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#upload-the-image) to understand more on this API. This API example uses `upLoadUrl` URL from the previous response (step 1) for an actual upload of an Image File.",
    "postmanId": "d57af3ac-985b-414a-a1ae-932b1ba9dffd"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA",
    "name": "4. Check the status of the upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "GET",
    "url": "/assets/{asset_id}",
    "variables": [
      "asset_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#check-status-of-upload) to understand more on this API. This API examples retrieves the status of the Image File uploaded in the previous step by using the digital media asset ID (returned in step 1). The recipe upload status must be **'AVAILABLE'** in order to move on to the next step!",
    "postmanId": "4fe6ff93-b8b5-499d-ab65-fe999185357b"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent5CreateASharePostShares",
    "name": "5. Create a share",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/shares",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/share-api?tabs=http&view=li-lms-unversioned#post-shares) to understand more on creating shares. This API example creates an organic image share on the Company Page (organization) referencing the Image file that was uploaded in Step 3.",
    "postmanId": "4a2211ba-e1cf-484e-b5b5-9ba6f3b621b5"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent6CreateACampaignForTheImageAdP",
    "name": "6. Create a Campaign for the Image Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/adCampaigns",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?tabs=http&view=li-lms-unversioned#create-a-campaign) to understand more on creating a Single Image Sponsored Content Campaign. This API example creates a Sponsored Content Campaign to be used in the next step.",
    "postmanId": "ad0c72a1-1681-4662-bd0a-683e5c18cb20"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent7CreateACreativeForTheImageAdP",
    "name": "7. Create a Creative for the Image Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/adCreatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?tabs=http&view=li-lms-unversioned#create-a-sponsored-content-share) to understand more on creating a Sponsored Content Ad Creative. This API example creates a Sponsored Content Ad Creative referencing the previously created image share in step 5. This Creative will be created under the Campaign created in the previous step.",
    "postmanId": "f4878a7a-bb0f-413e-9c00-7bb2bfa7d206"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares2RegisterUploa",
    "name": "2. Register Upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "POST",
    "url": "/assets?action=registerUpload",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "registerUpload",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#register-an-upload-for-images) to understand more on this API. This API example covers registering an upload for an Image File. The returned `uploadUrl` URL in the response can then subsequently be used to perform the actual upload in step 3.",
    "postmanId": "788817e7-5a8e-41fe-8371-f9bbddd951ab"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares3UploadTheImag",
    "name": "3. Upload the image file Copy (select an image file in the Body for postman to use)",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "PUT",
    "url": "/{upload_url}",
    "variables": [
      "upload_url"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#upload-the-image) to understand more on this API. This API example uses the `upLoadUrl` URL from the previous Step's response for an actual upload of an Image File.",
    "postmanId": "eaf4b519-37c1-41d6-9a60-4cabbc439476"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares4CheckTheStatu",
    "name": "4. Check the status of the upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "GET",
    "url": "/assets/{asset_id}",
    "variables": [
      "asset_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/vector-asset-api?tabs=http&view=li-lms-unversioned#check-status-of-upload) to understand more on this API. This API examples retrieves the status of the Image File uploaded in the previous step by using the asset ID. The recipe upload status must be **'AVAILABLE'** in order to move on to the next step!",
    "postmanId": "68b723cc-2578-4c4a-9889-1fa9aa46f69b"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares5CreateADarkSh",
    "name": "5. Create a dark share",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "POST",
    "url": "/shares",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/shares/share-api?tabs=http&view=li-lms-unversioned#direct-sponsored-content-share) to understand more on creating a direct sponsored content share (dark share). This API example creates a dark image share on the Company Page (organization) referencing referencing the Image file that was uploaded in Step 3. A Direct Sponsored Content Share allows an advertiser to sponsor content without first publishing the content on the Organization page. It is very similar to a Sponsored Content Share except the share is not organic. This is otherwise known as a \"dark\" share and can only be viewed by the administrators of the organization's page.",
    "postmanId": "9c63262d-6dbe-4bed-bfa0-3b3cd5cf34e9"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares6CreateACampai",
    "name": "6. Create a Campaign for the Image Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "POST",
    "url": "/adCampaigns",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-campaigns?tabs=http&view=li-lms-unversioned#create-a-campaign) to understand more on creating a Single Image Sponsored Content Campaign. This API example creates a Sponsored Content Campaign to be used in the next step.",
    "postmanId": "418c46c2-62ac-460d-9fe2-1587254f079f"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares7CreateACreati",
    "name": "7. Create a Creative for the Image Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Image Ad Creation",
      "Direct Sponsored Content (dark shares)"
    ],
    "method": "POST",
    "url": "/adCampaigns",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/account-structure/create-and-manage-creatives?tabs=http&view=li-lms-unversioned#create-a-direct-sponsored-content-share) to understand more on creating a Sponsored Content Ad Creative. This API example creates a Sponsored Content Ad Creative referencing the previously created image dark share in step 5. This Creative will be created under the Campaign created in the previous step.",
    "postmanId": "9930ae12-ea28-4424-a4b8-8d613374b023"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent2RegisterVideoUploadPostAssets",
    "name": "2. Register Video Upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/assets?action=registerUpload",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "registerUpload",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "fbfcdbf0-fbe6-48b4-8cd8-96705c89e19b"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent3UploadTheVideoFileSelectAVide",
    "name": "3. Upload the video file (select a video file in the Body for postman to use)",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "PUT",
    "url": "/{video_uploadurl}",
    "variables": [
      "video_uploadurl"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "fd4ac865-3537-43a3-94dd-1c651eb7ead7"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA",
    "name": "4. Check the status of the upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "GET",
    "url": "/assets/{video_asset_id}",
    "variables": [
      "video_asset_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c532977c-7150-4c2b-8785-e1a0d8015b78"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent5CreatePostPostPosts",
    "name": "5. Create Post",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/posts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "8e6b76c2-02a5-474c-aa2d-8768d2312130"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent6CreateACampaignForTheVideoAdP",
    "name": "6. Create a Campaign for the Video Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/adCampaigns",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ff47d5ff-e94c-436d-a4ad-128c487d2aca"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent7CreateACreativeForTheVideoAdP",
    "name": "7. Create a Creative for the Video Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Video Ad Creation",
      "Sponsored Content"
    ],
    "method": "POST",
    "url": "/creatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "7736e393-029a-4203-9b8e-1037a818b6de"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation2RegisterDocumentUploadPostDocumentsActionI",
    "name": "2. Register Document Upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "POST",
    "url": "/documents?action=initializeUpload",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "action",
      "name": "initializeUpload",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "24f3e451-072b-4790-bd30-b78315153ed2"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation3UploadTheDocumentFileSelectADocumentFileIn",
    "name": "3. Upload the Document file (select a document file in the Body for postman to use)",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "PUT",
    "url": "/{document_uploadurl}",
    "variables": [
      "document_uploadurl"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ae19cce1-527e-468d-b6a8-4d299f1698ff"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation4CheckTheStatusOfTheUploadGetAssetsDocument",
    "name": "4. Check the status of the upload",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "GET",
    "url": "/assets/{document_asset_id}",
    "variables": [
      "document_asset_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "288b1af4-5705-43ac-ac2d-0c0048a6d329"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation5CreatePostPostPosts",
    "name": "5. Create Post",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "POST",
    "url": "/posts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "6937aa72-3c95-40d9-b264-90a660a49557"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation6CreateACampaignForTheDocumentAdPostAdCampa",
    "name": "6. Create a Campaign for the Document Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "POST",
    "url": "/adCampaigns",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "85411e11-9c16-4b5e-8b0c-e14edd319fe0"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation7CreateACreativeForTheDocumentAdPostCreativ",
    "name": "7. Create a Creative for the Document Ad",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Ad Creation",
      "Document Ad Creation"
    ],
    "method": "POST",
    "url": "/creatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f42c41c8-2f58-4ebc-a366-a3c5d0e2d53a"
  },
  {
    "id": "campaignManagementUseCasesAdvertisingAndTargetingAudienceCountsFindAudienceCountByTargetingCriteriaGetAudienceCountsQTar",
    "name": "Find audience count by targeting criteria",
    "collection": "Campaign Management",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Advertising and Targeting",
      "Audience Counts"
    ],
    "method": "GET",
    "url": "/audienceCounts?q=targetingCriteriaV2&targetingCriteria=(include:(and:List((or:({encoded%20facet_URN_1}:List({encoded%20facet_URN_1_value_1},%20{encoded%20facet_URN_1_value_2}))),(or:({encoded%20facet_URN_2}:List({encoded%20facet_URN_2_value_1},{encoded%20facet_URN_2_value_2}))))))",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "targetingCriteriaV2",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View our [Public Documentation](https://docs.microsoft.com/linkedin/marketing/integrations/ads/advertising-targeting/ads-targeting?tabs=http&view=li-lms-unversioned) to understand more on Ads Targeting APIs. Facets are high-level categories of the types of targeting available to you. Use facets to narrow down your intended audience. The adTargetingFacets API returns available targeting facets.",
    "postmanId": "3340e692-9c08-42d4-8237-b0e69423fb31"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow2CreateAShareWith",
    "name": "2. Create a share with Company Mention",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Push Workflow"
    ],
    "method": "POST",
    "url": "/shares",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Mention a company name by using the annotations. [Learn more](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/share-api?tabs=http#share-text-and-mentions) by viewing our public documentation. This example uses the LinkedIn organization.",
    "postmanId": "2e9a9795-97cc-4649-b521-f5c79ec6e595"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow3CreateASubscript",
    "name": "3. Create a subscription request",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Push Workflow"
    ],
    "method": "PUT",
    "url": "/eventSubscriptions/(developerApplication:urn%3Ali%3AdeveloperApplication%3A{application_id},user:urn%3Ali%3Aperson%3A{person_id},entity:urn%3Ali%3Aorganization%3A{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
    "variables": [
      "application_id",
      "organization_id",
      "person_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Create a subscription](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-social-action-notifications?tabs=http#creating-and-updating-subscriptions) record to include the webhook URL where your app will receive notifications. The subscription request will only succeed if the subscribing member is an administrator of the organization being subscribed to.",
    "postmanId": "cbfd4c86-2a48-4bf0-b565-f176a2f1c34a"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow4RetrieveSubscrip",
    "name": "4. Retrieve subscription for authenticated members",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Push Workflow"
    ],
    "method": "GET",
    "url": "/eventSubscriptions?q=subscriberAndEventType&eventType=ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "subscriberAndEventType",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieve Subscriptions details such as webhook url and expiration for your application and registered user. [Learn more](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-social-action-notifications?tabs=http#retrieve-subscriptions-by-key) by viewing our public documentation.",
    "postmanId": "8acb7aa5-5a44-42d9-a58d-abc71642780a"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow5RetrieveSubscrip",
    "name": "5. Retrieve Subscription by Key",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Push Workflow"
    ],
    "method": "GET",
    "url": "/eventSubscriptions/(developerApplication:urn%3Ali%3AdeveloperApplication%3A{application_id},user:urn%3Ali%3Aperson%3A{person_id},entity:urn%3Ali%3Aorganization%3A{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
    "variables": [
      "application_id",
      "organization_id",
      "person_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieve all the subscriptions details such as webhook url and expiration for the logged in user. [Learn more](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-social-action-notifications?tabs=http#retrieve-subscriptions-for-an-authenticated-member) by viewing our online documentation.",
    "postmanId": "00de711f-da88-413e-b049-7bfb67e1af0a"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow6RemoveASubscript",
    "name": "6. Remove a Subscription",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Push Workflow"
    ],
    "method": "DELETE",
    "url": "/eventSubscriptions/(developerApplication:{application_id},user:{person_id},entity:{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
    "variables": [
      "application_id",
      "organization_id",
      "person_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Remove a subscription](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-social-action-notifications?tabs=http#remove-a-subscription) for a your developer application and Organization.",
    "postmanId": "6319a393-f2aa-4b90-b09c-3c55b9cde443"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow2CreateAShareWith",
    "name": "2. Create a share with a Company Mention",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Pull Workflow"
    ],
    "method": "POST",
    "url": "/shares",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Mention a company name by using the annotations. [Learn more](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/share-api?tabs=http#share-text-and-mentions) by viewing our public documentation. This example uses the LinkedIn organization.",
    "postmanId": "3e9cb8e8-9c72-4c84-8f0f-01c5fb450ce7"
  },
  {
    "id": "communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow3RetrieveNotifica",
    "name": "3. Retrieve Notifications for the authenticated member's organization",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Social Actions Notifications",
      "Organization Social Actions Notifications - Pull Workflow"
    ],
    "method": "GET",
    "url": "/eventSubscriptions?q=subscriberAndEventType&eventType=ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "subscriberAndEventType",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Learn more](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-social-action-notifications?tabs=http#pull-organizational-notifications) by viewing our public documentation.",
    "postmanId": "f081ceaf-fc7b-40b2-9345-b4c0755153f5"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsLifetimeFollowerStatisticsGetOrganizationalEntity",
    "name": "Lifetime follower statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Follower Statistics"
    ],
    "method": "GET",
    "url": "/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A77710671",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizationalEntity",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "42b7cfa5-1c09-4358-b86f-06df54b2f8b5"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsTimeBoundFollowerStatisticsGetOrganizationalEntit",
    "name": "Time-Bound follower statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Follower Statistics"
    ],
    "method": "GET",
    "url": "/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizationalEntity",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "219e7c6b-bc94-462b-9935-aa500761472a"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationPageStatisticsTimeBoundOrganizationPageStatisticsGetOrganizationPag",
    "name": "Time-Bound organization page statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Page Statistics"
    ],
    "method": "GET",
    "url": "/organizationPageStatistics?q=organization&organization=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "4d5a5a19-7dd0-4e9b-9a23-ad55fca02ec0"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationPageStatisticsLifetimePageStatisticsGetOrganizationPageStatisticsQO",
    "name": "Lifetime Page Statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Page Statistics"
    ],
    "method": "GET",
    "url": "/organizationPageStatistics?q=organization&organization=urn%3Ali%3Aorganization%3A2414183",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c00670db-476b-421d-88d7-db1d8457460e"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationShareStatisticsLifetimeShareStatisticsGetOrganizationalEntityShareS",
    "name": "Lifetime Share Statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Share Statistics"
    ],
    "method": "GET",
    "url": "/organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizationalEntity",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "17f1622f-331b-410f-a879-b4f91c46f3a9"
  },
  {
    "id": "communityManagementUseCasesStatisticsApisOrganizationShareStatisticsTimeBoundShareStatisticsGetOrganizationalEntityShare",
    "name": "Time Bound Share Statistics",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Statistics APIs",
      "Organization Share Statistics"
    ],
    "method": "GET",
    "url": "/organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizationalEntity",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "1ff41b94-6bc1-4b39-83e3-327f25603237"
  },
  {
    "id": "communityManagementUseCasesOrganizationFollowersSearchByKeywordGetPeopleTypeaheadQOrganizationFollowersKeywordsChrisOrga",
    "name": "Search By Keyword",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Followers"
    ],
    "method": "GET",
    "url": "/peopleTypeahead?q=organizationFollowers&keywords=chris&organization=urn%3Ali%3Aorganization%3A{organization_id}",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizationFollowers",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f7f8dc93-ed64-403e-8d9b-0bc4b373f670"
  },
  {
    "id": "communityManagementUseCasesOrganizationFollowersSearchByVanityUrlGetVanityUrlQVanityUrlAsOrganizationVanityUrlHttps3AWww",
    "name": "Search By Vanity URL",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Followers"
    ],
    "method": "GET",
    "url": "/vanityUrl?q=vanityUrlAsOrganization&vanityUrl=https%3A//www.linkedin.com/in/vanityName/&organization=urn%3Ali%3Aorganization%3A{organization_id}",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "vanityUrlAsOrganization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "447fa6b9-91a5-43e8-867a-c04f5fdee20a"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsBatchGetByAdministeredOrgIdsGetOrganizationsIdsListOrganizatio",
    "name": "Batch GET by Administered Org Ids",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations?ids=List({organization_id},{organization_id1})",
    "variables": [
      "organization_id",
      "organization_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f0c2dbc4-65e9-4a12-a189-68236b273710"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationByIdGetOrganizationsOrganizationId",
    "name": "Retrieve Organization by ID",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations/{organization_id}",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "5304a2eb-a0b0-4576-a1e4-0d626af66832"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByVanityNameGetOrganizationsQVanityNameVanityN",
    "name": "Find Organization by Vanity Name",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations?q=vanityName&vanityName={vanityName}",
    "variables": [
      "vanityName"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "vanityName",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "3d35ef14-5510-434b-8e5a-44a0856f069e"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByEmailDomainGetOrganizationsQEmailDomainEmail",
    "name": "Find Organization by Email Domain",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations?q=emailDomain&emailDomain={email_domain}",
    "variables": [
      "email_domain"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "emailDomain",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "da55912d-8214-4c4f-b1a3-6420df49ea7c"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationUsingProjectionGetOrganizationsOrganizatio",
    "name": "Retrieve Organization using projection",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations/{organization_id}?projection=(vanityName,primaryOrganizationType,id)",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e956df32-a4f4-40b3-bdc0-3e8a4730f7bf"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsLookupByOrganizationPrimaryTypeGetOrganizationsOrganizationIdP",
    "name": "Lookup by Organization Primary Type",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizations/{organization_id}?projection=(primaryOrganizationType)",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "6734b8e2-3eff-40b4-b33c-4a32c4d4bedd"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsFindNonAdministeredOrganizationGetOrganizationsLookupIdsListOr",
    "name": "Find Non-Administered Organization",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/organizationsLookup?ids=List({organization_id},{organization_id1})",
    "variables": [
      "organization_id",
      "organization_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b9272d33-d023-4ddf-8120-ed75a36c3b29"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationFollowerCountGetNetworkSizesUrnLiOrganizat",
    "name": "Retrieve Organization Follower Count",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organizations"
    ],
    "method": "GET",
    "url": "/networkSizes/urn:li:organization:{organization_id}?edgeType=CompanyFollowedByMember",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "583f16ea-06dd-4f8a-8651-c4f97f442c9b"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationBrandsFindOrganizationBrandByVanityNameGetOrganizationBrandsQVa",
    "name": "Find Organization Brand by Vanity Name",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organization Brands"
    ],
    "method": "GET",
    "url": "/organizationBrands?q=vanityName&vanityName={vanityName}",
    "variables": [
      "vanityName"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "vanityName",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d1355d8a-8d59-4b73-b0ae-67403d81da3e"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationBrandsRetrieveAnAdministeredOrganizationBrandGetOrganizationBra",
    "name": "Retrieve an Administered Organization Brand",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organization Brands"
    ],
    "method": "GET",
    "url": "/organizationBrands/{organizationBrand_id}",
    "variables": [
      "organizationBrand_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "526e3cfc-aa54-4e44-ad5e-98a3d5489934"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnAdministeredOrganizationBrandsGetOrganizationBr",
    "name": "Batch GET on Administered Organization Brands",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organization Brands"
    ],
    "method": "GET",
    "url": "/organizationBrands?ids=List({organizationBrand_id},{organizationBrand_id1})",
    "variables": [
      "organizationBrand_id",
      "organizationBrand_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "cfe6d16d-d6c7-4dfa-b27b-bed647bca355"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnNonAdministeredOrganizationBrandsGetOrganizatio",
    "name": "Batch GET on Non-Administered Organization Brands",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organization Brands"
    ],
    "method": "GET",
    "url": "/organizationBrandsLookup?ids=List({organizationBrand_id},{organizationBrand_id1})",
    "variables": [
      "organizationBrand_id",
      "organizationBrand_id1"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "294ddd33-9ff5-4a94-84b4-70ae5cd529b5"
  },
  {
    "id": "communityManagementUseCasesOrganizationLookupOrganizationBrandsFindAdministeredOrganizationBrandsByParentOrgGetOrganizat",
    "name": "Find Administered Organization Brands by Parent Org",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Lookup",
      "Organization Brands"
    ],
    "method": "GET",
    "url": "/organizations?q=parentOrganization&parent=urn:li:organization:{organization_id}",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "parentOrganization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f75b0f9f-8ac4-4778-b6b1-7ae9a2a6f337"
  },
  {
    "id": "communityManagementUseCasesOrganizationAccessControlsFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssign",
    "name": "Find a Member's Organization Access Control",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Access Controls"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=roleAssignee",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "roleAssignee",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "a31ec584-b787-4589-a716-92a3089762eb"
  },
  {
    "id": "communityManagementUseCasesOrganizationAccessControlsFindOrganizationAdministratorsGetOrganizationAclsQOrganizationOrgan",
    "name": "Find Organization Administrators",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Access Controls"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=organization&organization=urn%3Ali%3Aorganization%3A{organization_id}&role=ADMINISTRATOR&state=APPROVED",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d5d77556-d501-4e2a-91f6-a9154369f9c4"
  },
  {
    "id": "communityManagementUseCasesOrganizationAccessControlsFindOrganizationAccessControlGetOrganizationAclsQOrganizationOrgani",
    "name": "Find Organization Access Control",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Organization Access Controls"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=organization&organization=urn%3Ali%3Aorganization%3A{organization_id}",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organization",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "91856488-b059-4515-bde0-8e6ce2f538eb"
  },
  {
    "id": "communityManagementUseCasesMemberProfileAnalyticsTotalFollowersCountGetMemberFollowersCountQMe",
    "name": "Total Followers Count",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Member Profile Analytics"
    ],
    "method": "GET",
    "url": "/memberFollowersCount?q=me",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "me",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "9ff0ac3a-8ee8-49af-b42c-f541e407fb10"
  },
  {
    "id": "communityManagementUseCasesMemberProfileAnalyticsFollowersCountByDataRangeGetMemberFollowersCountQDateRangeDateRangeStar",
    "name": "Followers Count By DataRange",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Member Profile Analytics"
    ],
    "method": "GET",
    "url": "/memberFollowersCount?q=dateRange&dateRange=(start:(year:2024,month:4,day:20),end:(year:2024,month:5,day:15))",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "dateRange",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c253367d-10c5-4b8f-84b8-45fe83219c99"
  },
  {
    "id": "communityManagementUseCasesMemberPostAnalyticsAggregateAnalyticsForMemberPostsPostMemberCreatorPostAnalyticsQMeQueryType",
    "name": "Aggregate Analytics for Member Posts",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Member Post Analytics"
    ],
    "method": "POST",
    "url": "/memberCreatorPostAnalytics?q=me&queryType=REACTION&aggregation=DAILY&dateRange=(start:(day:4,month:5,year:2024),end:(day:6,month:5,year:2024))",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "finder",
      "name": "me",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ef072cf8-0df5-46a6-96ee-377cb1db0302"
  },
  {
    "id": "communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberPostPostMemberCreatorPostAnalyticsQEntityEntityS",
    "name": "Analytics for Specific Member Post",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Member Post Analytics"
    ],
    "method": "POST",
    "url": "/memberCreatorPostAnalytics?q=entity&entity=(share:urn%3Ali%3Ashare%3A{share_id})&queryType=REACTION&aggregation=DAILY&dateRange=(start:(day:4,month:5,year:2024),end:(day:6,month:5,year:2024))",
    "variables": [
      "share_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "finder",
      "name": "entity",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "9239b8e2-f8d3-44cf-ac49-d8477c39b284"
  },
  {
    "id": "communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberVideoPostPostMemberCreatorVideoAnalyticsQEntityE",
    "name": "Analytics for Specific Member VIDEO Post",
    "collection": "Community Management",
    "access": "community",
    "folder": [
      "Use Cases",
      "Member Post Analytics"
    ],
    "method": "POST",
    "url": "/memberCreatorVideoAnalytics?q=entity&entity=(share:urn%3Ali%3Ashare%3A{share_id})&queryType=VIDEO_PLAY&aggregation=TOTAL&dateRange=(start:(day:15,month:5,year:2024),end:(day:16,month:5,year:2024))",
    "variables": [
      "share_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "finder",
      "name": "entity",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "123e5b45-42b6-4e1f-99a6-deac8a1a1d6e"
  },
  {
    "id": "companyIntelligenceApiFetchAllAdAccountsOfTheAuthenticatedUserGetAdAccountUsersQAuthenticatedUser",
    "name": "Fetch all ad accounts of the authenticated user",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/adAccountUsers?q=authenticatedUser",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "authenticatedUser",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "bcd1424b-baee-4661-9f16-ba6e109400f3"
  },
  {
    "id": "companyIntelligenceApiSearchForCampaignsUsingSearchCriteriaGetAdAccountsAdAccountsIdAdCampaignsQSearchSearchCampaignGrou",
    "name": "Search for campaigns using search criteria",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/adAccounts/{adAccountsId}/adCampaigns?q=search&search.campaignGroup.values[0]=urn:li:sponsoredCampaignGroup:{campaigngroup_id}",
    "variables": [
      "adAccountsId",
      "campaigngroup_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "04564c05-ce1e-4e0f-992f-21d9ff916245"
  },
  {
    "id": "companyIntelligenceApiFetchExistingAdSegmentsBasedOnAdAccountGetAdSegmentsQAccountAccountsListUrn3Ali3AsponsoredAccount3",
    "name": "Fetch existing ad segments based on ad account",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/adSegments?q=account&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "690b3db5-c932-4b3a-a16f-0c101eec4acd"
  },
  {
    "id": "companyIntelligenceApiFetchAccountIntelligenceDataUsingLookbackWindowFilterGetAccountIntelligenceQAccountStart0Count10Ac",
    "name": "Fetch account intelligence data using lookback window filter",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_7_DAYS)",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "2502956c-b4ce-49df-896e-7b52c1d9195e"
  },
  {
    "id": "companyIntelligenceApiFetchAccountIntelligenceDataUsingAdSegmentFilterGetAccountIntelligenceQAccountStart0Count10Account",
    "name": "Fetch account intelligence data using ad segment filter",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_7_DAYS,adSegments:List(urn%3Ali%3AadSegment%3A{adsegment_id1},urn%3Ali%3AadSegment%3A{adsegement_id2}))",
    "variables": [
      "adsegement_id2",
      "adsegment_id1",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e4fa9c7f-3105-4adf-b89c-11bd1ab99232"
  },
  {
    "id": "companyIntelligenceApiFetchAccountIntelligenceDataUsingCampaignFilterGetAccountIntelligenceQAccountStart0Count10AccountU",
    "name": "Fetch account intelligence data using campaign filter",
    "collection": "Company Intelligence API",
    "access": "restricted",
    "folder": [],
    "method": "GET",
    "url": "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_30_DAYS,campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id})",
    "variables": [
      "campaign_id",
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "eaf94ad7-ef07-41dd-a0be-bbf2ffe4c05a"
  },
  {
    "id": "contentApisUseCasesInMailContentCreateInMailContentPostHttpsBaseUrlRestInMailContents",
    "name": "Create InMail Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "InMail Content"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/rest/inMailContents/",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "API to create an inMail Content.",
    "postmanId": "5fe54135-e7a6-42f9-ac6e-9d8d7c10d4ed"
  },
  {
    "id": "contentApisUseCasesInMailContentGetInMailContentGetHttpsBaseUrlRestInMailContentsAdInMailContentId",
    "name": "Get InMail Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "InMail Content"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/inMailContents/{adInMailContentId}",
    "variables": [
      "adInMailContentId"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "API to retrieve an inMail Content.",
    "postmanId": "5cd2d657-f542-460b-88c9-b03a75e5c45f"
  },
  {
    "id": "contentApisUseCasesInMailContentUpdateInMailContentPostHttpsBaseUrlRestInMailContentsAdInMailContentId",
    "name": "Update InMail Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "InMail Content"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/rest/inMailContents/{adInMailContentId}",
    "variables": [
      "adInMailContentId"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "API to update an inMail Content.",
    "postmanId": "17b0e481-dd6b-4cc9-a056-579bc311c345"
  },
  {
    "id": "contentApisUseCasesInMailContentBatchGetInMailContentGetHttpsBaseUrlRestInMailContentsIdsEncoded20adInMailContentIdIdsEn",
    "name": "Batch Get InMail Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "InMail Content"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/inMailContents?ids={encoded%20adInMailContentId}&ids={encoded%20adInMailContentId}",
    "variables": [],
    "hasBody": false,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "API to retrieve an inMail Content in Batches.",
    "postmanId": "8c85ccdc-8187-40fc-888d-a54d8410da53"
  },
  {
    "id": "contentApisUseCasesInMailContentSendTestInMailPostHttpsBaseUrlRestInMailContentsActionSendTestInMail",
    "name": "Send Test InMail",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "InMail Content"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/rest/inMailContents?action=sendTestInMail",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "action",
      "name": "sendTestInMail",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "API to send/share an inMail Content.",
    "postmanId": "2c02b5b5-961b-4dfa-bb77-655bc387c63f"
  },
  {
    "id": "contentApisUseCasesImageAdUploadAnImagePutUploadUrl",
    "name": "Upload an Image",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "PUT",
    "url": "/{upload_url}",
    "variables": [
      "upload_url"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This is a generic Upload URL call without init.",
    "postmanId": "e8a8a611-03ec-4a6f-ab99-0221c11a4933"
  },
  {
    "id": "contentApisUseCasesImageAdInitializeImageUploadPostImagesActionInitializeUpload",
    "name": "Initialize Image Upload",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "POST",
    "url": "/images?action=initializeUpload",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "initializeUpload",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Use the `initializeUpload` action to register the upload. When you initialize, you declare the upcoming upload. Use the upload URL to upload the image.",
    "postmanId": "f406f2a6-15dc-4e10-871a-20c21db016aa"
  },
  {
    "id": "contentApisUseCasesImageAdGetASingleImageGetHttpsBaseUrlRestImagesImageUrn",
    "name": "Get a single Image",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/images/{image_urn}",
    "variables": [
      "image_urn"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API rerieve a single image.",
    "postmanId": "9a20a440-c1db-4537-9f43-426bb3440c1f"
  },
  {
    "id": "contentApisUseCasesImageAdGetMultipleImagesGetRestImagesIdsListImageUrn1ImageUrn2",
    "name": "Get Multiple Images",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "GET",
    "url": "/rest/images?ids=List({image_urn1},{image_urn2})",
    "variables": [
      "image_urn1",
      "image_urn2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API rerieve multiple images.",
    "postmanId": "79b018c4-dc4b-4852-ac2f-f5f336dabbf4"
  },
  {
    "id": "contentApisUseCasesImageAdCreateImageContentGetHttpsBaseUrlRestPosts",
    "name": "Create Image Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/posts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API creates an image content.",
    "postmanId": "8ada3302-58e2-41a8-b4ea-d39539eb4fcf"
  },
  {
    "id": "contentApisUseCasesImageAdGetImageContentGetHttpsBaseUrlRestPostsPostId",
    "name": "Get Image Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/posts/{postId}",
    "variables": [
      "postId"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API rerieve the content associated with a single image.",
    "postmanId": "007a4438-c66f-455e-a6b0-e234d117f413"
  },
  {
    "id": "contentApisUseCasesImageAdFetchMultipleImageContentGetHttpsBaseUrlRestPostsIdsListEncoded20postIdEncoded20postId",
    "name": "Fetch multiple Image Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Image Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/rest/posts?ids=List({encoded%20postId},{encoded%20postId})",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API rerieve content from multiple images.",
    "postmanId": "0347bb38-de55-49dd-b362-dd3cf1d92237"
  },
  {
    "id": "contentApisUseCasesVideoAdUploadAVideoPutUploadUrl",
    "name": "Upload a Video",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Video Ad"
    ],
    "method": "PUT",
    "url": "/{upload_url}",
    "variables": [
      "upload_url"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This is a generic API to upload the data.",
    "postmanId": "47dcbf0c-dd34-4dc0-8160-bfc72620104d"
  },
  {
    "id": "contentApisUseCasesVideoAdInitializeVideoUploadPostHttpsBaseUrlVideosActionInitializeUpload",
    "name": "Initialize Video Upload",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Video Ad"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/videos?action=initializeUpload",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "initializeUpload",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Use the `initializeUpload` action to register the upload. When you initialize, you declare the upcoming upload. Use the upload URL from the `uploadInstructions` to upload the video.",
    "postmanId": "e5584630-3621-461d-b3e5-7861aead2f24"
  },
  {
    "id": "contentApisUseCasesVideoAdGetASingleVideoGetHttpsBaseUrlImagesImageUrn",
    "name": "Get a single video",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Video Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/images/{image_urn}",
    "variables": [
      "image_urn"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API retrieves a single video.",
    "postmanId": "1066865c-ae2e-4663-ab34-22e3f9a2df1b"
  },
  {
    "id": "contentApisUseCasesVideoAdGetMultipleVideosGetHttpsBaseUrlImagesIdsListImageUrn1ImageUrn2",
    "name": "Get Multiple Videos",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Video Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/images?ids=List({image_urn1},{image_urn2})",
    "variables": [
      "image_urn1",
      "image_urn2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API retrieves multiple videos.",
    "postmanId": "88e13e0b-12f3-4d6b-ab39-0ee757405d12"
  },
  {
    "id": "contentApisUseCasesCreativesCreateAnOrganicCreativePostHttpsBaseUrlCreatives",
    "name": "Create an Organic Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "You can sponsor an existing organic post that has been serving your company page followers and gone viral.",
    "postmanId": "2a840bad-7eb2-4a21-8301-1c3a18784abb"
  },
  {
    "id": "contentApisUseCasesCreativesCreateAnSponsoredCreativePostHttpsBaseUrlCreativesActionCreateInline",
    "name": "Create an Sponsored Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives?action=createInline",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "action",
      "name": "createInline",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API creates a sponsored content by adding the action as createInline.",
    "postmanId": "17531763-a0b3-4e03-9c70-8417236ddc7e"
  },
  {
    "id": "contentApisUseCasesCreativesGetASponsoredCreativeGetHttpsBaseUrlCreativesUrnCreatives",
    "name": "Get a Sponsored Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/creatives/{urn_creatives}",
    "variables": [
      "urn_creatives"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c6655e10-4d5f-40ed-8569-d37be2710bcf"
  },
  {
    "id": "contentApisUseCasesCreativesSearchForCreativeGetHttpsBaseUrlCreativesAccountsListId1Id2Id3CampaignsListId1Id2Id3ContentR",
    "name": "Search for Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/creatives?accounts=List(id1,id2,id3)&campaigns=List(id1,id2,id3)&contentReferences=List(id1,id2,id3)&creatives=List(id1,id2,id3)&intendedStatuses=List(ARCHIVED,CANCELED,ARCHIVED)&isTestAccount=true&isTotalIncluded=false&leadgenCreativeCallToActionDestinations=List()&q=criteria&sortOrder=ASCENDING",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "criteria",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "You can search for creative content in order to get a collection of creatives matching your search parameters. The Creative API currently supports search by `creative id`, `campaign`, `account`, `content reference`, `intendedStatus`, `leadgenCreativeCallToActionDestinations` and test fields. The API supports finding creatives from multiple accounts. The values within each field are displayed with 'or' (ORed) and values across fields are displayed with 'and' (ANDed).",
    "postmanId": "a07adddc-6f6e-4d1a-b19c-92acd0e72991"
  },
  {
    "id": "contentApisUseCasesCreativesUpdateACreativePostHttpsBaseUrlCreativesCreative20Id",
    "name": "Update a Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives/{creative%20ID}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "You can change the details of following Creatives fields: \\* `intendedStatus`: \\* `leadgenCallToAction`: field `adFormUrn` - The ad form that is a target destination for the `callToAction` button. It can only be modified when the creative is in DRAFT status. It is read only once it is set for a creative and once it transitions to any non-draft intended status. \\* `leadgenCallToAction`: field label `-Label` for the `callToAction` button This API updates a sponsored creative.",
    "postmanId": "85990c2a-372e-4eb7-aa29-10b7722f3099"
  },
  {
    "id": "contentApisUseCasesCreativesDeleteACreativeDeleteHttpsBaseUrlCreativesCreative20Id",
    "name": "Delete a Creative",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Creatives"
    ],
    "method": "DELETE",
    "url": "/https://{baseUrl}/creatives/{creative%20ID}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "A Creative can be deleted. Use DELETE method to delete a creative that meets one of the following conditions. To start the process of deleting other creative, update the status to `PENDING_DELETION`. \\* It is in a DRAFT state. \\* It is linked to a Campaign in a DRAFT state. \\* It is a video ad creative and `processingState` is `PROCESSING_FAILED`. The header X-RestLi-Method must be included in the request and set to `DELETE`.",
    "postmanId": "c22be0b9-8f53-45a0-b03e-413af4504cfa"
  },
  {
    "id": "contentApisUseCasesPostsCreateOrganicPostPostHttpsBaseUrlPosts",
    "name": "Create Organic Post",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/posts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Simplest form of post creation where an organic post is made ith a sample text at a page.",
    "postmanId": "09a9907f-dd15-40d7-aa20-825c559b3860"
  },
  {
    "id": "contentApisUseCasesPostsGetPostsByUrnGetHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn",
    "name": "Get Posts by URN",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/posts/{encoded%20ugcPostUrn|shareUrn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Creating posts with image requires uploading an image asset to obtain a Image URN (urn:li:image:{id}) for creating the post. See the [Images API](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/images-api?view=li-lms-2022-08) for instructions on how to do this.",
    "postmanId": "077f31c4-f6c5-42a8-8e48-841b308b9200"
  },
  {
    "id": "contentApisUseCasesPostsGetMultiplePostByUrnGetHttpsBaseUrlPostsIdsListEncoded20ugcPostUrnEncoded20ugcPostUrn",
    "name": "Get Multiple Post by URN",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/posts?ids=List({encoded%20ugcPostUrn},{encoded%20ugcPostUrn})",
    "variables": [],
    "hasBody": false,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Multiple posts can be retrieved and viewed in a single API call by passing in multiple UGC Posts or share URNs into the `ids` parameter. The UGC Post URNs should be passed in `List` format and should be encoded as shown in the examples below. Note that the `,` in the `List` separating each URN does not need to be encoded.",
    "postmanId": "458b83b2-ff54-4a40-a8b6-5dc234a46ad2"
  },
  {
    "id": "contentApisUseCasesPostsFindPostByAccountGetHttpsBaseUrlPostsDscAdAccountEncode20dscAdAccountQDscAdAccount",
    "name": "Find post by Account",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/posts?dscAdAccount={encode%20dscAdAccount}&q=dscAdAccount",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "dscAdAccount",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "You can retrieve all posts with the specific Sponsored Account and the content types with the following parameters:",
    "postmanId": "dcaca17d-7e64-42fa-ab1c-8baf862c3e7f"
  },
  {
    "id": "contentApisUseCasesPostsUpdateAPostPostHttpsBaseUrlPostsShared20IdUgcPosts20Id",
    "name": "Update a Post",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/posts/{shared%20ID}/{ugcPosts%20ID}",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "The following `posts` field are available to update. Refer to [Schema](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/shares/posts-api?view=li-lms-2022-08&tabs=http#post-schema) for complete field details. | Field | Description | | --- | --- | | commentary | String | | contentCallToActionLabel | contentCallToActionLabel text | | contentLandingPage | URL of the landing page | | reshareContext | | | lifecycleState | | | adContext | \\* dscName: Update the name of the sponsored content<br>\\* dscStatus: Update the status of the sponsored content |",
    "postmanId": "71286de1-7b7e-46d9-927d-51361cc4082e"
  },
  {
    "id": "contentApisUseCasesPostsDeleteAPostDeleteHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn",
    "name": "Delete a Post",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Posts"
    ],
    "method": "DELETE",
    "url": "/https://{baseUrl}/posts/{encoded%20ugcPostUrn|shareUrn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Post deletions are idempotent. Deletion requests for a previously deleted UGC Post will return a `204` code - No Content. ####",
    "postmanId": "fb89409d-f71a-4f7a-b19b-6b856761fc79"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredConversationsCreateASponsoredConversationPostHttpsBaseUrlConversationAds",
    "name": "Create a Sponsored Conversation",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Conversations"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Successful response will have Status `201 Created` and the ID in the `x-linkedin-id` response header. For example,`urn:li:sponsoredConversation:164380864`",
    "postmanId": "609fde25-01fa-4836-b463-31b9dd412ea0"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredConversationsGetASponsoredConversationGetHttpsBaseUrlConversationAdsConversati",
    "name": "Get a Sponsored Conversation",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Conversations"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Sample Response JSONCopy ``` { \"id\": \"urn:li:sponsoredConversation:185204\", \"parentAccount\": \"urn:li:sponsoredAccount:520866471\" } ```",
    "postmanId": "17f732dc-6aca-4cf0-a637-17524b8e4bf3"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredConversationsGetMultipleSponsoredConversationsGetHttpsBaseUrlConversationAdsId",
    "name": "Get Multiple Sponsored Conversations",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Conversations"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/conversationAds?ids=List({conversation-urn1},{conversation-urn2})'",
    "variables": [],
    "hasBody": false,
    "restliMethod": "BATCH_GET",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Makes a BATCH_GET request to let a list of conversations that are created. Sample Response JSONCopy ``` { \"statuses\": { \"urn:li:sponsoredConversation:704255\": 200, \"urn:li:sponsoredConversation:703695\": 200 }, \"results\": { \"urn:li:sponsoredConversation:704255\": { \"id\": \"urn:li:sponsoredConversation:704255\", \"parentAccount\": \"urn:li:sponsoredAccount:520866471\" }, \"urn:li:sponsoredConversation:703695\": { \"id\": \"urn:li:sponsoredConversation:703695\", \"parentAccount\": \"urn:li:sponsoredAccount:520866471\", } }, \"errors\": {} } ```",
    "postmanId": "fadfc210-f6ca-4f03-acea-4f4ae315ef75"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredConversationsUpdateASponsoredConversationPostHttpsBaseUrlConversationAdsConver",
    "name": "Update a Sponsored Conversation",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Conversations"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "In the following example, the `firstMessageContent` field is changed to point to the first message of the conversation.",
    "postmanId": "c22399ff-9cd3-43d9-98c9-dd1b939e7d4b"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsCreateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon",
    "name": "Create Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds/{conversationAdsId}/sponsoredMessageContents",
    "variables": [
      "conversationAdsId"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "A successful response returns a `201 Created` HTTP status code and the ID in the `x-linkedin-id response` header, e.g. `\"urn:li:sponsoredMessageContent:(urn:li:sponsoredConversation:186604,14277)\"`.",
    "postmanId": "3eb220f9-decc-4e1e-8bd0-b0a246ff2b04"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsConvers",
    "name": "Get Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents/{messageUrn}",
    "variables": [
      "conversationUrn",
      "messageUrn"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieves just a single message content from all the conversations in a conversation Ad.",
    "postmanId": "7dd4df17-4df8-435e-9f21-652c2f419ffc"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsGetAllSponsoredMessageContentGetHttpsBaseUrlConversationAdsConv",
    "name": "Get All Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieves just all the message contents from all the conversations in a conversation Ad.",
    "postmanId": "375ac2c7-3488-40c7-a659-2be5d6f57fff"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsUpdateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon",
    "name": "Update Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents/{messageUrn}",
    "variables": [
      "conversationUrn",
      "messageUrn"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Updates the message contents from all the conversations in a conversation Ad.",
    "postmanId": "d93599ba-84ed-4184-8adb-f057cbb64942"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsBatchCreateSponsoredMessageContentPostHttpsBaseUrlConversationA",
    "name": "Batch create Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds/{conversationAdsId}/sponsoredMessageContents",
    "variables": [
      "conversationAdsId"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Creates Sponsored Message Content in Batches.",
    "postmanId": "c68d37f2-3e5b-4d1d-8c7c-05357a3298ae"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsBatchGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsCo",
    "name": "Batch get Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": false,
    "restliMethod": "BATCH_GET",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieves Sponsored Message Content in Batches.",
    "postmanId": "e8577cfd-0498-47b7-a134-b1e1c3a7a330"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsBatchUpdateSponsoredMessageContentPostHttpsBaseUrlConversationA",
    "name": "Batch update Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": true,
    "restliMethod": "BATCH_UPDATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Updates Sponsored Message Content in Batches.",
    "postmanId": "9437c397-8297-40b0-9057-1210735f3565"
  },
  {
    "id": "contentApisUseCasesConversationAdSponsoredMessageContentsBatchDeleteSponsoredMessageContentDeleteHttpsBaseUrlConversatio",
    "name": "Batch delete Sponsored Message Content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Conversation Ad",
      "Sponsored Message Contents"
    ],
    "method": "DELETE",
    "url": "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})'",
    "variables": [
      "conversationUrn"
    ],
    "hasBody": false,
    "restliMethod": "BATCH_DELETE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Deletes Sponsored Message Content in Batches.",
    "postmanId": "03f1db07-fe26-4289-a700-16357732e538"
  },
  {
    "id": "contentApisUseCasesDynamicFollowerAdCreateADynamicFollowerAdPostHttpsBaseUrlCreatives",
    "name": "Create a Dynamic Follower Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Dynamic Follower Ad"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "A successful response returns a `201 Created HTTP` status code and the ID in the `x-linkedin-id` response header. For example, `urn:li:sponsoredCreative:164380864` ##",
    "postmanId": "eaf11327-1dc4-437a-bc8c-0b4b8b6e6531"
  },
  {
    "id": "contentApisUseCasesDynamicFollowerAdGetADynamicFollowerAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Get a Dynamic Follower Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Dynamic Follower Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrieves a dynamic follower ad after passing an urn. A successful response returns a `HTTP 200` status code. ##",
    "postmanId": "9ee7d171-3afc-46a8-af80-bedb3553d969"
  },
  {
    "id": "contentApisUseCasesDynamicFollowerAdUpdateADynamicFollowerAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Update a Dynamic Follower Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Dynamic Follower Ad"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Updates a dynamic follower ad after passing an urn. A successful response returns a `204 No Content` HTTP status code. ##",
    "postmanId": "183b47e7-da2e-4df7-99c8-a3a0427f8072"
  },
  {
    "id": "contentApisUseCasesDynamicFollowerAdDeleteADynamicFollowerAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Delete a Dynamic Follower Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Dynamic Follower Ad"
    ],
    "method": "DELETE",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Updates a dynamic follower ad after passing an urn. A successful response returns a `204 No Content`. ##",
    "postmanId": "416d5aea-aacb-40b6-aff6-d5ab8e0586d5"
  },
  {
    "id": "contentApisUseCasesSpotlightAdCreateADynamicSpotlightAdPostHttpsBaseUrlCreatives",
    "name": "Create a Dynamic Spotlight Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Spotlight Ad"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Creates a Dynamic Spotlight Ad Creative. A successful response returns a `201 Created HTTP` status code and the ID in the `x-linkedin-id` response header. For example, `urn:li:sponsoredCreative:123456789` ##",
    "postmanId": "5f572289-ec04-4c67-90be-f0b426743592"
  },
  {
    "id": "contentApisUseCasesSpotlightAdGetADynamicSpotlightAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Get a Dynamic Spotlight Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Spotlight Ad"
    ],
    "method": "GET",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Retrives a Dynamic Spotlight Ad. Sample Response JSONCopy ``` { \"servingHoldReasons\": [ \"UNDER_REVIEW\", \"CAMPAIGN_STOPPED\" ], \"lastModifiedAt\": 1648512200000, \"lastModifiedBy\": \"urn:li:member:123\", \"content\": { \"spotlight\": { \"organizationName\": \"LinkedIn Demo\", \"showMemberProfilePhoto\": true, \"landingPage\": \"http://linkedin.com\", \"description\": \"Check out this demo\", \"logo\": \"urn:li:image:abc\", \"headline\": \"Spotlight Ad Demo\", \"callToAction\": \"Join Us Now\" } }, \"createdAt\": 1648512200000, \"createdBy\": \"urn:li:member:123\", \"isTest\": false, \"review\": { \"status\": \"PENDING\" }, \"isServing\": false, \"campaign\": \"urn:li:sponsoredCampaign:123\", \"id\": \"urn:li:sponsoredCreative:123456789\", \"intendedStatus\": \"ACTIVE\", \"account\": \"urn:li:sponsoredAccount:123\" } ``` ##",
    "postmanId": "bf93dfa8-de6f-4b6e-b211-5f08b8e5b5e9"
  },
  {
    "id": "contentApisUseCasesSpotlightAdUpdateADynamicSpotlightAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Update a Dynamic Spotlight Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Spotlight Ad"
    ],
    "method": "POST",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Update a Dynamic Spotlight Ad Creative \\* [http](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/version/spotlight-ads?view=li-lms-2022-08&tabs=http#tabpanel_3_http) \\* [curl](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/version/spotlight-ads?view=li-lms-2022-08&tabs=http#tabpanel_3_curl) HTTPCopy ``` POST https://api.linkedin.com/rest/creatives/{sponsoredCreative-urn} ``` JSONCopy ``` { \"patch\": { \"$set\": { \"content\": { \"spotlight\": { \"callToAction\": \"New Action\", \"description\": \"New Description\", \"headline\": \"New Headline\", \"landingPage\": \"http://example.com\", \"organizationName\": \"New Organization Name\", \"logo\": \"urn:li:image:def\", \"showMemberProfilePhoto\": false } } } } } ``` A successful response returns a `204 No Content`.",
    "postmanId": "3488de6f-88ca-4ab5-bcb1-9cd43c6332a7"
  },
  {
    "id": "contentApisUseCasesSpotlightAdDeleteADynamicSpotlightAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn",
    "name": "Delete a Dynamic Spotlight Ad",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Spotlight Ad"
    ],
    "method": "DELETE",
    "url": "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Delete a Dynamic Spotlight Ad Creative \\* [http](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/version/spotlight-ads?view=li-lms-2022-08&tabs=http#tabpanel_4_http) \\* [curl](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/advertising-targeting/version/spotlight-ads?view=li-lms-2022-08&tabs=http#tabpanel_4_curl) HTTPCopy ``` DELETE https://api.linkedin.com/rest/creatives/{sponsoredCreative-urn} ``` A successful response returns a `204 No Content`.",
    "postmanId": "06febf2c-9a12-45fa-bd0f-55bf5b6ee7dd"
  },
  {
    "id": "contentApisUseCasesDocumentAdUploadTheDocumentFileSelectADocumentFileInTheBodyForPostmanToUsePutDocumentUploadurl",
    "name": "Upload the Document file (select a document file in the Body for postman to use)",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "PUT",
    "url": "/{document_uploadurl}",
    "variables": [
      "document_uploadurl"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "1b259a0e-7a56-4298-b253-782ae93c8b00"
  },
  {
    "id": "contentApisUseCasesDocumentAdInitializeDocumentUploadPostDocumentsActionInitializeUpload",
    "name": "Initialize Document Upload",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "POST",
    "url": "/documents?action=initializeUpload",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "action",
      "name": "initializeUpload",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "fc1747b8-56df-421e-86bc-ecd970bdd281"
  },
  {
    "id": "contentApisUseCasesDocumentAdGetASingleDocumentGetDocumentsDocumentAssetId",
    "name": "Get a single document",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "GET",
    "url": "//documents/{document_asset_id}",
    "variables": [
      "document_asset_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "8378e964-eaad-47c5-8b02-9861797d1491"
  },
  {
    "id": "contentApisUseCasesDocumentAdGetMultipleDocumentsGetRestImagesIdsListDocumentUrn1DocumentUrn2",
    "name": "Get multiple documents",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "GET",
    "url": "/rest/images?ids=List({document_urn1},{document_urn2})",
    "variables": [
      "document_urn1",
      "document_urn2"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "6222c819-dfca-461c-ae04-7cd5350e76a6"
  },
  {
    "id": "contentApisUseCasesDocumentAdCreateDocumentContentPostPosts",
    "name": "Create document content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "POST",
    "url": "/posts",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "2ecce1e8-1b15-42fa-9e39-55030418a973"
  },
  {
    "id": "contentApisUseCasesDocumentAdFetchMultipleDocumentContentGetPostsIdsListEncoded20postIdEncoded20postId",
    "name": "Fetch multiple document content",
    "collection": "Content APIs",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Document Ad"
    ],
    "method": "GET",
    "url": "/posts?ids=List({encoded%20postId},{encoded%20postId})",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "46de67e6-f7fd-440c-860d-eecf71de7206"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow2RetrieveAuthenticatedUserSSponsoredAdAccountsGetAdAccountUsersQAuthentic",
    "name": "2. Retrieve authenticated user's Sponsored Ad Accounts",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "GET",
    "url": "/adAccountUsers?q=authenticatedUser&fields=role,account,user",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "authenticatedUser",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "5742a6b1-4cd6-43d0-8c10-704076f50629"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow4FetchExistingConversionRulesForCapiInTheSelectedAdAccountGetConversionsQ",
    "name": "4. Fetch existing Conversion Rules for CAPI in the selected ad account",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "GET",
    "url": "/conversions?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&fields=conversionMethod,enabled,type,name,id,attributionType",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "account",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Fetch existing conversion rules in the selected ad account with this endpoint and parse the response to filter elements with `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "78d89ead-24c6-4875-b07b-fca6fe35c84b"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow6aCreateANewConversionRuleWithAutoAssociationToAllCampaignsPostConversion",
    "name": "6a. Create a new Conversion Rule with auto association to all campaigns",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "POST",
    "url": "/conversions?autoAssociationType=ALL_CAMPAIGNS",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "951533eb-5a72-4be1-869a-434652383999"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow6bCreateANewConversionRuleWithAutoAssociationToCampaignsBasedOnConversion",
    "name": "6b. Create a new Conversion Rule with auto association to campaigns based on conversion type",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "POST",
    "url": "/conversions?autoAssociationType=OBJECTIVE_BASED",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "462d28a1-c769-4021-973e-9ecd87b4b19e"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow6cCreateANewConversionRuleWithNoCampaignsAssociationPostConversions",
    "name": "6c. Create a new Conversion Rule with no campaigns association",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "POST",
    "url": "/conversions",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "4700c00f-2413-4bd8-b85b-c402f200f962"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow7aFetchActiveCampaignsGetAdAccountsSponsoredaccountIdAdCampaignsQSearchSe",
    "name": "7a. Fetch active campaigns",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "GET",
    "url": "/adAccounts/{sponsoredaccount_id}/adCampaigns?q=search&search=(status:(values:List(ACTIVE,DRAFT)))&fields=id,name",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Fetch existing conversion rules in the selected ad account with this endpoint and parse the response to filter elements with `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "1ab9a821-7eaa-430a-9b66-6f3f5f487cac"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow7cAssociateCampaignsToConversionRulePutCampaignConversionsCampaignUrn3Ali",
    "name": "7c. Associate campaigns to conversion rule",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "PUT",
    "url": "/campaignConversions/(campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id})",
    "variables": [
      "campaign_id",
      "conversion_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": true,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "90a5b50d-e02c-42e3-a017-610a53f8a17d"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow7dBatchAssociateMultipleCampaignsToConversionRulePutCampaignConversionsId",
    "name": "7d. Batch Associate Multiple Campaigns to Conversion Rule",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "PUT",
    "url": "/campaignConversions?ids=List((campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id}),(campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id_2},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id}))",
    "variables": [
      "campaign_id",
      "campaign_id_2",
      "conversion_id"
    ],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "a07d4193-2597-488e-a017-0fc35ef40a35"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow8aStreamConversionEventToTheConversionRulePostConversionEvents",
    "name": "8a. Stream conversion event to the conversion rule",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "POST",
    "url": "/conversionEvents",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "dad0bf49-0351-4546-ae64-3bc8d165a741"
  },
  {
    "id": "conversionsApiConversionEventsStreamingWorkflow8bStreamMultipleConversionEventsToTheConversionRulePostConversionEvents",
    "name": "8b. Stream multiple conversion events to the conversion rule",
    "collection": "Conversions API",
    "access": "marketing",
    "folder": [
      "Conversion Events Streaming Workflow"
    ],
    "method": "POST",
    "url": "/conversionEvents",
    "variables": [],
    "hasBody": true,
    "restliMethod": "BATCH_CREATE",
    "restli": {
      "kind": "batch",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "Create one or more conversion rules with this endpoint and set `conversionMethod` to `CONVERSIONS_API` for streaming conversions through API.",
    "postmanId": "f5dc5bea-e07e-4f66-a1f4-9da17a6a124a"
  },
  {
    "id": "eventsManagementApiUseCasesFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssignee",
    "name": "Find a Member's Organization Access Control",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=roleAssignee",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "roleAssignee",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d57a0f3c-b22d-4592-8577-bd354d25d24c"
  },
  {
    "id": "eventsManagementApiUseCasesGetEventByIdGetEventsId",
    "name": "Get Event by ID",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "GET",
    "url": "/events/{id}",
    "variables": [
      "id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "4eabbace-14f3-44c2-b402-b1d7cf8b3589"
  },
  {
    "id": "eventsManagementApiUseCasesFindEventsByOrganizerGetEventsQEventsByOrganizerOrganizerUrn3Ali3Aorganization3A7185861Start0",
    "name": "Find Events by Organizer",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "GET",
    "url": "/events?q=eventsByOrganizer&organizer=urn%3Ali%3Aorganization%3A7185861&start=0&count=10&excludeCancelled=true&timeBasedFilter=(lifeCycleState%3APAST)&entryCriteria=PUBLIC&sortOrder=END_TIME_DESC\n",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "eventsByOrganizer",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "a3bc7cea-b6c0-4d43-8f43-460982540c7f"
  },
  {
    "id": "eventsManagementApiUseCasesFindEventsWithLeadGenFormByOrganizerGetEventsOrganizerUrn3Ali3Aorganization3A7185861Start0Cou",
    "name": "Find Events with Lead Gen Form by Organizer",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "GET",
    "url": "/events?organizer=urn%3Ali%3Aorganization%3A7185861&start=0&count=2&q=organizerLeadGenFormEnabledEvents",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "organizerLeadGenFormEnabledEvents",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f9dad8ee-308b-47af-a2a8-515657d73543"
  },
  {
    "id": "eventsManagementApiUseCasesCreateOrganizationOwnedEventPostEvents",
    "name": "Create Organization Owned Event",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "POST",
    "url": "/events",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "4196db6f-ac89-4992-aa5d-417d6bfd667e"
  },
  {
    "id": "eventsManagementApiUseCasesCreatePersonOwnedEventPostEvents",
    "name": "Create Person Owned Event",
    "collection": "Events Management API",
    "access": "community",
    "folder": [
      "Use Cases"
    ],
    "method": "POST",
    "url": "/events",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d0b69395-6d86-49c8-8389-1be9bf4b06c4"
  },
  {
    "id": "leadSyncUseCasesOrganic3GetTheUserSOrganizationSCompanyPagesGetOrganizationAclsQRoleAssigneeStateApprovedCount10Start0",
    "name": "3. Get the user's organization(s) (company pages)",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=roleAssignee&state=APPROVED&count=10&start=0",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "roleAssignee",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "In this step, you'll retrieve a list of all the organizations that the logged in user has an approved role for. The authenticated user must have one of the roles mentioned in our [permissions](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#permissions) table to successfully sync leads (note this may be different depending on the lead type chosen in the previous step). Additional information on this API is available on the [Organization Access Control page](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/community-management/organizations/organization-access-control-by-role?tabs=http#find-a-members-organization-access-control-information). **Step 3: Ask user to select the organization(s) for which they are interested in syncing leads for**",
    "postmanId": "88de8626-8ac9-401c-9f66-78930a21173f"
  },
  {
    "id": "leadSyncUseCasesOrganic5GetFormsForTheUserSOrganizationGetLeadFormsOwnerOrganizationUrn3Ali3Aorganization3AOrganizationI",
    "name": "5. Get forms for the user's Organization",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "GET",
    "url": "/leadForms?owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&q=owner&count=10&start=0",
    "variables": [
      "organization_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "At this point, the user has picked the organization (compnay page) they are trying to collect leads for and you've validated they have the proper company page role. This step will retrieve the form(s) associated with the selected organization. --- **5\\. Map Lead Gen Form fields to destination fields** Using the API response data from the previous step, your application should ask the user to map questions, consents, and hidden fields to the appropriate fields in the destination system (e.g. a CRM). All questions, consents, and hidden fields from the form should be mappable. `predefinedField` fields may be mapped automatically for the user, but all others will require the user to map them manually. Optionally, allow the user to map the organization id, organization name, event id, event name, product page id, product page name, form id, and form name (this additional metadata can be pulled back via the `leadFormResponses` endpoint in the next step). This additional metadata helps your customers with lead attribution. **Quick tip:** When it comes to mapping the `predefinedField` fields that are auto populated from the member’s profile, it's important to understand that the localized language of the form could be a language other than English. Due to this, you should use the `predefinedField` field so the user doesn't have to map the same field in different form languages separately. For custom questions you will need to use the `question` field as there is no predefinedField for custom questions. | **Field** | **Language Information** | | --- | --- | | name | This value will be translated to the localized language of the user who created the form (which could be different than the localized language of the form) | | predefinedField | ENUM for the pre-populated field (e.g EMAIL) | | question | This value will be translated to the localized form language | **Step 6: Ask the user what lead types they would like to sync (allow multiple)** - **Events (EVENT)** - **Company/showcase pages (COMPANY)** - **Product pages (ORGANIZATION_PRODUCT)**",
    "postmanId": "b5c200c9-e8d0-4132-83ba-c958488b2e80"
  },
  {
    "id": "leadSyncUseCasesOrganic7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerOrganiza",
    "name": "7. Allow the user to pull back past leads one time to get any missed leads",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "GET",
    "url": "/leadFormResponses?q=owner&owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&leadType=(leadType:{leadtype_organic})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
    "variables": [
      "leadtype_organic",
      "organization_id",
      "timerange_end",
      "timerange_start"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example pulls back all form responses (leads) for the chosen organization for a given lead type. It also uses [field projection](https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/projections?context=linkedin/marketing/context) to pull back specific fields in the response and the `submittedAtTimeRange` field to pull back leads up to 365 days in the past. To pull back leads for other lead types make an additional API call with the appropriate [lead type ](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#leadtype-sub-object) (note the environment by default is set to COMPANY however, other lead types that are not the SPONSORED leadType are considered organic). LinkedIn will store form response (lead) data for up to 365 days. It is a best practice to allow the user to do a one time pull upon integration setup to ensure no leads are missed. Refer to [Lead Form Responses](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) documentation for more information.",
    "postmanId": "23d5c014-b6cd-45ea-8cbc-531a9cd6548d"
  },
  {
    "id": "leadSyncUseCasesOrganic8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerOrganizationUrn3Ali3Aorg",
    "name": "8. [PULL] Schedule periodic form response (lead) pulls",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "GET",
    "url": "/leadFormResponses?q=owner&owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&leadType=(leadType:{leadtype_organic})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
    "variables": [
      "leadtype_organic",
      "organization_id",
      "timerange_end",
      "timerange_start"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example pulls back all form responses (leads) for the chosen organization for a given lead type. It also uses [field projection](https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/projections?context=linkedin/marketing/context) to pull back specific fields in the response and the `submittedAtTimeRange` field to pull back leads up to 365 days in the past. To pull back leads for other lead types make an additional API call with the appropriate [lead type ](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#leadtype-sub-object) (note the environment by default is set to COMPANY however, other lead types that are not the SPONSORED leadType are considered organic). LinkedIn will store form response (lead) data for up to 365 days. It is a best practice to allow the user to do a one time pull upon integration setup to ensure no leads are missed. Refer to [Lead Form Responses](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) documentation for more information.",
    "postmanId": "54c05fb1-37ef-4746-bc50-1ba38fae71b9"
  },
  {
    "id": "leadSyncUseCasesOrganic8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications",
    "name": "8. [PUSH] Subscribe for lead notification webhooks",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "POST",
    "url": "/leadNotifications",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This is our recommended back practice (with a pull backup). [Register a lead notification webhook](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#lead-notification-subscriptions) to receive notifications for new leads. Lead notifications can also be subscribed at a more granular level and/or for a different lead type - see the linked documentation. This example registers the webhook url, [https://www.example.com](https://www.example.com/), at the organization level for leads of type COMPANY. For any new lead submitted on the company or showcase page, a webhook notification will be sent. **\\--Listen for lead notifications--** As leads flow into the user's organization, LinkedIn will send your webhook endpoint a notification for each lead. The notification body will contain content as laid out in our documentation [here.](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#example-payload-for-when-a-member-registers-for-an-event)",
    "postmanId": "e1f36494-eace-4e3b-9670-ad9761d5662b"
  },
  {
    "id": "leadSyncUseCasesOrganic9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfoAs",
    "name": "9. [PUSH] Fetch full lead data after a lead notification is received",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "GET",
    "url": "/leadFormResponses/{lead_id}?&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)",
    "variables": [
      "lead_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Responses can be fetched](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) for a single form response, multiple form responses, or at the Organization level. When a lead notification event is received, the form response id exists in the lead notification [content](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#example-payload-for-when-a-member-registers-for-an-event). This example pulls back data for a single form response (lead) by ID and uses field projection to pull back specific fields in the request response.",
    "postmanId": "2f52e1e0-68b5-4954-9fb9-4ac1eb317381"
  },
  {
    "id": "leadSyncUseCasesOrganicPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id",
    "name": "[PUSH] Delete a registered webhook by id",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Organic"
    ],
    "method": "DELETE",
    "url": "/leadnotifications/<webhook%20id>",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Delete a lead notification subsription](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#delete-lead-notification-url) When an integration is deleted within your platform, the associated webhooks should also be deleted to ensure that lead notifications are not unnecessarily being sent.",
    "postmanId": "56281e2a-f35c-4e24-af59-d1f62cbb0a12"
  },
  {
    "id": "leadSyncUseCasesSponsored2GetTheUserSSponsoredAccountsAdAccountsGetAdAccountsQSearchSearchStatusValuesListActiveTestFals",
    "name": "2. Get the user's sponsored accounts (ad accounts)",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/adAccounts?q=search&search=(status:(values:List(ACTIVE)),test:false)&fields=id,name,test,referenceInfo&count=10&start=0",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "search",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View [Search for Accounts](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#search-for-accounts) documentation for more information. This API call pulls back Ad Accounts that the member has access to where the status = ACTIVE and test = false (NOT a test Ad Account). Learn more about Test Ad Accounts [here](https://docs.microsoft.com/en-us/linkedin/marketing/integrations/ads/account-structure/create-and-manage-accounts?tabs=http#working-with-test-ad-accounts). For testing purposes, if you wish to use this example api to pull back a Test Ad Account, simply remove `test:false` from the search parameter. --- **3\\. Allow the user to select an Ad Account**",
    "postmanId": "fd0bbe2a-91e5-4d97-83e8-08d5708f82a0"
  },
  {
    "id": "leadSyncUseCasesSponsored4ValidateTheUserSOrganizationRoleGetOrganizationAclsQRoleAssigneeStateApproved",
    "name": "4. Validate the user's organization role",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/organizationAcls?q=roleAssignee&state=APPROVED",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "roleAssignee",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "View the [Organization Access Control](https://docs.microsoft.com/linkedin/marketing/integrations/community-management/organizations/organization-access-control-by-role?tabs=http#organization-roles) documentation. Take note of the organization (company page) from the previous request (`referenceInfo.organization.id`). A member must have access to not only the Sponsored Account (step 2) but also have one of the roles mentioned in our [permissions](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#permissions) table for the associated company page to successfully sync leads. If the user's role is not one of the approved roles for pulling leads, or the ad account does not have a company page associated to it (empty `referenceInfo` object in previous request) you should display a helpful message to the user guiding them on next steps. Below are two resources to better understand Page Admin vs Paid Media Admin: - [Permissions for Lead Gen Forms](https://www.linkedin.com/help/lms/answer/a421620/permissions-for-lead-gen-forms?lang=en) - [LinkedIn Page Admiin Roles - Overview](https://www.linkedin.com/help/lms/answer/4783)",
    "postmanId": "579e85dd-d70e-4681-be46-0809f5bb3102"
  },
  {
    "id": "leadSyncUseCasesSponsored5GetFormsForTheChosenSponsoredAccountGetLeadFormsQOwnerOwnerSponsoredAccountUrn3Ali3AsponsoredA",
    "name": "5. Get forms for the chosen Sponsored Account",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/leadForms?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&count=10&start=0",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "At this point, the user has picked the sponsored account they are trying to collect leads for and you have validated they have proper access to the ad account and associated company page. This step will retrieve the form(s) associated with the selected sponsored account. --- **6\\. Map Lead Gen Form fields to destination fields** Using the API response data from the previous step, your application should ask the user to map questions, consents, and hidden fields to the appropriate fields in the destination system (e.g. a CRM). All questions, consents, and hidden fields from the form should be mappable. `predefinedField` fields may be mapped automatically for the user, but all others will require the user to map them manually. Optionally, allow the user to map the ad account id, ad account name, campaign id, campaign name, creative id, creative name, form id, and form name (this additional metadata can be pulled back via the `leadFormResponses` endpoint in the next step). This additional metadata helps your customers with lead attribution. **Quick tip:** When it comes to mapping the `predefinedField` fields that are auto populated from the member’s profile, it's important to understand that the localized language of the form could be a language other than English. Due to this, you should use the `predefinedField` field so the user doesn't have to map the same field in different form languages separately. For custom questions you will need to use the `question` field as there is no predefinedField for custom questions. | **Field** | **Language Information** | | --- | --- | | name | This value will be translated to the localized language of the user who created the form (which could be different than the localized language of the form) | | predefinedField | ENUM for the pre-populated field | | question | This value will be translated to the localized form language |",
    "postmanId": "0463122d-4836-4b1d-b54b-dc05f8259610"
  },
  {
    "id": "leadSyncUseCasesSponsored7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerSponso",
    "name": "7. Allow the user to pull back past leads one time to get any missed leads",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/leadFormResponses?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&leadType=(leadType:{leadtype_sponsored})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
    "variables": [
      "leadtype_sponsored",
      "sponsoredaccount_id",
      "timerange_end",
      "timerange_start"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example pulls back all form responses (leads) for the chosen sponsored account. It also uses [field projection](https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/projections?context=linkedin/marketing/context) to pull back specific fields in the response and the `submittedAtTimeRange` field to pull back leads up to 365 days in the past. Currently the only sponsored leadType is `SPONSORED` LinkedIn will store form response (lead) data for up to 365 days. It is a best practice to allow the user to do a one time pull upon integration setup to ensure no leads are missed. Refer to [Lead Form Responses](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) documentation for more information.",
    "postmanId": "a146d37f-7b1c-40e2-9068-e48ab5f1fc97"
  },
  {
    "id": "leadSyncUseCasesSponsored8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerSponsoredAccountUrn3Al",
    "name": "8. [PULL] Schedule periodic form response (lead) pulls",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/leadFormResponses?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&leadType=(leadType:{leadtype_sponsored})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
    "variables": [
      "leadtype_sponsored",
      "sponsoredaccount_id",
      "timerange_end",
      "timerange_start"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "owner",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This example pulls back all form responses (leads) for the chosen sponsored account. It also uses [field projection](https://learn.microsoft.com/en-us/linkedin/shared/api-guide/concepts/projections?context=linkedin/marketing/context) to pull back specific fields in the response and the `submittedAtTimeRange` field to pull back leads up to 365 days in the past. Currently the only sponsored leadType is `SPONSORED` LinkedIn will store form response (lead) data for up to 365 days. It is a best practice to allow the user to do a one time pull upon integration setup to ensure no leads are missed. Refer to [Lead Form Responses](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) documentation for more information.",
    "postmanId": "2aa25102-db19-4957-a12c-edf5c2a40ede"
  },
  {
    "id": "leadSyncUseCasesSponsored8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications",
    "name": "8. [PUSH] Subscribe for lead notification webhooks",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "POST",
    "url": "/leadNotifications",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Register a lead notification webhook](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#lead-notification-subscriptions) to receive notifications for new leads. Lead notifications can also be subscribed at a more granular level - see the linked documentation. This example registers the webhook url, [https://www.example.com](https://www.example.com/), at the Ad Account level (sponsoredAccount). For any new lead submitted for campaigns that live within this Ad Account, a webhook notification will be sent. **Listen for lead notifications** As leads flow into the user's ad account, LinkedIn will send your webhook endpoint a notification for each lead. The notification body will contain content as laid out in our documentation [here.](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#example-payload-for-when-a-member-registers-for-an-event)",
    "postmanId": "1fa7e1dc-c82d-4301-8bac-b133cab4104e"
  },
  {
    "id": "leadSyncUseCasesSponsored9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfo",
    "name": "9. [PUSH] Fetch full lead data after a lead notification is received",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "GET",
    "url": "/leadFormResponses/{lead_id}?&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)",
    "variables": [
      "lead_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Responses can be fetched](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#get-lead-sync-form-responses) for a single form response, multiple form responses, or at the form or Ad Account level. When a lead notification event is received, the form response id exists in the lead notification [content](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#example-payload-for-when-a-member-registers-for-an-event). This example pulls back data for a single form response (lead) by ID and uses field projection to pull back specific fields in the request response.",
    "postmanId": "4e9c1245-a665-4cbb-bf7c-3ceffc266a23"
  },
  {
    "id": "leadSyncUseCasesSponsoredPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id",
    "name": "[PUSH] Delete a registered webhook by id",
    "collection": "Lead Sync",
    "access": "partner",
    "folder": [
      "Use Cases",
      "Sponsored"
    ],
    "method": "DELETE",
    "url": "/leadnotifications/<webhook%20id>",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "[Delete a lead notification subsription](https://learn.microsoft.com/en-us/linkedin/marketing/integrations/lead-sync/leadsync?tabs=http#delete-lead-notification-url) When an integration is deleted, the associated webhooks should also be deleted to ensure that lead notifications are not unnecessarily being sent.",
    "postmanId": "bef05848-2146-4eb8-a0b8-d42d0eaf4f14"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets",
    "name": "Get a list of available Ad Targeting Facets",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingFacets",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e259911b-b7bd-4bd8-b446-884f6b5c5f2a"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUr",
    "name": "Get all seniorities",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aseniorities&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "66940955-e9d7-4e46-a299-33ad0371c006"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
    "name": "Get all job functions",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AjobFunctions&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "02a4b743-1d3d-4140-98c9-43a841467b26"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
    "name": "Get all job titles (paginated)",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Atitles&fields=name,urn&start=0&count=1000&totals=false",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "59879266-668c-4d91-b2a7-dedc3fe129a4"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
    "name": "Get all skills (paginated)",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Askills&fields=name,urn&start=0&count=10000&totals=false",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "19c8caee-0b67-485f-9c05-97f9ccd26db6"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3",
    "name": "Get all interests",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Ainterests&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "2549f5af-36d1-422a-af94-175a9f9ffdaa"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
    "name": "Get all member behaviors",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AmemberBehaviors&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b368de08-f4bf-4af6-82fb-22181c394093"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUse",
    "name": "Get all yearsOfExperience ranges",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AyearsOfExperienceRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "7cf59e57-13b9-4d3a-9dba-fb420d9e667e"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3",
    "name": "Get all age ranges",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AageRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "584e0e27-5411-421e-8cd7-9d71852a377c"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn",
    "name": "Get all industries",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aindustries&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "aa89034d-26e3-4b9b-87d5-e5aec122b4b3"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUs",
    "name": "Get all company revenue categories",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Arevenue&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "661d33c6-5fa4-4354-8531-6229fed888d3"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQue",
    "name": "Get all company ranking list categories",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AcompanyCategory&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "a8898c13-2b0a-43b3-9f0a-5cdc1e7f50f6"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
    "name": "Get all company growth rate categories",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AgrowthRate&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e813d60b-28bb-4666-99ed-6544aa123161"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
    "name": "Get all company staff count categories",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AstaffCountRanges&fields=name,urn",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "adTargetingFacet",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "cb47ba4c-5db0-46fe-8890-42c4c1f84c4c"
  },
  {
    "id": "mediaPlanningAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20stat",
    "name": "Get Bing Geo locations using search typeahead",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Ad Targeting Entities"
    ],
    "method": "GET",
    "url": "/adTargetingEntities?q=typeahead&query=united%20states&facet=urn%3Ali%3AadTargetingFacet%3Alocations&queryVersion=QUERY_USES_URNS&start=0&count=10",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "typeahead",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "f94a8035-250e-4767-b079-62f49e3869b7"
  },
  {
    "id": "mediaPlanningForecastMediaPlansForecastReachCurvePostMediaPlanningActionForecastReaches",
    "name": "Forecast Reach Curve",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Forecast Media Plans"
    ],
    "method": "POST",
    "url": "/mediaPlanning?action=forecastReaches",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "forecastReaches",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "a84b25e4-9ddd-48b8-a6b1-8ddb7754917f"
  },
  {
    "id": "mediaPlanningForecastMediaPlansForecastReachPercentageCurvePostMediaPlanningActionForecastReaches",
    "name": "Forecast Reach Percentage Curve",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Forecast Media Plans"
    ],
    "method": "POST",
    "url": "/mediaPlanning?action=forecastReaches",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "forecastReaches",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "0b6d7d53-fa09-45ca-bfb8-c610b2f1d249"
  },
  {
    "id": "mediaPlanningForecastMediaPlansForecastImpressionCurvePostMediaPlanningActionForecastImpressions",
    "name": "Forecast Impression Curve",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Forecast Media Plans"
    ],
    "method": "POST",
    "url": "/mediaPlanning?action=forecastImpressions",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "forecastImpressions",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "56f7663a-67b0-4475-95da-0b7ad494bee0"
  },
  {
    "id": "mediaPlanningForecastMediaPlansForecastAvgLifetimeFrequencyPostMediaPlanningActionForecastImpressions",
    "name": "Forecast Avg Lifetime Frequency",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Forecast Media Plans"
    ],
    "method": "POST",
    "url": "/mediaPlanning?action=forecastImpressions",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "action",
      "name": "forecastImpressions",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "2ddf485c-9ed7-4027-8d13-3d56cecfcf3a"
  },
  {
    "id": "mediaPlanningManageMediaPlansCreateAMediaPlanPostMediaPlansForecastMetricTypeReach",
    "name": "Create a Media Plan",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Manage Media Plans"
    ],
    "method": "POST",
    "url": "/mediaPlans?forecastMetricType=REACH",
    "variables": [],
    "hasBody": true,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "example-only",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "05221844-5c4b-4a06-9f8e-b8bcd55fba62"
  },
  {
    "id": "mediaPlanningManageMediaPlansFetchAMediaPlanGetMediaPlansUrn3Ali3AmediaPlan3A123456AccountUrnUrn3Ali3AsponsoredAccount3A",
    "name": "Fetch a Media Plan",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Manage Media Plans"
    ],
    "method": "GET",
    "url": "/mediaPlans/urn%3Ali%3AmediaPlan%3A123456?accountUrn=urn%3Ali%3AsponsoredAccount%3A123456",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "resource",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "320065df-323d-4ebd-8747-5159e1b5051f"
  },
  {
    "id": "mediaPlanningManageMediaPlansFetchAllMediaPlansInAnAdAccountGetMediaPlansQGetAllMediaPlansAccountUrnUrn3Ali3AsponsoredAc",
    "name": "Fetch all Media Plans in an Ad Account",
    "collection": "Media Planning",
    "access": "restricted",
    "folder": [
      "Manage Media Plans"
    ],
    "method": "GET",
    "url": "/mediaPlans?q=getAllMediaPlans&accountUrn=urn%3Ali%3AsponsoredAccount%3A123456",
    "variables": [],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "getAllMediaPlans",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ab6fd64b-546c-4256-ad9a-d95f6c855976"
  },
  {
    "id": "reportingRoiUseCasesAdAnalyticsByCreativeCampaignWithCreativeTypeStatusCampaignNameTypeStatusCampaignGroupProjectionGetA",
    "name": "By Creative + Campaign with creative type,status & campaign name, type, status, campaign group projection",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Ad Analytics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivots=List(CREATIVE,CAMPAIGN)&fields=impressions,clicks,totalEngagements,comments,shares,reactions,approximateUniqueImpressions,externalWebsiteConversions,externalWebsitePostClickConversions,externalWebsitePostViewConversions,conversionValueInLocalCurrency,oneClickLeads",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API slice the conversion and the campaign data against campaign name, type, status and campaign group projection.",
    "postmanId": "d72ee9fc-4bf2-4202-906e-684ca533613d"
  },
  {
    "id": "reportingRoiUseCasesAdAnalyticsByCreativeWithContentProjectionForDifferentCreativeTypesGetAdAnalyticsQAnalyticsDateRange",
    "name": "By Creative with content projection for different creative types",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Ad Analytics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=CREATIVE&fields=pivotValues,impressions,likes,clicks,externalWebsiteConversions",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API slice the creative data against content projections for different creative types.",
    "postmanId": "671f4b2a-919a-4ab4-9b65-4e2320e41998"
  },
  {
    "id": "reportingRoiUseCasesAdAnalyticsByMemberIndustryWithNameProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Year202",
    "name": "By Member Industry with name projection",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Ad Analytics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=MEMBER_INDUSTRY&fields=impressions,clicks,landingPageClicks,totalEngagements,likes,comments,follows,shares,externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API pull the analytics data by slicing it through the member insdustry with name projection.",
    "postmanId": "1acbd2ec-8581-4810-a897-88648f7d3d38"
  },
  {
    "id": "reportingRoiUseCasesAdAnalyticsByConversionCampaignWithCampaignNameTypeStatusCampaignGroupProjectionGetAdAnalyticsQStati",
    "name": "By Conversion + Campaign with campaign name, type, status, campaign group projection",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Ad Analytics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivots=List(CONVERSION,CAMPAIGN)&fields=externalWebsiteConversions,externalWebsitePostClickConversions,externalWebsitePostViewConversions,costInLocalCurrency,externalWebsiteConversions,costInLocalCurrency,dateRange,pivotValues",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API slice the conversion and the campaign data against nme, type, status and campaign projection.",
    "postmanId": "f1315ecf-905a-4e85-9c02-16b8865e09c0"
  },
  {
    "id": "reportingRoiUseCasesAdAnalyticsByMemberCompanyWithNameWebsiteProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Y",
    "name": "By Member Company with name & website projection",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "Ad Analytics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=MONTHLY&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=MEMBER_COMPANY&fields=impressions,approximateUniqueImpressions,clicks,landingPageClicks,totalEngagements,likes,comments,follows,shares,externalWebsiteConversions,pivotValue,dateRange&projection=(*,elements*(*,approximateUniqueImpressions,%20pivotValue~(vanityName,localizedName,localizedWebsite)))",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "description": "This API pull the analytics data by slicing it through the member company with name and website projection.",
    "postmanId": "c398f6d2-d15b-4155-a2c1-7717359f6e49"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByObjectiveGetAdAnalyticsQStatisticsPivotsListValueObjectiveTy",
    "name": "Performance - by Objective",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&pivots=List((value:OBJECTIVE_TYPE),(value:CAMPAIGN))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "6481b1c8-da4e-4fbe-b3d9-fee6bac91255"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCampaignGetAdAnalyticsQAnalyticsPivotValueCampaignDateRangeS",
    "name": "Performance - by Campaign",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=(value:CAMPAIGN)&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "11dd40bd-b482-482a-9104-bc8d15f1187c"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCreativeGetAdAnalyticsQAnalyticsPivotValueCreativeDateRangeS",
    "name": "Performance - by Creative",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=(value:CREATIVE)&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "1f5c54f5-625d-46fa-943a-44c8653ef26c"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceDashboardOverviewGetAdAnalyticsQAnalyticsDateRangeStartYear202",
    "name": "Performance - Dashboard Overview",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&dateRange=(start:(year:2023,month:4,day:1),end:(year:2023,month:4,day:18))&timeGranularity=(value:DAILY)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&pivot=(value:CAMPAIGN)&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d2177f54-9895-42a9-a9c9-103888ba285b"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRa",
    "name": "Demographics - Member Company",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "e44cb229-05ff-4bf3-92de-04e709ad309c"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberFuntionGetAdAnalyticsQAnalyticsPivotMemberJobFunctionDa",
    "name": "Demographics - Member Funtion",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_JOB_FUNCTION&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "6a8d07d0-662d-42b8-9d75-652011aab49f"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSeniorityDa",
    "name": "Demographics - Member Seniority",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_SENIORITY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c0668f07-98f9-49a5-b48f-3768ad324c0c"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitleDateRan",
    "name": "Demographics - Member Title",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Standard Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_JOB_TITLE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "fddab312-ec8b-4a57-97bb-b9d0f3f61439"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesAbmMetricsAccountPerformanceBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeSta",
    "name": "Account Performance Bundle",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "ABM Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=externalWebsiteConversions,pivotValues,impressions,totalEngagements,oneClickLeads",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b69c92b1-38e9-4749-a775-489993f6795f"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesAbmMetricsAccountEngagementBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeStar",
    "name": "Account Engagement Bundle",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "ABM Metrics"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=pivotValues,impressions,totalEngagements",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "44890900-5aea-4f9d-bf56-57bc81398382"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveBasicConversionTypeGetAdAnalyticsQStatisticsPivotsListValueCampaignVa",
    "name": "Basic Conversion Type",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&pivots=List((value:CAMPAIGN),(value:CONVERSION))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,externalWebsitePostClickConversions,externalWebsitePostViewConversions",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b2f0179d-3a2d-431b-af57-b51c8fc7e3bb"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsThroughFunnelGetAdAnalyticsQStatisticsPivotsListValueConve",
    "name": "Conversions through Funnel",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&pivots=List((value:CONVERSION),(value:CAMPAIGN),(value:CREATIVE))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,clicks,oneClickLeads,externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "b0340ba8-037f-41a0-bdd9-19cbfc55a3bb"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyD",
    "name": "Conversions by Member Company",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "8e1c0a3b-1e50-4b68-842a-c50256e1c1aa"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberFunctionGetAdAnalyticsQAnalyticsPivotMemberJobFunc",
    "name": "Conversions by Member Function",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_JOB_FUNCTION&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "9727d7ae-42d0-409a-944e-160afe96b368"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSenior",
    "name": "Conversions by Member Seniority",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_SENIORITY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d8e2a7f0-f17f-4839-8bef-f9e8b648c16d"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberJobTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitl",
    "name": "Conversions by Member Job Title",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_JOB_TITLE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "ab665183-e822-466a-8c0e-23c7742ecd52"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberIndustryGetAdAnalyticsQAnalyticsPivotMemberIndustr",
    "name": "Conversions by Member Industry",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_INDUSTRY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "7f60448f-d050-4bd4-be42-8cf241212b82"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanySizeGetAdAnalyticsQAnalyticsPivotMemberComp",
    "name": "Conversions by Member Company Size",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Conversions Deep Dive"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY_SIZE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
    "variables": [
      "sponsoredAccount"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "95990595-faa1-4605-8a01-5a0480185fd7"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountGetAdAnalyticsQAttributedRevenueMetricsPivots",
    "name": "Revenue Metrics By Ad Account",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Revenue Attribution"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=attributedRevenueMetrics&pivots=List(ACCOUNT)&dateRange=(start:(day:24,month:5,year:2024),end:(day:23,month:5,year:2025))&account=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=dateRange,pivotValues,revenueAttributionMetrics",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "attributedRevenueMetrics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "c4599904-7d84-4da0-9e5f-c895f6932957"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountGetAdAnalyticsQAnalyticsPivotAccountDateRangeStart",
    "name": "Ad Metrics By Ad Account",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Revenue Attribution"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=analytics&pivot=ACCOUNT&dateRange=(start:(day:24,month:5,year:2024),end:(day:23,month:5,year:2025))&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&timeGranularity=ALL&fields=dateRange,pivotValues,impressions,clicks,costInLocalCurrency,externalWebsiteConversions,oneClickLeadFormOpens,oneClickLeads,videoViews,sends,opens,registrations",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "analytics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "7ad2bd49-a562-4d13-b4fd-99c848069826"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQAttribute",
    "name": "Revenue Metrics By Ad Account + Campaign Group + Campaign",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Revenue Attribution"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=attributedRevenueMetrics&pivots=List(ACCOUNT,CAMPAIGN_GROUP,CAMPAIGN)&dateRange=(start:(day:25,month:5,year:2024),end:(day:24,month:5,year:2025))&account=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=dateRange,pivotValues,revenueAttributionMetrics",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "attributedRevenueMetrics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "d144fc1d-65f8-4bfc-9c76-0f94cd12d6b5"
  },
  {
    "id": "reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQStatisticsPivo",
    "name": "Ad Metrics By Ad Account + Campaign Group + Campaign",
    "collection": "Reporting & ROI",
    "access": "marketing",
    "folder": [
      "Use Cases",
      "B2B Templates",
      "Revenue Attribution"
    ],
    "method": "GET",
    "url": "/adAnalytics?q=statistics&pivots=List(ACCOUNT,CAMPAIGN_GROUP,CAMPAIGN)&dateRange=(start:(day:25,month:5,year:2024),end:(day:24,month:5,year:2025))&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&timeGranularity=ALL&fields=dateRange,pivotValues,impressions,clicks,costInLocalCurrency,externalWebsiteConversions,oneClickLeadFormOpens,oneClickLeads,videoViews,sends,opens,registrations",
    "variables": [
      "sponsoredaccount_id"
    ],
    "hasBody": false,
    "restli": {
      "kind": "finder",
      "name": "statistics",
      "complexKey": false,
      "schemaConfidence": "unknown",
      "requiredScopes": [],
      "scopeConfidence": "unknown"
    },
    "postmanId": "25824d16-9b34-4758-b417-00cb6749e395"
  }
] as const;

export type LinkedInOperation = (typeof linkedinOperations)[number];
export type LinkedInOperationId = LinkedInOperation["id"];

export interface LinkedInOperationInput {
  readonly variables?: Readonly<Record<string, string | number>>;
  readonly query?: Readonly<Record<string, RestliQueryValue | undefined>>;
  readonly body?: unknown;
  readonly rawBody?: BodyInit;
  readonly headers?: Readonly<Record<string, string>>;
  readonly queryTunneling?: boolean | "auto";
}

export class LinkedInGeneratedClient {
  readonly operations = linkedinOperations;
  private readonly byId = new Map<string, LinkedInOperation>(
    linkedinOperations.map((operation) => [operation.id, operation]),
  );

  constructor(private readonly client: LinkedInClient) {}

  list(): readonly LinkedInOperation[] {
    return this.operations;
  }

  get(id: LinkedInOperationId | (string & {})): LinkedInOperation {
    const operation = this.byId.get(id);
    if (!operation) throw new Error(`Unknown LinkedIn operation: ${id}`);
    return operation;
  }

  search(query: string, limit = 20): readonly LinkedInOperation[] {
    const terms = query.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
    return this.operations
      .map((operation) => ({ operation, score: score(operation, terms) }))
      .filter(({ score }) => terms.length === 0 || score > 0)
      .sort((left, right) => right.score - left.score || left.operation.id.localeCompare(right.operation.id))
      .slice(0, limit)
      .map(({ operation }) => operation);
  }

  invoke<T = unknown>(
    id: LinkedInOperationId | (string & {}),
    input: LinkedInOperationInput = {},
  ): Promise<LinkedInResponse<T>> {
    const operation = this.get(id);
    const url = resolveTemplate(operation.url, operation.variables, input.variables ?? {});
    const options: LinkedInRequestOptions = {
      method: operation.method,
      query: input.query,
      body: input.body,
      rawBody: input.rawBody,
      headers: input.headers === undefined ? undefined : { ...input.headers },
      queryTunneling: input.queryTunneling,
      ...("restliMethod" in operation && operation.restliMethod
        ? { restliMethod: operation.restliMethod as LinkedInRequestOptions["restliMethod"] }
        : {}),
    };
    return this.client.request<T>(url, options);
  }
}

export function createLinkedInGeneratedClient(client: LinkedInClient): LinkedInGeneratedClient {
  return new LinkedInGeneratedClient(client);
}

function resolveTemplate(
  template: string,
  requiredVariables: readonly string[],
  variables: Readonly<Record<string, string | number>>,
): string {
  const missing = requiredVariables.filter((name) => variables[name] === undefined);
  if (missing.length > 0) throw new Error(`Missing LinkedIn operation variables: ${missing.join(", ")}`);
  const standalone = template.match(/^\/{([A-Za-z0-9_]+)}$/);
  if (standalone) {
    const value = variables[standalone[1]!];
    if (typeof value === "string" && /^https?:\/\//.test(value)) return value;
  }
  return template.replaceAll(/\{([A-Za-z0-9_]+)\}/g, (_match, name: string) => {
    const value = variables[name];
    return value === undefined ? `{${name}}` : encodeURIComponent(String(value));
  });
}

function score(operation: LinkedInOperation, terms: readonly string[]): number {
  const text = [operation.name, operation.collection, ...operation.folder, operation.method, operation.url]
    .join(" ")
    .toLowerCase();
  return terms.reduce((total, term) => total + (text.includes(term) ? 1 : 0), 0);
}
