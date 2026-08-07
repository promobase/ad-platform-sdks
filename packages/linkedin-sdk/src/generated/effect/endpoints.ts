// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingFacets",
  summary: "Get a list of available Ad Targeting Facets",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AageRanges&fields=name,urn",
  summary: "Get all age ranges",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AgrowthRate&fields=name,urn",
  summary: "Get all company growth rate categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersion = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersion",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AcompanyCategory&fields=name,urn",
  summary: "Get all company ranking list categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Arevenue&fields=name,urn",
  summary: "Get all company revenue categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AstaffCountRanges&fields=name,urn",
  summary: "Get all company staff count categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacet = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacet",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aindustries&fields=name,urn",
  summary: "Get all industries",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Ainterests&fields=name,urn",
  summary: "Get all interests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AjobFunctions&fields=name,urn",
  summary: "Get all job functions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesU = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesU",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Atitles&fields=name,urn&start=0&count=1000&totals=false",
  summary: "Get all job titles (paginated)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AmemberBehaviors&fields=name,urn",
  summary: "Get all member behaviors",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFace = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFace",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aseniorities&fields=name,urn",
  summary: "Get all seniorities",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Askills&fields=name,urn&start=0&count=10000&totals=false",
  summary: "Get all skills (paginated)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuery = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuery",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AyearsOfExperienceRanges&fields=name,urn",
  summary: "Get all yearsOfExperience ranges",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20s = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20s",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=typeahead&query=united%20states&facet=urn%3Ali%3AadTargetingFacet%3Alocations&queryVersion=QUERY_USES_URNS&start=0&count=10",
  summary: "Get Bing Geo locations using search typeahead",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopInterestsOfDirectorsInFinanceAndInTheUsPostTargetingAudienceInsightsAc = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsFetchAudienceInsightsWhatAreTheTopInterestsOfDirectorsInFinanceAndInTheUsPostTargetingAudienceInsightsAc",
  platform: "linkedin",
  method: "POST",
  path: "/targetingAudienceInsights?action=audienceInsights",
  summary: "What are the top interests of Directors in Finance and in the US?",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopJobFunctionsAmongMembersWithProductManagementSkillsInNyPostTargetingAu = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsFetchAudienceInsightsWhatAreTheTopJobFunctionsAmongMembersWithProductManagementSkillsInNyPostTargetingAu",
  platform: "linkedin",
  method: "POST",
  path: "/targetingAudienceInsights?action=audienceInsights",
  summary: "What are the top Job Functions among members with Product Management skills in NY?",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopSkillsOfSotwareEngineersInTheUsPostTargetingAudienceInsightsActionAudi = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsFetchAudienceInsightsWhatAreTheTopSkillsOfSotwareEngineersInTheUsPostTargetingAudienceInsightsActionAudi",
  platform: "linkedin",
  method: "POST",
  path: "/targetingAudienceInsights?action=audienceInsights",
  summary: "What are the top skills of sotware engineers in the US?",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audience_insights_audienceInsightsFetchAudienceInsightsWhatTopYearOfExperienceRangesDoUsMembersWhoAreInterestedInComputerProgrammingHavePo = defineEndpointDescriptor({
  id: "audience-insights.audienceInsightsFetchAudienceInsightsWhatTopYearOfExperienceRangesDoUsMembersWhoAreInterestedInComputerProgrammingHavePo",
  platform: "linkedin",
  method: "POST",
  path: "/targetingAudienceInsights?action=audienceInsights",
  summary: "What top year of experience ranges do US members who are interested in ‘Computer Programming’ have?",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audience.insights"],
  rateLimitBucket: "api.audience.insights",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesCsvListUploadAccountContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSear = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesCsvListUploadAccountContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSear",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
  summary: "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesCsvListUploadAccountContactTargeting6CreateListUploadDmpSegmentPostDmpSegments = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesCsvListUploadAccountContactTargeting6CreateListUploadDmpSegmentPostDmpSegments",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments",
  summary: "6. Create list upload DMP Segment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesCsvListUploadAccountContactTargeting7AttachTheUploadedListToTheListUploadDmpSegmentPostDmpSegmentsListu = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesCsvListUploadAccountContactTargeting7AttachTheUploadedListToTheListUploadDmpSegmentPostDmpSegmentsListu",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments/{listupload_segment_id}/listUploads",
  summary: "7. Attach the Uploaded List to the List Upload DMP Segment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"listupload_segment_id","wireName":"listupload_segment_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    listupload_segment_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesCsvListUploadAccountContactTargeting8MonitorStatusOfTheListUploadDmpSegmentsGetDmpSegmentsQAccountAccou = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesCsvListUploadAccountContactTargeting8MonitorStatusOfTheListUploadDmpSegmentsGetDmpSegmentsQAccountAccou",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform=LIST_UPLOAD",
  summary: "8. Monitor Status of the List Upload DMP Segments",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesPredictiveAudiences1RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchTypeValuesListB = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesPredictiveAudiences1RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchTypeValuesListB",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
  summary: "1. Retrieve the user's Ad Accounts (sponsoredAccount)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesPredictiveAudiences2CreateAPredictiveAudienceDmpSegmentPostDmpSegments = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesPredictiveAudiences2CreateAPredictiveAudienceDmpSegmentPostDmpSegments",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments",
  summary: "2. Create a Predictive Audience DMP Segment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesPredictiveAudiences3CreatePredictiveAudiencePostDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudience = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesPredictiveAudiences3CreatePredictiveAudiencePostDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudience",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments/{pa_dmp_segment_id}/businessObjectiveBasedAudiences",
  summary: "3. Create Predictive Audience",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"pa_dmp_segment_id","wireName":"pa_dmp_segment_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pa_dmp_segment_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesPredictiveAudiences4RetrieveThePredictiveAudienceGetDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudi = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesPredictiveAudiences4RetrieveThePredictiveAudienceGetDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudi",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments/{pa_dmp_segment_id}/businessObjectiveBasedAudiences/{predictive_audience_id}",
  summary: "4. Retrieve the Predictive Audience",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"pa_dmp_segment_id","wireName":"pa_dmp_segment_id","location":"path","required":true,"nullable":false},
    {"name":"predictive_audience_id","wireName":"predictive_audience_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pa_dmp_segment_id: Schema.String,
    predictive_audience_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingCompaniesAccountTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearch = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingCompaniesAccountTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearch",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
  summary: "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingCompaniesAccountTargeting4FetchExistingAudiencesForChosenAdAccountsGetDmpSegmentsQAccountAccou = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingCompaniesAccountTargeting4FetchExistingAudiencesForChosenAdAccountsGetDmpSegmentsQAccountAccou",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
  summary: "4. Fetch existing Audiences for chosen Ad Accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"dmp_partner_platform_enum","wireName":"dmp_partner_platform_enum","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dmp_partner_platform_enum: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingCompaniesAccountTargeting6CreateACompanyDmpSegmentPostDmpSegments = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingCompaniesAccountTargeting6CreateACompanyDmpSegmentPostDmpSegments",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments",
  summary: "6. Create a Company DMP Segment",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingCompaniesAccountTargeting7StreamCompanyDataAddOrRemoveMultipleCompaniesPostDmpSegmentsCompanyS = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingCompaniesAccountTargeting7StreamCompanyDataAddOrRemoveMultipleCompaniesPostDmpSegmentsCompanyS",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments/{company_segment_id}/companies",
  summary: "7. Stream company data - add or remove multiple companies",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"company_segment_id","wireName":"company_segment_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    company_segment_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingCompaniesAccountTargeting8MonitorStatusOfTheCompanyDmpSegmentsGetDmpSegmentsQAccountAccountUrn = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingCompaniesAccountTargeting8MonitorStatusOfTheCompanyDmpSegmentsGetDmpSegmentsQAccountAccountUrn",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
  summary: "8. Monitor Status of the Company DMP Segments",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"dmp_partner_platform_enum","wireName":"dmp_partner_platform_enum","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dmp_partner_platform_enum: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingUsersContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchType = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingUsersContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchType",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(type:(values:List(BUSINESS)),status:(values:List(ACTIVE)),test:false)&fields=id,name,test,reference",
  summary: "2. Retrieve the user's Ad Accounts (sponsoredAccount)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingUsersContactTargeting4FetchExistingAudiencesForTheChosenAdAccountGetDmpSegmentsQAccountAccount = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingUsersContactTargeting4FetchExistingAudiencesForTheChosenAdAccountGetDmpSegmentsQAccountAccount",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
  summary: "4. Fetch existing Audiences for the chosen Ad Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"dmp_partner_platform_enum","wireName":"dmp_partner_platform_enum","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dmp_partner_platform_enum: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingUsersContactTargeting6CreateAUserDmpSegmentSkipThisStepIfTheUserChoseToUpdateAnExistingAudienc = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingUsersContactTargeting6CreateAUserDmpSegmentSkipThisStepIfTheUserChoseToUpdateAnExistingAudienc",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments",
  summary: "6. Create a User DMP segment (skip this step if the user chose to update an existing Audience)",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingUsersContactTargeting7StreamUserDataAddOrRemoveMultipleUsersPostDmpSegmentsUserSegmentIdUsers = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingUsersContactTargeting7StreamUserDataAddOrRemoveMultipleUsersPostDmpSegmentsUserSegmentIdUsers",
  platform: "linkedin",
  method: "POST",
  path: "/dmpSegments/{user_segment_id}/users",
  summary: "7. Stream user data - add or remove multiple users",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"user_segment_id","wireName":"user_segment_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    user_segment_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const audiences_audiencesUseCasesStreamingUsersContactTargeting8MonitorStatusOfTheUserDmpSegmentsGetDmpSegmentsQAccountAccountUrn3Ali3As = defineEndpointDescriptor({
  id: "audiences.audiencesUseCasesStreamingUsersContactTargeting8MonitorStatusOfTheUserDmpSegmentsGetDmpSegmentsQAccountAccountUrn3Ali3As",
  platform: "linkedin",
  method: "GET",
  path: "/dmpSegments?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&sourcePlatform={dmp_partner_platform_enum}",
  summary: "8. Monitor Status of the User DMP Segments",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.audiences"],
  rateLimitBucket: "api.audiences",
  parameters: [
    {"name":"dmp_partner_platform_enum","wireName":"dmp_partner_platform_enum","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dmp_partner_platform_enum: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const batchGetSocialMetadata = defineEndpointDescriptor({
  id: "batchGetSocialMetadata",
  platform: "linkedin",
  method: "GET",
  path: "/socialMetadata",
  summary: "batch Get Social Metadata",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_member_postAnalytics","r_organization_social"],
  capabilities: ["post.metrics.read"],
  rateLimitBucket: "post.metrics.read",
  parameters: [
    {"name":"ids","wireName":"ids","location":"query","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    ids: Schema.Array(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementCreateAnAdAccountPostAdAccounts = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementCreateAnAdAccountPostAdAccounts",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts",
  summary: "Create an Ad Account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementCreateATestAdAccountPostAdAccounts = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementCreateATestAdAccountPostAdAccounts",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts",
  summary: "Create a Test Ad Account",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementFetchTheAdAccountByIdGetAdAccountsSponsoredaccountId = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementFetchTheAdAccountByIdGetAdAccountsSponsoredaccountId",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{sponsoredaccount_id}",
  summary: "Fetch the Ad Account by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementSearchAccountByTypeGetAdAccountsQSearchSearchTypeValuesListBu = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementSearchAccountByTypeGetAdAccountsQSearchSearchTypeValuesListBu",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(type:(values:List(BUSINESS)))",
  summary: "Search Account by Type",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementSearchAccountsByStatusGetAdAccountsQSearchSearchStatusValuesL = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementSearchAccountsByStatusGetAdAccountsQSearchSearchStatusValuesL",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(status:(values:List(ACTIVE)))",
  summary: "Search Accounts by Status",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureAccountManagementUpdateAdAccountNamePostAdAccountsSponsoredaccountId = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureAccountManagementUpdateAdAccountNamePostAdAccountsSponsoredaccountId",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{sponsoredaccount_id}",
  summary: "Update Ad Account Name",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateACampaignGroupPostAdAccountsAdAccountsIdAdCampaig = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateACampaignGroupPostAdAccountsAdAccountsIdAdCampaig",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups",
  summary: "Create a Campaign Group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups",
  summary: "Create Multiple Campaign Groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteACampaignGroupDeleteAdAccountsAdAccountsIdAdCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteACampaignGroupDeleteAdAccountsAdAccountsIdAdCampa",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
  summary: "Delete a Campaign Group",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteMultipleCampaignGroupsDeleteAdAccountsAdAccountsI = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteMultipleCampaignGroupsDeleteAdAccountsAdAccountsI",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
  summary: "Delete Multiple Campaign Groups",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id2","wireName":"campaigngroup_id2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
    campaigngroup_id2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchACampaignGroupByIdGetAdAccountsAdAccountsIdAdCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchACampaignGroupByIdGetAdAccountsAdAccountsIdAdCampa",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
  summary: "Fetch a Campaign Group by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchMultipleCampaignGroupsByIdGetAdAccountsAdAccountsI = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchMultipleCampaignGroupsByIdGetAdAccountsAdAccountsI",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
  summary: "Fetch multiple Campaign Groups by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id2","wireName":"campaigngroup_id2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
    campaigngroup_id2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementSearchForCampaignGroupsGetAdAccountsAdAccountsIdAdCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementSearchForCampaignGroupsGetAdAccountsAdAccountsIdAdCampa",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups?q=search&search=(status:(values:List(ACTIVE,DRAFT)))&sort=(field:ID,order:DESCENDING)",
  summary: "Search for Campaign Groups",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateCampaignGroupPostAdAccountsAdAccountsIdAdCampaign = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateCampaignGroupPostAdAccountsAdAccountsIdAdCampaign",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups/{campaigngroup_id1}",
  summary: "Update Campaign Group",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaignGroups?ids=List({campaigngroup_id1},{campaigngroup_id2})",
  summary: "Update Multiple Campaign Groups",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_PARTIAL_UPDATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id2","wireName":"campaigngroup_id2","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
    campaigngroup_id2: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementArchiveACampaignPostAdAccountsAdAccountsIdAdCampaignsCampaign = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementArchiveACampaignPostAdAccountsAdAccountsIdAdCampaignsCampaign",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
  summary: "Archive a Campaign",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementCreateCampaignSponsoredUpdatesPostAdAccountsAdAccountsIdAdCam = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementCreateCampaignSponsoredUpdatesPostAdAccountsAdAccountsIdAdCam",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns",
  summary: "Create Campaign (SPONSORED_UPDATES)",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementCreateMultipleCampaignUsingBatchPostAdAccountsAdAccountsIdAdC = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementCreateMultipleCampaignUsingBatchPostAdAccountsAdAccountsIdAdC",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns",
  summary: "Create multiple campaign using BATCH",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementDeleteCampaignUsingCampaignIdDeleteAdAccountsAdAccountsIdAdCa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementDeleteCampaignUsingCampaignIdDeleteAdAccountsAdAccountsIdAdCa",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
  summary: "Delete campaign Using campaign Id",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementDeleteMultipleCampaignsUsingBatchDeleteAdAccountsAdAccountsId = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementDeleteMultipleCampaignsUsingBatchDeleteAdAccountsAdAccountsId",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/adCampaigns?ids=List({campaign_id1},{campaign_id2})",
  summary: "Delete multiple campaigns using BATCH",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false},
    {"name":"campaign_id2","wireName":"campaign_id2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
    campaign_id2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementFetchACampaignUsingCampaignIdGetAdAccountsAdAccountsIdAdCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementFetchACampaignUsingCampaignIdGetAdAccountsAdAccountsIdAdCampa",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaigns/{campaignId1}",
  summary: "Fetch a Campaign using Campaign ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaignId1","wireName":"campaignId1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaignId1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementReactivateACampaignPostAdAccountsAdAccountsIdAdCampaignsCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementReactivateACampaignPostAdAccountsAdAccountsIdAdCampaignsCampa",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns/{campaign_id1}",
  summary: "Reactivate a Campaign",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementSearchForCampaignUsingCriteriaGetAdAccountsAdAccountsIdAdCamp = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementSearchForCampaignUsingCriteriaGetAdAccountsAdAccountsIdAdCamp",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaigns?q=search&search.campaignGroup.values[0]=urn:li:sponsoredCampaignGroup:{campaigngroup_id1}",
  summary: "Search for Campaign using criteria",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id1","wireName":"campaigngroup_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementUpdateCampaignUsingCampaignIdPostAdAccountsAdAccountsIdAdCamp = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementUpdateCampaignUsingCampaignIdPostAdAccountsAdAccountsIdAdCamp",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns/{campaignId1}",
  summary: "Update Campaign Using campaignId",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaignId1","wireName":"campaignId1","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaignId1: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementUpdateMultipleCampaignsUsingBatchPostAdAccountsAdAccountsIdAd = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCampaignMangementUpdateMultipleCampaignsUsingBatchPostAdAccountsAdAccountsIdAd",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/adCampaigns?ids[0]={campaign_id1}&ids[1]={campaign_id2}",
  summary: "Update multiple campaigns using BATCH",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_PARTIAL_UPDATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false},
    {"name":"campaign_id2","wireName":"campaign_id2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
    campaign_id2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementCreateACreativePostAdAccountsAdAccountsIdCreatives = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementCreateACreativePostAdAccountsAdAccountsIdCreatives",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/creatives",
  summary: "Create a Creative",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementCreateMultipleCreativesUsingBatchPostAdAccountsAdAccountsIdC = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementCreateMultipleCreativesUsingBatchPostAdAccountsAdAccountsIdC",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/creatives",
  summary: "Create multiple Creatives using BATCH",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementDeleteCreativeUsingCreativeIdDeleteAdAccountsAdAccountsIdCre = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementDeleteCreativeUsingCreativeIdDeleteAdAccountsAdAccountsIdCre",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
  summary: "Delete Creative Using Creative Id",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementDeleteMultipleCreativesUsingBatchDeleteAdAccountsAdAccountsI = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementDeleteMultipleCreativesUsingBatchDeleteAdAccountsAdAccountsI",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1})",
  summary: "Delete multiple Creatives using BATCH",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_DELETE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementFetchACreativeUsingCreativeIdGetAdAccountsAdAccountsIdCreati = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementFetchACreativeUsingCreativeIdGetAdAccountsAdAccountsIdCreati",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
  summary: "Fetch a Creative using Creative ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementFetchMultipleCreativesUsingBatchGetAdAccountsAdAccountsIdCre = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementFetchMultipleCreativesUsingBatchGetAdAccountsAdAccountsIdCre",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1})",
  summary: "Fetch multiple Creatives using BATCH",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementSearchCreativeUsingCriteriaGetAdAccountsAdAccountsIdCreative = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementSearchCreativeUsingCriteriaGetAdAccountsAdAccountsIdCreative",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/creatives?q=search&search.campaign.values[0]=urn:li:sponsoredCampaign:{campaign_id1}",
  summary: "Search Creative using Criteria",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaign_id1","wireName":"campaign_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaign_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementUpdateCreativeUsingCreativeIdPostAdAccountsAdAccountsIdCreat = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementUpdateCreativeUsingCreativeIdPostAdAccountsAdAccountsIdCreat",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/creatives/{creative_Id1}",
  summary: "Update Creative Using Creative Id",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementUpdateMultipleCreativeUsingBatchPostAdAccountsAdAccountsIdCr = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureCreativeManagementUpdateMultipleCreativeUsingBatchPostAdAccountsAdAccountsIdCr",
  platform: "linkedin",
  method: "POST",
  path: "/adAccounts/{adAccountsId}/creatives?ids=List({creative_Id1},{creative_Id2})",
  summary: "Update multiple Creative using BATCH",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"creative_Id1","wireName":"creative_Id1","location":"path","required":true,"nullable":false},
    {"name":"creative_Id2","wireName":"creative_Id2","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    creative_Id1: Schema.String,
    creative_Id2: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessCreateAdAccountUserPutAdAccountUsersAccountUrn3Ali3AsponsoredAccount = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessCreateAdAccountUserPutAdAccountUsersAccountUrn3Ali3AsponsoredAccount",
  platform: "linkedin",
  method: "PUT",
  path: "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
  summary: "Create Ad Account User",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    person_id: Schema.String,
    sponsoredaccount_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessDeleteAnAdAccountUserDeleteAdAccountUsersAccountUrn3Ali3AsponsoredAc = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessDeleteAnAdAccountUserDeleteAdAccountUsersAccountUrn3Ali3AsponsoredAc",
  platform: "linkedin",
  method: "DELETE",
  path: "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
  summary: "Delete an Ad Account User",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    person_id: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchAnAdAccountUserGetAdAccountUsersAccountUrn3Ali3AsponsoredAccoun = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessFetchAnAdAccountUserGetAdAccountUsersAccountUrn3Ali3AsponsoredAccoun",
  platform: "linkedin",
  method: "GET",
  path: "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
  summary: "Fetch an Ad Account User",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    person_id: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSAdAccountsGetAdAccountUsersQAuthenticatedU = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSAdAccountsGetAdAccountUsersQAuthenticatedU",
  platform: "linkedin",
  method: "GET",
  path: "/adAccountUsers?q=authenticatedUser",
  summary: "Fetch the Authenticated User's Ad Accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSOrganizationRolesGetOrganizationAclsQRoleA = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSOrganizationRolesGetOrganizationAclsQRoleA",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=roleAssignee",
  summary: "Fetch the Authenticated User's Organization Roles",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessFindAdAccountUsersByAccountsGetAdAccountUsersQAccountsAccountsListUr = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessFindAdAccountUsersByAccountsGetAdAccountUsersQAccountsAccountsListUr",
  platform: "linkedin",
  method: "GET",
  path: "/adAccountUsers?q=accounts&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})",
  summary: "Find Ad Account Users by Accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAccountStructureUserAccessUpdateExistingAdAccountUserPostAdAccountUsersAccountUrn3Ali3Asponsor = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAccountStructureUserAccessUpdateExistingAdAccountUserPostAdAccountUsersAccountUrn3Ali3Asponsor",
  platform: "linkedin",
  method: "POST",
  path: "/adAccountUsers/(account:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id},user:urn%3Ali%3Aperson%3A{person_id})",
  summary: "Update Existing Ad Account User",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    person_id: Schema.String,
    sponsoredaccount_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation2RegisterDocumentUploadPostDocumentsActionI = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation2RegisterDocumentUploadPostDocumentsActionI",
  platform: "linkedin",
  method: "POST",
  path: "/documents?action=initializeUpload",
  summary: "2. Register Document Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation3UploadTheDocumentFileSelectADocumentFileIn = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation3UploadTheDocumentFileSelectADocumentFileIn",
  platform: "linkedin",
  method: "PUT",
  path: "/{document_uploadurl}",
  summary: "3. Upload the Document file (select a document file in the Body for postman to use)",
  effect: "publish",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"document_uploadurl","wireName":"document_uploadurl","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    document_uploadurl: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation4CheckTheStatusOfTheUploadGetAssetsDocument = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation4CheckTheStatusOfTheUploadGetAssetsDocument",
  platform: "linkedin",
  method: "GET",
  path: "/assets/{document_asset_id}",
  summary: "4. Check the status of the upload",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"document_asset_id","wireName":"document_asset_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    document_asset_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation5CreatePostPostPosts = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation5CreatePostPostPosts",
  platform: "linkedin",
  method: "POST",
  path: "/posts",
  summary: "5. Create Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation6CreateACampaignForTheDocumentAdPostAdCampa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation6CreateACampaignForTheDocumentAdPostAdCampa",
  platform: "linkedin",
  method: "POST",
  path: "/adCampaigns",
  summary: "6. Create a Campaign for the Document Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation7CreateACreativeForTheDocumentAdPostCreativ = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation7CreateACreativeForTheDocumentAdPostCreativ",
  platform: "linkedin",
  method: "POST",
  path: "/creatives",
  summary: "7. Create a Creative for the Document Ad",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares2RegisterUploa = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares2RegisterUploa",
  platform: "linkedin",
  method: "POST",
  path: "/assets?action=registerUpload",
  summary: "2. Register Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares3UploadTheImag = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares3UploadTheImag",
  platform: "linkedin",
  method: "PUT",
  path: "/{upload_url}",
  summary: "3. Upload the image file Copy (select an image file in the Body for postman to use)",
  effect: "publish",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"upload_url","wireName":"upload_url","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    upload_url: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares4CheckTheStatu = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares4CheckTheStatu",
  platform: "linkedin",
  method: "GET",
  path: "/assets/{asset_id}",
  summary: "4. Check the status of the upload",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"asset_id","wireName":"asset_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    asset_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares5CreateADarkSh = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares5CreateADarkSh",
  platform: "linkedin",
  method: "POST",
  path: "/shares",
  summary: "5. Create a dark share",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares6CreateACampai = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares6CreateACampai",
  platform: "linkedin",
  method: "POST",
  path: "/adCampaigns",
  summary: "6. Create a Campaign for the Image Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares7CreateACreati = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares7CreateACreati",
  platform: "linkedin",
  method: "POST",
  path: "/adCampaigns",
  summary: "7. Create a Creative for the Image Ad",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent2RegisterUploadPostAssetsActio = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent2RegisterUploadPostAssetsActio",
  platform: "linkedin",
  method: "POST",
  path: "/assets?action=registerUpload",
  summary: "2. Register Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent3UploadTheImageFileSelectAnIma = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent3UploadTheImageFileSelectAnIma",
  platform: "linkedin",
  method: "PUT",
  path: "/{upload_url}",
  summary: "3. Upload the image file (select an image file in the Body for postman to use)",
  effect: "publish",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"upload_url","wireName":"upload_url","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    upload_url: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA",
  platform: "linkedin",
  method: "GET",
  path: "/assets/{asset_id}",
  summary: "4. Check the status of the upload",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"asset_id","wireName":"asset_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    asset_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent5CreateASharePostShares = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent5CreateASharePostShares",
  platform: "linkedin",
  method: "POST",
  path: "/shares",
  summary: "5. Create a share",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent6CreateACampaignForTheImageAdP = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent6CreateACampaignForTheImageAdP",
  platform: "linkedin",
  method: "POST",
  path: "/adCampaigns",
  summary: "6. Create a Campaign for the Image Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent7CreateACreativeForTheImageAdP = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent7CreateACreativeForTheImageAdP",
  platform: "linkedin",
  method: "POST",
  path: "/adCreatives",
  summary: "7. Create a Creative for the Image Ad",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent2RegisterVideoUploadPostAssets = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent2RegisterVideoUploadPostAssets",
  platform: "linkedin",
  method: "POST",
  path: "/assets?action=registerUpload",
  summary: "2. Register Video Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent3UploadTheVideoFileSelectAVide = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent3UploadTheVideoFileSelectAVide",
  platform: "linkedin",
  method: "PUT",
  path: "/{video_uploadurl}",
  summary: "3. Upload the video file (select a video file in the Body for postman to use)",
  effect: "publish",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"video_uploadurl","wireName":"video_uploadurl","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    video_uploadurl: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA",
  platform: "linkedin",
  method: "GET",
  path: "/assets/{video_asset_id}",
  summary: "4. Check the status of the upload",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"video_asset_id","wireName":"video_asset_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    video_asset_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent5CreatePostPostPosts = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent5CreatePostPostPosts",
  platform: "linkedin",
  method: "POST",
  path: "/posts",
  summary: "5. Create Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent6CreateACampaignForTheVideoAdP = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent6CreateACampaignForTheVideoAdP",
  platform: "linkedin",
  method: "POST",
  path: "/adCampaigns",
  summary: "6. Create a Campaign for the Video Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent7CreateACreativeForTheVideoAdP = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent7CreateACreativeForTheVideoAdP",
  platform: "linkedin",
  method: "POST",
  path: "/creatives",
  summary: "7. Create a Creative for the Video Ad",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsForecastingAdSupplyForecastApiGetAdSupplyForecastsQCriteriaV2Account = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsForecastingAdSupplyForecastApiGetAdSupplyForecastsQCriteriaV2Account",
  platform: "linkedin",
  method: "GET",
  path: "/adSupplyForecasts?q=criteriaV2&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&timeRange=(start:1631790775000,end:1632136375000)&campaignType=SPONSORED_UPDATES&totalBudget=(amount:100.00,currencyCode:USD)&competingBid=(bidType:CPM,bidPrice:(currencyCode:USD,amount:10))&targetingCriteria=(include:(and:List((or:(urn%3Ali%3AadTargetingFacet%3Alocations:List(urn%3Ali%3Ageo%3A101165590))))),exclude:(or:(urn%3Ali%3AadTargetingFacet%3AstaffCountRanges:List(urn%3Ali%3AstaffCountRange%3A%2810001%2C2147483647%29))))",
  summary: "Ad Supply Forecast API",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFetchTheAdTargetingFacetsGetAdTargetingFacets = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFetchTheAdTargetingFacetsGetAdTargetingFacets",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingFacets",
  summary: "Fetch the Ad Targeting Facets",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByFacetSenioritiesGetAdTargetingEntitiesQAdTarg = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByFacetSenioritiesGetAdTargetingEntitiesQAdTarg",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=List(urn%3Ali%3AadTargetingFacet%3Aseniorities)&locale=(language:en,country:US)",
  summary: "Find Entities by Facet Seniorities",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesBySimilarEntitiesGetAdTargetingEntitiesQSimilar = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesBySimilarEntitiesGetAdTargetingEntitiesQSimilar",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=similarEntities&facet=urn%3Ali%3AadTargetingFacet%3Aemployers&queryVersion=QUERY_USES_URNS&entities=List(urn%3Ali%3Aorganization%3A1003)&locale=(language:en,country:US)",
  summary: "Find Entities by Similar Entities",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByTypeaheadSuggestionsGetAdTargetingEntitiesQTy = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByTypeaheadSuggestionsGetAdTargetingEntitiesQTy",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=TYPEAHEAD&facet=List(urn%3Ali%3AadTargetingFacet%3Alocations)&query=afric",
  summary: "Find Entities by Typeahead Suggestions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByUrnsGetAdTargetingEntitiesQUrnsQueryVersionQu = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByUrnsGetAdTargetingEntitiesQUrnsQueryVersionQu",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=urns&queryVersion=QUERY_USES_URNS&urns=List(urn%3Ali%3Ageo%3A102095887)",
  summary: "Find Entities by URNs",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAudienceCountsFindAudienceCountByTargetingCriteriaGetAudienceCountsQTar = defineEndpointDescriptor({
  id: "campaign-management.campaignManagementUseCasesAdvertisingAndTargetingAudienceCountsFindAudienceCountByTargetingCriteriaGetAudienceCountsQTar",
  platform: "linkedin",
  method: "GET",
  path: "/audienceCounts?q=targetingCriteriaV2&targetingCriteria=(include:(and:List((or:({encoded%20facet_URN_1}:List({encoded%20facet_URN_1_value_1},%20{encoded%20facet_URN_1_value_2}))),(or:({encoded%20facet_URN_2}:List({encoded%20facet_URN_2_value_1},{encoded%20facet_URN_2_value_2}))))))",
  summary: "Find audience count by targeting criteria",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.campaign.management"],
  rateLimitBucket: "api.campaign.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesMemberPostAnalyticsAggregateAnalyticsForMemberPostsPostMemberCreatorPostAnalyticsQMeQueryType = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesMemberPostAnalyticsAggregateAnalyticsForMemberPostsPostMemberCreatorPostAnalyticsQMeQueryType",
  platform: "linkedin",
  method: "POST",
  path: "/memberCreatorPostAnalytics?q=me&queryType=REACTION&aggregation=DAILY&dateRange=(start:(day:4,month:5,year:2024),end:(day:6,month:5,year:2024))",
  summary: "Aggregate Analytics for Member Posts",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberPostPostMemberCreatorPostAnalyticsQEntityEntityS = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberPostPostMemberCreatorPostAnalyticsQEntityEntityS",
  platform: "linkedin",
  method: "POST",
  path: "/memberCreatorPostAnalytics?q=entity&entity=(share:urn%3Ali%3Ashare%3A{share_id})&queryType=REACTION&aggregation=DAILY&dateRange=(start:(day:4,month:5,year:2024),end:(day:6,month:5,year:2024))",
  summary: "Analytics for Specific Member Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"share_id","wireName":"share_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    share_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberVideoPostPostMemberCreatorVideoAnalyticsQEntityE = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberVideoPostPostMemberCreatorVideoAnalyticsQEntityE",
  platform: "linkedin",
  method: "POST",
  path: "/memberCreatorVideoAnalytics?q=entity&entity=(share:urn%3Ali%3Ashare%3A{share_id})&queryType=VIDEO_PLAY&aggregation=TOTAL&dateRange=(start:(day:15,month:5,year:2024),end:(day:16,month:5,year:2024))",
  summary: "Analytics for Specific Member VIDEO Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"share_id","wireName":"share_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    share_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesMemberProfileAnalyticsFollowersCountByDataRangeGetMemberFollowersCountQDateRangeDateRangeStar = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesMemberProfileAnalyticsFollowersCountByDataRangeGetMemberFollowersCountQDateRangeDateRangeStar",
  platform: "linkedin",
  method: "GET",
  path: "/memberFollowersCount?q=dateRange&dateRange=(start:(year:2024,month:4,day:20),end:(year:2024,month:5,day:15))",
  summary: "Followers Count By DataRange",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesMemberProfileAnalyticsTotalFollowersCountGetMemberFollowersCountQMe = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesMemberProfileAnalyticsTotalFollowersCountGetMemberFollowersCountQMe",
  platform: "linkedin",
  method: "GET",
  path: "/memberFollowersCount?q=me",
  summary: "Total Followers Count",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationAccessControlsFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssign = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationAccessControlsFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssign",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=roleAssignee",
  summary: "Find a Member's Organization Access Control",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationAccessControlsFindOrganizationAccessControlGetOrganizationAclsQOrganizationOrgani = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationAccessControlsFindOrganizationAccessControlGetOrganizationAclsQOrganizationOrgani",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=organization&organization=urn%3Ali%3Aorganization%3A{organization_id}",
  summary: "Find Organization Access Control",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationAccessControlsFindOrganizationAdministratorsGetOrganizationAclsQOrganizationOrgan = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationAccessControlsFindOrganizationAdministratorsGetOrganizationAclsQOrganizationOrgan",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=organization&organization=urn%3Ali%3Aorganization%3A{organization_id}&role=ADMINISTRATOR&state=APPROVED",
  summary: "Find Organization Administrators",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationFollowersSearchByKeywordGetPeopleTypeaheadQOrganizationFollowersKeywordsChrisOrga = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationFollowersSearchByKeywordGetPeopleTypeaheadQOrganizationFollowersKeywordsChrisOrga",
  platform: "linkedin",
  method: "GET",
  path: "/peopleTypeahead?q=organizationFollowers&keywords=chris&organization=urn%3Ali%3Aorganization%3A{organization_id}",
  summary: "Search By Keyword",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationFollowersSearchByVanityUrlGetVanityUrlQVanityUrlAsOrganizationVanityUrlHttps3AWww = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationFollowersSearchByVanityUrlGetVanityUrlQVanityUrlAsOrganizationVanityUrlHttps3AWww",
  platform: "linkedin",
  method: "GET",
  path: "/vanityUrl?q=vanityUrlAsOrganization&vanityUrl=https%3A//www.linkedin.com/in/vanityName/&organization=urn%3Ali%3Aorganization%3A{organization_id}",
  summary: "Search By Vanity URL",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnAdministeredOrganizationBrandsGetOrganizationBr = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnAdministeredOrganizationBrandsGetOrganizationBr",
  platform: "linkedin",
  method: "GET",
  path: "/organizationBrands?ids=List({organizationBrand_id},{organizationBrand_id1})",
  summary: "Batch GET on Administered Organization Brands",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organizationBrand_id","wireName":"organizationBrand_id","location":"path","required":true,"nullable":false},
    {"name":"organizationBrand_id1","wireName":"organizationBrand_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationBrand_id: Schema.String,
    organizationBrand_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnNonAdministeredOrganizationBrandsGetOrganizatio = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnNonAdministeredOrganizationBrandsGetOrganizatio",
  platform: "linkedin",
  method: "GET",
  path: "/organizationBrandsLookup?ids=List({organizationBrand_id},{organizationBrand_id1})",
  summary: "Batch GET on Non-Administered Organization Brands",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organizationBrand_id","wireName":"organizationBrand_id","location":"path","required":true,"nullable":false},
    {"name":"organizationBrand_id1","wireName":"organizationBrand_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationBrand_id: Schema.String,
    organizationBrand_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsFindAdministeredOrganizationBrandsByParentOrgGetOrganizat = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationBrandsFindAdministeredOrganizationBrandsByParentOrgGetOrganizat",
  platform: "linkedin",
  method: "GET",
  path: "/organizations?q=parentOrganization&parent=urn:li:organization:{organization_id}",
  summary: "Find Administered Organization Brands by Parent Org",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsFindOrganizationBrandByVanityNameGetOrganizationBrandsQVa = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationBrandsFindOrganizationBrandByVanityNameGetOrganizationBrandsQVa",
  platform: "linkedin",
  method: "GET",
  path: "/organizationBrands?q=vanityName&vanityName={vanityName}",
  summary: "Find Organization Brand by Vanity Name",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"vanityName","wireName":"vanityName","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    vanityName: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsRetrieveAnAdministeredOrganizationBrandGetOrganizationBra = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationBrandsRetrieveAnAdministeredOrganizationBrandGetOrganizationBra",
  platform: "linkedin",
  method: "GET",
  path: "/organizationBrands/{organizationBrand_id}",
  summary: "Retrieve an Administered Organization Brand",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organizationBrand_id","wireName":"organizationBrand_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationBrand_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsBatchGetByAdministeredOrgIdsGetOrganizationsIdsListOrganizatio = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsBatchGetByAdministeredOrgIdsGetOrganizationsIdsListOrganizatio",
  platform: "linkedin",
  method: "GET",
  path: "/organizations?ids=List({organization_id},{organization_id1})",
  summary: "Batch GET by Administered Org Ids",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"organization_id1","wireName":"organization_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
    organization_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindNonAdministeredOrganizationGetOrganizationsLookupIdsListOr = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsFindNonAdministeredOrganizationGetOrganizationsLookupIdsListOr",
  platform: "linkedin",
  method: "GET",
  path: "/organizationsLookup?ids=List({organization_id},{organization_id1})",
  summary: "Find Non-Administered Organization",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"organization_id1","wireName":"organization_id1","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
    organization_id1: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByEmailDomainGetOrganizationsQEmailDomainEmail = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByEmailDomainGetOrganizationsQEmailDomainEmail",
  platform: "linkedin",
  method: "GET",
  path: "/organizations?q=emailDomain&emailDomain={email_domain}",
  summary: "Find Organization by Email Domain",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"email_domain","wireName":"email_domain","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    email_domain: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByVanityNameGetOrganizationsQVanityNameVanityN = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByVanityNameGetOrganizationsQVanityNameVanityN",
  platform: "linkedin",
  method: "GET",
  path: "/organizations?q=vanityName&vanityName={vanityName}",
  summary: "Find Organization by Vanity Name",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"vanityName","wireName":"vanityName","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    vanityName: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsLookupByOrganizationPrimaryTypeGetOrganizationsOrganizationIdP = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsLookupByOrganizationPrimaryTypeGetOrganizationsOrganizationIdP",
  platform: "linkedin",
  method: "GET",
  path: "/organizations/{organization_id}?projection=(primaryOrganizationType)",
  summary: "Lookup by Organization Primary Type",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationByIdGetOrganizationsOrganizationId = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationByIdGetOrganizationsOrganizationId",
  platform: "linkedin",
  method: "GET",
  path: "/organizations/{organization_id}",
  summary: "Retrieve Organization by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationFollowerCountGetNetworkSizesUrnLiOrganizat = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationFollowerCountGetNetworkSizesUrnLiOrganizat",
  platform: "linkedin",
  method: "GET",
  path: "/networkSizes/urn:li:organization:{organization_id}?edgeType=CompanyFollowedByMember",
  summary: "Retrieve Organization Follower Count",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationUsingProjectionGetOrganizationsOrganizatio = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationUsingProjectionGetOrganizationsOrganizatio",
  platform: "linkedin",
  method: "GET",
  path: "/organizations/{organization_id}?projection=(vanityName,primaryOrganizationType,id)",
  summary: "Retrieve Organization using projection",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow2CreateAShareWith = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow2CreateAShareWith",
  platform: "linkedin",
  method: "POST",
  path: "/shares",
  summary: "2. Create a share with a Company Mention",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow3RetrieveNotifica = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow3RetrieveNotifica",
  platform: "linkedin",
  method: "GET",
  path: "/eventSubscriptions?q=subscriberAndEventType&eventType=ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS",
  summary: "3. Retrieve Notifications for the authenticated member's organization",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow2CreateAShareWith = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow2CreateAShareWith",
  platform: "linkedin",
  method: "POST",
  path: "/shares",
  summary: "2. Create a share with Company Mention",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow3CreateASubscript = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow3CreateASubscript",
  platform: "linkedin",
  method: "PUT",
  path: "/eventSubscriptions/(developerApplication:urn%3Ali%3AdeveloperApplication%3A{application_id},user:urn%3Ali%3Aperson%3A{person_id},entity:urn%3Ali%3Aorganization%3A{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
  summary: "3. Create a subscription request",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"application_id","wireName":"application_id","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    application_id: Schema.String,
    organization_id: Schema.String,
    person_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow4RetrieveSubscrip = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow4RetrieveSubscrip",
  platform: "linkedin",
  method: "GET",
  path: "/eventSubscriptions?q=subscriberAndEventType&eventType=ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS",
  summary: "4. Retrieve subscription for authenticated members",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow5RetrieveSubscrip = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow5RetrieveSubscrip",
  platform: "linkedin",
  method: "GET",
  path: "/eventSubscriptions/(developerApplication:urn%3Ali%3AdeveloperApplication%3A{application_id},user:urn%3Ali%3Aperson%3A{person_id},entity:urn%3Ali%3Aorganization%3A{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
  summary: "5. Retrieve Subscription by Key",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"application_id","wireName":"application_id","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    application_id: Schema.String,
    organization_id: Schema.String,
    person_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow6RemoveASubscript = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow6RemoveASubscript",
  platform: "linkedin",
  method: "DELETE",
  path: "/eventSubscriptions/(developerApplication:{application_id},user:{person_id},entity:{organization_id},eventType:ORGANIZATION_SOCIAL_ACTION_NOTIFICATIONS)",
  summary: "6. Remove a Subscription",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [
    {"name":"application_id","wireName":"application_id","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"person_id","wireName":"person_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    application_id: Schema.String,
    organization_id: Schema.String,
    person_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsLifetimeFollowerStatisticsGetOrganizationalEntity = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsLifetimeFollowerStatisticsGetOrganizationalEntity",
  platform: "linkedin",
  method: "GET",
  path: "/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A77710671",
  summary: "Lifetime follower statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsTimeBoundFollowerStatisticsGetOrganizationalEntit = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsTimeBoundFollowerStatisticsGetOrganizationalEntit",
  platform: "linkedin",
  method: "GET",
  path: "/organizationalEntityFollowerStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
  summary: "Time-Bound follower statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationPageStatisticsLifetimePageStatisticsGetOrganizationPageStatisticsQO = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationPageStatisticsLifetimePageStatisticsGetOrganizationPageStatisticsQO",
  platform: "linkedin",
  method: "GET",
  path: "/organizationPageStatistics?q=organization&organization=urn%3Ali%3Aorganization%3A2414183",
  summary: "Lifetime Page Statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationPageStatisticsTimeBoundOrganizationPageStatisticsGetOrganizationPag = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationPageStatisticsTimeBoundOrganizationPageStatisticsGetOrganizationPag",
  platform: "linkedin",
  method: "GET",
  path: "/organizationPageStatistics?q=organization&organization=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
  summary: "Time-Bound organization page statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationShareStatisticsLifetimeShareStatisticsGetOrganizationalEntityShareS = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationShareStatisticsLifetimeShareStatisticsGetOrganizationalEntityShareS",
  platform: "linkedin",
  method: "GET",
  path: "/organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183",
  summary: "Lifetime Share Statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const community_management_communityManagementUseCasesStatisticsApisOrganizationShareStatisticsTimeBoundShareStatisticsGetOrganizationalEntityShare = defineEndpointDescriptor({
  id: "community-management.communityManagementUseCasesStatisticsApisOrganizationShareStatisticsTimeBoundShareStatisticsGetOrganizationalEntityShare",
  platform: "linkedin",
  method: "GET",
  path: "/organizationalEntityShareStatistics?q=organizationalEntity&organizationalEntity=urn%3Ali%3Aorganization%3A2414183&timeIntervals.timeGranularityType=DAY&timeIntervals.timeRange.start=1634018799000&timeIntervals.timeRange.end=1634623599000",
  summary: "Time Bound Share Statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.community.management"],
  rateLimitBucket: "api.community.management",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingAdSegmentFilterGetAccountIntelligenceQAccountStart0Count10Account = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiFetchAccountIntelligenceDataUsingAdSegmentFilterGetAccountIntelligenceQAccountStart0Count10Account",
  platform: "linkedin",
  method: "GET",
  path: "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_7_DAYS,adSegments:List(urn%3Ali%3AadSegment%3A{adsegment_id1},urn%3Ali%3AadSegment%3A{adsegement_id2}))",
  summary: "Fetch account intelligence data using ad segment filter",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [
    {"name":"adsegement_id2","wireName":"adsegement_id2","location":"path","required":true,"nullable":false},
    {"name":"adsegment_id1","wireName":"adsegment_id1","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adsegement_id2: Schema.String,
    adsegment_id1: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingCampaignFilterGetAccountIntelligenceQAccountStart0Count10AccountU = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiFetchAccountIntelligenceDataUsingCampaignFilterGetAccountIntelligenceQAccountStart0Count10AccountU",
  platform: "linkedin",
  method: "GET",
  path: "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_30_DAYS,campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id})",
  summary: "Fetch account intelligence data using campaign filter",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [
    {"name":"campaign_id","wireName":"campaign_id","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaign_id: Schema.String,
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingLookbackWindowFilterGetAccountIntelligenceQAccountStart0Count10Ac = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiFetchAccountIntelligenceDataUsingLookbackWindowFilterGetAccountIntelligenceQAccountStart0Count10Ac",
  platform: "linkedin",
  method: "GET",
  path: "/accountIntelligence?q=account&start=0&count=10&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&filterCriteria=(lookbackWindow:LAST_7_DAYS)",
  summary: "Fetch account intelligence data using lookback window filter",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiFetchAllAdAccountsOfTheAuthenticatedUserGetAdAccountUsersQAuthenticatedUser = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiFetchAllAdAccountsOfTheAuthenticatedUserGetAdAccountUsersQAuthenticatedUser",
  platform: "linkedin",
  method: "GET",
  path: "/adAccountUsers?q=authenticatedUser",
  summary: "Fetch all ad accounts of the authenticated user",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiFetchExistingAdSegmentsBasedOnAdAccountGetAdSegmentsQAccountAccountsListUrn3Ali3AsponsoredAccount3 = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiFetchExistingAdSegmentsBasedOnAdAccountGetAdSegmentsQAccountAccountsListUrn3Ali3AsponsoredAccount3",
  platform: "linkedin",
  method: "GET",
  path: "/adSegments?q=account&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})",
  summary: "Fetch existing ad segments based on ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const company_intelligence_api_companyIntelligenceApiSearchForCampaignsUsingSearchCriteriaGetAdAccountsAdAccountsIdAdCampaignsQSearchSearchCampaignGrou = defineEndpointDescriptor({
  id: "company-intelligence-api.companyIntelligenceApiSearchForCampaignsUsingSearchCriteriaGetAdAccountsAdAccountsIdAdCampaignsQSearchSearchCampaignGrou",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{adAccountsId}/adCampaigns?q=search&search.campaignGroup.values[0]=urn:li:sponsoredCampaignGroup:{campaigngroup_id}",
  summary: "Search for campaigns using search criteria",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.company.intelligence.api"],
  rateLimitBucket: "api.company.intelligence.api",
  parameters: [
    {"name":"adAccountsId","wireName":"adAccountsId","location":"path","required":true,"nullable":false},
    {"name":"campaigngroup_id","wireName":"campaigngroup_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adAccountsId: Schema.String,
    campaigngroup_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredConversationsCreateASponsoredConversationPostHttpsBaseUrlConversationAds = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredConversationsCreateASponsoredConversationPostHttpsBaseUrlConversationAds",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds",
  summary: "Create a Sponsored Conversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredConversationsGetASponsoredConversationGetHttpsBaseUrlConversationAdsConversati = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredConversationsGetASponsoredConversationGetHttpsBaseUrlConversationAdsConversati",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}",
  summary: "Get a Sponsored Conversation",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredConversationsGetMultipleSponsoredConversationsGetHttpsBaseUrlConversationAdsId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredConversationsGetMultipleSponsoredConversationsGetHttpsBaseUrlConversationAdsId",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/conversationAds?ids=List({conversation-urn1},{conversation-urn2})'",
  summary: "Get Multiple Sponsored Conversations",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_GET"},
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredConversationsUpdateASponsoredConversationPostHttpsBaseUrlConversationAdsConver = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredConversationsUpdateASponsoredConversationPostHttpsBaseUrlConversationAdsConver",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}",
  summary: "Update a Sponsored Conversation",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchCreateSponsoredMessageContentPostHttpsBaseUrlConversationA = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsBatchCreateSponsoredMessageContentPostHttpsBaseUrlConversationA",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds/{conversationAdsId}/sponsoredMessageContents",
  summary: "Batch create Sponsored Message Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"conversationAdsId","wireName":"conversationAdsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationAdsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchDeleteSponsoredMessageContentDeleteHttpsBaseUrlConversatio = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsBatchDeleteSponsoredMessageContentDeleteHttpsBaseUrlConversatio",
  platform: "linkedin",
  method: "DELETE",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})'",
  summary: "Batch delete Sponsored Message Content",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_DELETE"},
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsCo = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsBatchGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsCo",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})",
  summary: "Batch get Sponsored Message Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_GET"},
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchUpdateSponsoredMessageContentPostHttpsBaseUrlConversationA = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsBatchUpdateSponsoredMessageContentPostHttpsBaseUrlConversationA",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents?ids=List({message-urn1},{message-urn2})",
  summary: "Batch update Sponsored Message Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_UPDATE"},
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsCreateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsCreateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds/{conversationAdsId}/sponsoredMessageContents",
  summary: "Create Sponsored Message Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationAdsId","wireName":"conversationAdsId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationAdsId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsGetAllSponsoredMessageContentGetHttpsBaseUrlConversationAdsConv = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsGetAllSponsoredMessageContentGetHttpsBaseUrlConversationAdsConv",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents",
  summary: "Get All Sponsored Message Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsConvers = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsConvers",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents/{messageUrn}",
  summary: "Get Sponsored Message Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false},
    {"name":"messageUrn","wireName":"messageUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
    messageUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsUpdateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesConversationAdSponsoredMessageContentsUpdateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/conversationAds/{conversationUrn}/sponsoredMessageContents/{messageUrn}",
  summary: "Update Sponsored Message Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"conversationUrn","wireName":"conversationUrn","location":"path","required":true,"nullable":false},
    {"name":"messageUrn","wireName":"messageUrn","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    conversationUrn: Schema.String,
    messageUrn: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesCreateAnOrganicCreativePostHttpsBaseUrlCreatives = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesCreateAnOrganicCreativePostHttpsBaseUrlCreatives",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives",
  summary: "Create an Organic Creative",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesCreateAnSponsoredCreativePostHttpsBaseUrlCreativesActionCreateInline = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesCreateAnSponsoredCreativePostHttpsBaseUrlCreativesActionCreateInline",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives?action=createInline",
  summary: "Create an Sponsored Creative",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesDeleteACreativeDeleteHttpsBaseUrlCreativesCreative20Id = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesDeleteACreativeDeleteHttpsBaseUrlCreativesCreative20Id",
  platform: "linkedin",
  method: "DELETE",
  path: "/https://{baseUrl}/creatives/{creative%20ID}",
  summary: "Delete a Creative",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesGetASponsoredCreativeGetHttpsBaseUrlCreativesUrnCreatives = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesGetASponsoredCreativeGetHttpsBaseUrlCreativesUrnCreatives",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/creatives/{urn_creatives}",
  summary: "Get a Sponsored Creative",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"urn_creatives","wireName":"urn_creatives","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    urn_creatives: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesSearchForCreativeGetHttpsBaseUrlCreativesAccountsListId1Id2Id3CampaignsListId1Id2Id3ContentR = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesSearchForCreativeGetHttpsBaseUrlCreativesAccountsListId1Id2Id3CampaignsListId1Id2Id3ContentR",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/creatives?accounts=List(id1,id2,id3)&campaigns=List(id1,id2,id3)&contentReferences=List(id1,id2,id3)&creatives=List(id1,id2,id3)&intendedStatuses=List(ARCHIVED,CANCELED,ARCHIVED)&isTestAccount=true&isTotalIncluded=false&leadgenCreativeCallToActionDestinations=List()&q=criteria&sortOrder=ASCENDING",
  summary: "Search for Creative",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesCreativesUpdateACreativePostHttpsBaseUrlCreativesCreative20Id = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesCreativesUpdateACreativePostHttpsBaseUrlCreativesCreative20Id",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives/{creative%20ID}",
  summary: "Update a Creative",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdCreateDocumentContentPostPosts = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdCreateDocumentContentPostPosts",
  platform: "linkedin",
  method: "POST",
  path: "/posts",
  summary: "Create document content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdFetchMultipleDocumentContentGetPostsIdsListEncoded20postIdEncoded20postId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdFetchMultipleDocumentContentGetPostsIdsListEncoded20postIdEncoded20postId",
  platform: "linkedin",
  method: "GET",
  path: "/posts?ids=List({encoded%20postId},{encoded%20postId})",
  summary: "Fetch multiple document content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdGetASingleDocumentGetDocumentsDocumentAssetId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdGetASingleDocumentGetDocumentsDocumentAssetId",
  platform: "linkedin",
  method: "GET",
  path: "//documents/{document_asset_id}",
  summary: "Get a single document",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"document_asset_id","wireName":"document_asset_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    document_asset_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdGetMultipleDocumentsGetRestImagesIdsListDocumentUrn1DocumentUrn2 = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdGetMultipleDocumentsGetRestImagesIdsListDocumentUrn1DocumentUrn2",
  platform: "linkedin",
  method: "GET",
  path: "/rest/images?ids=List({document_urn1},{document_urn2})",
  summary: "Get multiple documents",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"document_urn1","wireName":"document_urn1","location":"path","required":true,"nullable":false},
    {"name":"document_urn2","wireName":"document_urn2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    document_urn1: Schema.String,
    document_urn2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdInitializeDocumentUploadPostDocumentsActionInitializeUpload = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdInitializeDocumentUploadPostDocumentsActionInitializeUpload",
  platform: "linkedin",
  method: "POST",
  path: "/documents?action=initializeUpload",
  summary: "Initialize Document Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDocumentAdUploadTheDocumentFileSelectADocumentFileInTheBodyForPostmanToUsePutDocumentUploadurl = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDocumentAdUploadTheDocumentFileSelectADocumentFileInTheBodyForPostmanToUsePutDocumentUploadurl",
  platform: "linkedin",
  method: "PUT",
  path: "/{document_uploadurl}",
  summary: "Upload the Document file (select a document file in the Body for postman to use)",
  effect: "publish",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"document_uploadurl","wireName":"document_uploadurl","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    document_uploadurl: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDynamicFollowerAdCreateADynamicFollowerAdPostHttpsBaseUrlCreatives = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDynamicFollowerAdCreateADynamicFollowerAdPostHttpsBaseUrlCreatives",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives",
  summary: "Create a Dynamic Follower Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDynamicFollowerAdDeleteADynamicFollowerAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDynamicFollowerAdDeleteADynamicFollowerAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "DELETE",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Delete a Dynamic Follower Ad",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDynamicFollowerAdGetADynamicFollowerAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDynamicFollowerAdGetADynamicFollowerAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Get a Dynamic Follower Ad",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesDynamicFollowerAdUpdateADynamicFollowerAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesDynamicFollowerAdUpdateADynamicFollowerAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Update a Dynamic Follower Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdCreateImageContentGetHttpsBaseUrlRestPosts = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdCreateImageContentGetHttpsBaseUrlRestPosts",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/posts",
  summary: "Create Image Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdFetchMultipleImageContentGetHttpsBaseUrlRestPostsIdsListEncoded20postIdEncoded20postId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdFetchMultipleImageContentGetHttpsBaseUrlRestPostsIdsListEncoded20postIdEncoded20postId",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/posts?ids=List({encoded%20postId},{encoded%20postId})",
  summary: "Fetch multiple Image Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdGetASingleImageGetHttpsBaseUrlRestImagesImageUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdGetASingleImageGetHttpsBaseUrlRestImagesImageUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/images/{image_urn}",
  summary: "Get a single Image",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"image_urn","wireName":"image_urn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    image_urn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdGetImageContentGetHttpsBaseUrlRestPostsPostId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdGetImageContentGetHttpsBaseUrlRestPostsPostId",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/posts/{postId}",
  summary: "Get Image Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"postId","wireName":"postId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postId: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdGetMultipleImagesGetRestImagesIdsListImageUrn1ImageUrn2 = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdGetMultipleImagesGetRestImagesIdsListImageUrn1ImageUrn2",
  platform: "linkedin",
  method: "GET",
  path: "/rest/images?ids=List({image_urn1},{image_urn2})",
  summary: "Get Multiple Images",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"image_urn1","wireName":"image_urn1","location":"path","required":true,"nullable":false},
    {"name":"image_urn2","wireName":"image_urn2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    image_urn1: Schema.String,
    image_urn2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdInitializeImageUploadPostImagesActionInitializeUpload = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdInitializeImageUploadPostImagesActionInitializeUpload",
  platform: "linkedin",
  method: "POST",
  path: "/images?action=initializeUpload",
  summary: "Initialize Image Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesImageAdUploadAnImagePutUploadUrl = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesImageAdUploadAnImagePutUploadUrl",
  platform: "linkedin",
  method: "PUT",
  path: "/{upload_url}",
  summary: "Upload an Image",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"upload_url","wireName":"upload_url","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    upload_url: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesInMailContentBatchGetInMailContentGetHttpsBaseUrlRestInMailContentsIdsEncoded20adInMailContentIdIdsEn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesInMailContentBatchGetInMailContentGetHttpsBaseUrlRestInMailContentsIdsEncoded20adInMailContentIdIdsEn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/inMailContents?ids={encoded%20adInMailContentId}&ids={encoded%20adInMailContentId}",
  summary: "Batch Get InMail Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesInMailContentCreateInMailContentPostHttpsBaseUrlRestInMailContents = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesInMailContentCreateInMailContentPostHttpsBaseUrlRestInMailContents",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/rest/inMailContents/",
  summary: "Create InMail Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesInMailContentGetInMailContentGetHttpsBaseUrlRestInMailContentsAdInMailContentId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesInMailContentGetInMailContentGetHttpsBaseUrlRestInMailContentsAdInMailContentId",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/rest/inMailContents/{adInMailContentId}",
  summary: "Get InMail Content",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"adInMailContentId","wireName":"adInMailContentId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adInMailContentId: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesInMailContentSendTestInMailPostHttpsBaseUrlRestInMailContentsActionSendTestInMail = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesInMailContentSendTestInMailPostHttpsBaseUrlRestInMailContentsActionSendTestInMail",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/rest/inMailContents?action=sendTestInMail",
  summary: "Send Test InMail",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesInMailContentUpdateInMailContentPostHttpsBaseUrlRestInMailContentsAdInMailContentId = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesInMailContentUpdateInMailContentPostHttpsBaseUrlRestInMailContentsAdInMailContentId",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/rest/inMailContents/{adInMailContentId}",
  summary: "Update InMail Content",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"adInMailContentId","wireName":"adInMailContentId","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    adInMailContentId: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsCreateOrganicPostPostHttpsBaseUrlPosts = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsCreateOrganicPostPostHttpsBaseUrlPosts",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/posts",
  summary: "Create Organic Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsDeleteAPostDeleteHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsDeleteAPostDeleteHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn",
  platform: "linkedin",
  method: "DELETE",
  path: "/https://{baseUrl}/posts/{encoded%20ugcPostUrn|shareUrn}",
  summary: "Delete a Post",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsFindPostByAccountGetHttpsBaseUrlPostsDscAdAccountEncode20dscAdAccountQDscAdAccount = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsFindPostByAccountGetHttpsBaseUrlPostsDscAdAccountEncode20dscAdAccountQDscAdAccount",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/posts?dscAdAccount={encode%20dscAdAccount}&q=dscAdAccount",
  summary: "Find post by Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsGetMultiplePostByUrnGetHttpsBaseUrlPostsIdsListEncoded20ugcPostUrnEncoded20ugcPostUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsGetMultiplePostByUrnGetHttpsBaseUrlPostsIdsListEncoded20ugcPostUrnEncoded20ugcPostUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/posts?ids=List({encoded%20ugcPostUrn},{encoded%20ugcPostUrn})",
  summary: "Get Multiple Post by URN",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsGetPostsByUrnGetHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsGetPostsByUrnGetHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/posts/{encoded%20ugcPostUrn|shareUrn}",
  summary: "Get Posts by URN",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesPostsUpdateAPostPostHttpsBaseUrlPostsShared20IdUgcPosts20Id = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesPostsUpdateAPostPostHttpsBaseUrlPostsShared20IdUgcPosts20Id",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/posts/{shared%20ID}/{ugcPosts%20ID}",
  summary: "Update a Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesSpotlightAdCreateADynamicSpotlightAdPostHttpsBaseUrlCreatives = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesSpotlightAdCreateADynamicSpotlightAdPostHttpsBaseUrlCreatives",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives",
  summary: "Create a Dynamic Spotlight Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesSpotlightAdDeleteADynamicSpotlightAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesSpotlightAdDeleteADynamicSpotlightAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "DELETE",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Delete a Dynamic Spotlight Ad",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesSpotlightAdGetADynamicSpotlightAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesSpotlightAdGetADynamicSpotlightAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Get a Dynamic Spotlight Ad",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesSpotlightAdUpdateADynamicSpotlightAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesSpotlightAdUpdateADynamicSpotlightAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/creatives/{sponsoredCreative-urn}",
  summary: "Update a Dynamic Spotlight Ad",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesVideoAdGetASingleVideoGetHttpsBaseUrlImagesImageUrn = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesVideoAdGetASingleVideoGetHttpsBaseUrlImagesImageUrn",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/images/{image_urn}",
  summary: "Get a single video",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"image_urn","wireName":"image_urn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    image_urn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesVideoAdGetMultipleVideosGetHttpsBaseUrlImagesIdsListImageUrn1ImageUrn2 = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesVideoAdGetMultipleVideosGetHttpsBaseUrlImagesIdsListImageUrn1ImageUrn2",
  platform: "linkedin",
  method: "GET",
  path: "/https://{baseUrl}/images?ids=List({image_urn1},{image_urn2})",
  summary: "Get Multiple Videos",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"image_urn1","wireName":"image_urn1","location":"path","required":true,"nullable":false},
    {"name":"image_urn2","wireName":"image_urn2","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    image_urn1: Schema.String,
    image_urn2: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesVideoAdInitializeVideoUploadPostHttpsBaseUrlVideosActionInitializeUpload = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesVideoAdInitializeVideoUploadPostHttpsBaseUrlVideosActionInitializeUpload",
  platform: "linkedin",
  method: "POST",
  path: "/https://{baseUrl}/videos?action=initializeUpload",
  summary: "Initialize Video Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const content_apis_contentApisUseCasesVideoAdUploadAVideoPutUploadUrl = defineEndpointDescriptor({
  id: "content-apis.contentApisUseCasesVideoAdUploadAVideoPutUploadUrl",
  platform: "linkedin",
  method: "PUT",
  path: "/{upload_url}",
  summary: "Upload a Video",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.content.apis"],
  rateLimitBucket: "api.content.apis",
  parameters: [
    {"name":"upload_url","wireName":"upload_url","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    upload_url: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow2RetrieveAuthenticatedUserSSponsoredAdAccountsGetAdAccountUsersQAuthentic = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow2RetrieveAuthenticatedUserSSponsoredAdAccountsGetAdAccountUsersQAuthentic",
  platform: "linkedin",
  method: "GET",
  path: "/adAccountUsers?q=authenticatedUser&fields=role,account,user",
  summary: "2. Retrieve authenticated user's Sponsored Ad Accounts",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow4FetchExistingConversionRulesForCapiInTheSelectedAdAccountGetConversionsQ = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow4FetchExistingConversionRulesForCapiInTheSelectedAdAccountGetConversionsQ",
  platform: "linkedin",
  method: "GET",
  path: "/conversions?q=account&account=urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id}&fields=conversionMethod,enabled,type,name,id,attributionType",
  summary: "4. Fetch existing Conversion Rules for CAPI in the selected ad account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow6aCreateANewConversionRuleWithAutoAssociationToAllCampaignsPostConversion = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow6aCreateANewConversionRuleWithAutoAssociationToAllCampaignsPostConversion",
  platform: "linkedin",
  method: "POST",
  path: "/conversions?autoAssociationType=ALL_CAMPAIGNS",
  summary: "6a. Create a new Conversion Rule with auto association to all campaigns",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow6bCreateANewConversionRuleWithAutoAssociationToCampaignsBasedOnConversion = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow6bCreateANewConversionRuleWithAutoAssociationToCampaignsBasedOnConversion",
  platform: "linkedin",
  method: "POST",
  path: "/conversions?autoAssociationType=OBJECTIVE_BASED",
  summary: "6b. Create a new Conversion Rule with auto association to campaigns based on conversion type",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow6cCreateANewConversionRuleWithNoCampaignsAssociationPostConversions = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow6cCreateANewConversionRuleWithNoCampaignsAssociationPostConversions",
  platform: "linkedin",
  method: "POST",
  path: "/conversions",
  summary: "6c. Create a new Conversion Rule with no campaigns association",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow7aFetchActiveCampaignsGetAdAccountsSponsoredaccountIdAdCampaignsQSearchSe = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow7aFetchActiveCampaignsGetAdAccountsSponsoredaccountIdAdCampaignsQSearchSe",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts/{sponsoredaccount_id}/adCampaigns?q=search&search=(status:(values:List(ACTIVE,DRAFT)))&fields=id,name",
  summary: "7a. Fetch active campaigns",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow7cAssociateCampaignsToConversionRulePutCampaignConversionsCampaignUrn3Ali = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow7cAssociateCampaignsToConversionRulePutCampaignConversionsCampaignUrn3Ali",
  platform: "linkedin",
  method: "PUT",
  path: "/campaignConversions/(campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id})",
  summary: "7c. Associate campaigns to conversion rule",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"campaign_id","wireName":"campaign_id","location":"path","required":true,"nullable":false},
    {"name":"conversion_id","wireName":"conversion_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaign_id: Schema.String,
    conversion_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow7dBatchAssociateMultipleCampaignsToConversionRulePutCampaignConversionsId = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow7dBatchAssociateMultipleCampaignsToConversionRulePutCampaignConversionsId",
  platform: "linkedin",
  method: "PUT",
  path: "/campaignConversions?ids=List((campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id}),(campaign:urn%3Ali%3AsponsoredCampaign%3A{campaign_id_2},conversion:urn%3Alla%3AllaPartnerConversion%3A{conversion_id}))",
  summary: "7d. Batch Associate Multiple Campaigns to Conversion Rule",
  effect: "write",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"campaign_id","wireName":"campaign_id","location":"path","required":true,"nullable":false},
    {"name":"campaign_id_2","wireName":"campaign_id_2","location":"path","required":true,"nullable":false},
    {"name":"conversion_id","wireName":"conversion_id","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    campaign_id: Schema.String,
    campaign_id_2: Schema.String,
    conversion_id: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow8aStreamConversionEventToTheConversionRulePostConversionEvents = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow8aStreamConversionEventToTheConversionRulePostConversionEvents",
  platform: "linkedin",
  method: "POST",
  path: "/conversionEvents",
  summary: "8a. Stream conversion event to the conversion rule",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const conversions_api_conversionsApiConversionEventsStreamingWorkflow8bStreamMultipleConversionEventsToTheConversionRulePostConversionEvents = defineEndpointDescriptor({
  id: "conversions-api.conversionsApiConversionEventsStreamingWorkflow8bStreamMultipleConversionEventsToTheConversionRulePostConversionEvents",
  platform: "linkedin",
  method: "POST",
  path: "/conversionEvents",
  summary: "8b. Stream multiple conversion events to the conversion rule",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.conversions.api"],
  rateLimitBucket: "api.conversions.api",
  staticHeaders: {"X-RestLi-Method":"BATCH_CREATE"},
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const createComment = defineEndpointDescriptor({
  id: "createComment",
  platform: "linkedin",
  method: "POST",
  path: "/socialActions/{postUrn}/comments",
  summary: "create Comment",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["comment.publish"],
  rateLimitBucket: "comment.publish",
  parameters: [
    {"name":"postUrn","wireName":"postUrn","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postUrn: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const createPost = defineEndpointDescriptor({
  id: "createPost",
  platform: "linkedin",
  method: "POST",
  path: "/posts",
  summary: "create Post",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["post.publish"],
  rateLimitBucket: "post.publish",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const deletePost = defineEndpointDescriptor({
  id: "deletePost",
  platform: "linkedin",
  method: "DELETE",
  path: "/posts/{postUrn}",
  summary: "delete Post",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["post.delete"],
  rateLimitBucket: "post.delete",
  parameters: [
    {"name":"postUrn","wireName":"postUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postUrn: Schema.String,
  }),
  outputSchema: Schema.Literal(true),
});

export const events_management_api_eventsManagementApiUseCasesCreateOrganizationOwnedEventPostEvents = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesCreateOrganizationOwnedEventPostEvents",
  platform: "linkedin",
  method: "POST",
  path: "/events",
  summary: "Create Organization Owned Event",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const events_management_api_eventsManagementApiUseCasesCreatePersonOwnedEventPostEvents = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesCreatePersonOwnedEventPostEvents",
  platform: "linkedin",
  method: "POST",
  path: "/events",
  summary: "Create Person Owned Event",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const events_management_api_eventsManagementApiUseCasesFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssignee = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssignee",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=roleAssignee",
  summary: "Find a Member's Organization Access Control",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const events_management_api_eventsManagementApiUseCasesFindEventsByOrganizerGetEventsQEventsByOrganizerOrganizerUrn3Ali3Aorganization3A7185861Start0 = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesFindEventsByOrganizerGetEventsQEventsByOrganizerOrganizerUrn3Ali3Aorganization3A7185861Start0",
  platform: "linkedin",
  method: "GET",
  path: "/events?q=eventsByOrganizer&organizer=urn%3Ali%3Aorganization%3A7185861&start=0&count=10&excludeCancelled=true&timeBasedFilter=(lifeCycleState%3APAST)&entryCriteria=PUBLIC&sortOrder=END_TIME_DESC\n",
  summary: "Find Events by Organizer",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const events_management_api_eventsManagementApiUseCasesFindEventsWithLeadGenFormByOrganizerGetEventsOrganizerUrn3Ali3Aorganization3A7185861Start0Cou = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesFindEventsWithLeadGenFormByOrganizerGetEventsOrganizerUrn3Ali3Aorganization3A7185861Start0Cou",
  platform: "linkedin",
  method: "GET",
  path: "/events?organizer=urn%3Ali%3Aorganization%3A7185861&start=0&count=2&q=organizerLeadGenFormEnabledEvents",
  summary: "Find Events with Lead Gen Form by Organizer",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const events_management_api_eventsManagementApiUseCasesGetEventByIdGetEventsId = defineEndpointDescriptor({
  id: "events-management-api.eventsManagementApiUseCasesGetEventByIdGetEventsId",
  platform: "linkedin",
  method: "GET",
  path: "/events/{id}",
  summary: "Get Event by ID",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.events.management.api"],
  rateLimitBucket: "api.events.management.api",
  parameters: [
    {"name":"id","wireName":"id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const exchangeOAuthCode = defineEndpointDescriptor({
  id: "exchangeOAuthCode",
  platform: "linkedin",
  method: "POST",
  path: "https://www.linkedin.com/oauth/v2/accessToken",
  summary: "exchange O Auth Code",
  effect: "write",
  execution: "inline",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["oauth"],
  rateLimitBucket: "oauth",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const finalizeVideoUpload = defineEndpointDescriptor({
  id: "finalizeVideoUpload",
  platform: "linkedin",
  method: "POST",
  path: "/videos?action=finalizeUpload",
  summary: "finalize Video Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["media.upload"],
  rateLimitBucket: "media.upload",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const getMemberPostAnalytics = defineEndpointDescriptor({
  id: "getMemberPostAnalytics",
  platform: "linkedin",
  method: "GET",
  path: "/memberCreatorPostAnalytics",
  summary: "get Member Post Analytics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_member_postAnalytics"],
  capabilities: ["post.metrics.read"],
  rateLimitBucket: "post.metrics.read",
  parameters: [
    {"name":"queryType","wireName":"queryType","location":"query","required":true,"nullable":false},
    {"name":"finder","wireName":"finder","location":"query","required":false,"nullable":false},
    {"name":"entity","wireName":"entity","location":"query","required":false,"nullable":false},
    {"name":"aggregation","wireName":"aggregation","location":"query","required":false,"nullable":false},
    {"name":"dateRange","wireName":"dateRange","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    queryType: Schema.String,
    finder: Schema.optional(Schema.String),
    entity: Schema.optional(Schema.String),
    aggregation: Schema.optional(Schema.String),
    dateRange: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Schema.Unknown,
});

export const getOpenIdUserInfo = defineEndpointDescriptor({
  id: "getOpenIdUserInfo",
  platform: "linkedin",
  method: "GET",
  path: "https://api.linkedin.com/v2/userinfo",
  summary: "get Open Id User Info",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["openid","profile"],
  capabilities: ["oauth"],
  rateLimitBucket: "oauth",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const getOrganization = defineEndpointDescriptor({
  id: "getOrganization",
  platform: "linkedin",
  method: "GET",
  path: "/organizations/{organizationId}",
  summary: "get Organization",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_organization_social"],
  capabilities: ["account.read"],
  rateLimitBucket: "account.read",
  parameters: [
    {"name":"organizationId","wireName":"organizationId","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationId: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const getOrganizationShareStatistics = defineEndpointDescriptor({
  id: "getOrganizationShareStatistics",
  platform: "linkedin",
  method: "GET",
  path: "/organizationalEntityShareStatistics",
  summary: "get Organization Share Statistics",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_organization_social"],
  capabilities: ["post.metrics.read"],
  rateLimitBucket: "post.metrics.read",
  parameters: [
    {"name":"organizationalEntity","wireName":"organizationalEntity","location":"query","required":true,"nullable":false},
    {"name":"shares","wireName":"shares","location":"query","required":false,"nullable":false},
    {"name":"ugcPosts","wireName":"ugcPosts","location":"query","required":false,"nullable":false},
    {"name":"timeIntervals","wireName":"timeIntervals","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organizationalEntity: Schema.String,
    shares: Schema.optional(Schema.Array(Schema.String)),
    ugcPosts: Schema.optional(Schema.Array(Schema.String)),
    timeIntervals: Schema.optional(Schema.Unknown),
  }),
  outputSchema: Schema.Unknown,
});

export const getPost = defineEndpointDescriptor({
  id: "getPost",
  platform: "linkedin",
  method: "GET",
  path: "/posts/{postUrn}",
  summary: "get Post",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_organization_social"],
  capabilities: ["post.read"],
  rateLimitBucket: "post.read",
  parameters: [
    {"name":"postUrn","wireName":"postUrn","location":"path","required":true,"nullable":false},
    {"name":"viewContext","wireName":"viewContext","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postUrn: Schema.String,
    viewContext: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const getSocialMetadata = defineEndpointDescriptor({
  id: "getSocialMetadata",
  platform: "linkedin",
  method: "GET",
  path: "/socialMetadata/{postUrn}",
  summary: "get Social Metadata",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_member_postAnalytics","r_organization_social"],
  capabilities: ["post.metrics.read"],
  rateLimitBucket: "post.metrics.read",
  parameters: [
    {"name":"postUrn","wireName":"postUrn","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postUrn: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const initializeImageUpload = defineEndpointDescriptor({
  id: "initializeImageUpload",
  platform: "linkedin",
  method: "POST",
  path: "/images?action=initializeUpload",
  summary: "initialize Image Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["media.upload"],
  rateLimitBucket: "media.upload",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const initializeVideoUpload = defineEndpointDescriptor({
  id: "initializeVideoUpload",
  platform: "linkedin",
  method: "POST",
  path: "/videos?action=initializeUpload",
  summary: "initialize Video Upload",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["media.upload"],
  rateLimitBucket: "media.upload",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic3GetTheUserSOrganizationSCompanyPagesGetOrganizationAclsQRoleAssigneeStateApprovedCount10Start0 = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic3GetTheUserSOrganizationSCompanyPagesGetOrganizationAclsQRoleAssigneeStateApprovedCount10Start0",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=roleAssignee&state=APPROVED&count=10&start=0",
  summary: "3. Get the user's organization(s) (company pages)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic5GetFormsForTheUserSOrganizationGetLeadFormsOwnerOrganizationUrn3Ali3Aorganization3AOrganizationI = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic5GetFormsForTheUserSOrganizationGetLeadFormsOwnerOrganizationUrn3Ali3Aorganization3AOrganizationI",
  platform: "linkedin",
  method: "GET",
  path: "/leadForms?owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&q=owner&count=10&start=0",
  summary: "5. Get forms for the user's Organization",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    organization_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerOrganiza = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerOrganiza",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses?q=owner&owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&leadType=(leadType:{leadtype_organic})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
  summary: "7. Allow the user to pull back past leads one time to get any missed leads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"leadtype_organic","wireName":"leadtype_organic","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"timerange_end","wireName":"timerange_end","location":"path","required":true,"nullable":false},
    {"name":"timerange_start","wireName":"timerange_start","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadtype_organic: Schema.String,
    organization_id: Schema.String,
    timerange_end: Schema.String,
    timerange_start: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerOrganizationUrn3Ali3Aorg = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerOrganizationUrn3Ali3Aorg",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses?q=owner&owner=(organization:urn%3Ali%3Aorganization%3A{organization_id})&leadType=(leadType:{leadtype_organic})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
  summary: "8. [PULL] Schedule periodic form response (lead) pulls",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"leadtype_organic","wireName":"leadtype_organic","location":"path","required":true,"nullable":false},
    {"name":"organization_id","wireName":"organization_id","location":"path","required":true,"nullable":false},
    {"name":"timerange_end","wireName":"timerange_end","location":"path","required":true,"nullable":false},
    {"name":"timerange_start","wireName":"timerange_start","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadtype_organic: Schema.String,
    organization_id: Schema.String,
    timerange_end: Schema.String,
    timerange_start: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications",
  platform: "linkedin",
  method: "POST",
  path: "/leadNotifications",
  summary: "8. [PUSH] Subscribe for lead notification webhooks",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganic9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfoAs = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganic9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfoAs",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses/{lead_id}?&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)",
  summary: "9. [PUSH] Fetch full lead data after a lead notification is received",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"lead_id","wireName":"lead_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    lead_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesOrganicPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesOrganicPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id",
  platform: "linkedin",
  method: "DELETE",
  path: "/leadnotifications/<webhook%20id>",
  summary: "[PUSH] Delete a registered webhook by id",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored2GetTheUserSSponsoredAccountsAdAccountsGetAdAccountsQSearchSearchStatusValuesListActiveTestFals = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored2GetTheUserSSponsoredAccountsAdAccountsGetAdAccountsQSearchSearchStatusValuesListActiveTestFals",
  platform: "linkedin",
  method: "GET",
  path: "/adAccounts?q=search&search=(status:(values:List(ACTIVE)),test:false)&fields=id,name,test,referenceInfo&count=10&start=0",
  summary: "2. Get the user's sponsored accounts (ad accounts)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored4ValidateTheUserSOrganizationRoleGetOrganizationAclsQRoleAssigneeStateApproved = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored4ValidateTheUserSOrganizationRoleGetOrganizationAclsQRoleAssigneeStateApproved",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls?q=roleAssignee&state=APPROVED",
  summary: "4. Validate the user's organization role",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored5GetFormsForTheChosenSponsoredAccountGetLeadFormsQOwnerOwnerSponsoredAccountUrn3Ali3AsponsoredA = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored5GetFormsForTheChosenSponsoredAccountGetLeadFormsQOwnerOwnerSponsoredAccountUrn3Ali3AsponsoredA",
  platform: "linkedin",
  method: "GET",
  path: "/leadForms?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&count=10&start=0",
  summary: "5. Get forms for the chosen Sponsored Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerSponso = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerSponso",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&leadType=(leadType:{leadtype_sponsored})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
  summary: "7. Allow the user to pull back past leads one time to get any missed leads",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"leadtype_sponsored","wireName":"leadtype_sponsored","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false},
    {"name":"timerange_end","wireName":"timerange_end","location":"path","required":true,"nullable":false},
    {"name":"timerange_start","wireName":"timerange_start","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadtype_sponsored: Schema.String,
    sponsoredaccount_id: Schema.String,
    timerange_end: Schema.String,
    timerange_start: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerSponsoredAccountUrn3Al = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerSponsoredAccountUrn3Al",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses?q=owner&owner=(sponsoredAccount:urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&leadType=(leadType:{leadtype_sponsored})&limitedToTestLeads=false&submittedAtTimeRange=(start:{timerange_start},end:{timerange_end})&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)&count=10&start=0",
  summary: "8. [PULL] Schedule periodic form response (lead) pulls",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"leadtype_sponsored","wireName":"leadtype_sponsored","location":"path","required":true,"nullable":false},
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false},
    {"name":"timerange_end","wireName":"timerange_end","location":"path","required":true,"nullable":false},
    {"name":"timerange_start","wireName":"timerange_start","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    leadtype_sponsored: Schema.String,
    sponsoredaccount_id: Schema.String,
    timerange_end: Schema.String,
    timerange_start: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications",
  platform: "linkedin",
  method: "POST",
  path: "/leadNotifications",
  summary: "8. [PUSH] Subscribe for lead notification webhooks",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsored9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfo = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsored9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfo",
  platform: "linkedin",
  method: "GET",
  path: "/leadFormResponses/{lead_id}?&fields=ownerInfo,associatedEntityInfo,leadMetadataInfo,owner,leadType,versionedLeadGenFormUrn,id,submittedAt,testLead,formResponse,form:(hiddenFields,creationLocale,name,id,content)",
  summary: "9. [PUSH] Fetch full lead data after a lead notification is received",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [
    {"name":"lead_id","wireName":"lead_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    lead_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const lead_sync_leadSyncUseCasesSponsoredPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id = defineEndpointDescriptor({
  id: "lead-sync.leadSyncUseCasesSponsoredPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id",
  platform: "linkedin",
  method: "DELETE",
  path: "/leadnotifications/<webhook%20id>",
  summary: "[PUSH] Delete a registered webhook by id",
  effect: "delete",
  execution: "durable",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.lead.sync"],
  rateLimitBucket: "api.lead.sync",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const listOrganizationAcls = defineEndpointDescriptor({
  id: "listOrganizationAcls",
  platform: "linkedin",
  method: "GET",
  path: "/organizationAcls",
  summary: "list Organization Acls",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_organization_social"],
  capabilities: ["account.read"],
  rateLimitBucket: "account.read",
  parameters: [
    {"name":"role","wireName":"role","location":"query","required":false,"nullable":false},
    {"name":"state","wireName":"state","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    role: Schema.optional(Schema.String),
    state: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const listPostsByAuthor = defineEndpointDescriptor({
  id: "listPostsByAuthor",
  platform: "linkedin",
  method: "GET",
  path: "/posts",
  summary: "list Posts By Author",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["r_organization_social"],
  capabilities: ["post.read"],
  rateLimitBucket: "post.read",
  parameters: [
    {"name":"author","wireName":"author","location":"query","required":true,"nullable":false},
    {"name":"start","wireName":"start","location":"query","required":false,"nullable":false},
    {"name":"count","wireName":"count","location":"query","required":false,"nullable":false},
    {"name":"sortBy","wireName":"sortBy","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    author: Schema.String,
    start: Schema.optional(Schema.Number),
    count: Schema.optional(Schema.Number),
    sortBy: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingFacets",
  summary: "Get a list of available Ad Targeting Facets",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3 = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AageRanges&fields=name,urn",
  summary: "Get all age ranges",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AgrowthRate&fields=name,urn",
  summary: "Get all company growth rate categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQue = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQue",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AcompanyCategory&fields=name,urn",
  summary: "Get all company ranking list categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUs = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUs",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Arevenue&fields=name,urn",
  summary: "Get all company revenue categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AstaffCountRanges&fields=name,urn",
  summary: "Get all company staff count categories",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aindustries&fields=name,urn",
  summary: "Get all industries",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3 = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Ainterests&fields=name,urn",
  summary: "Get all interests",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AjobFunctions&fields=name,urn",
  summary: "Get all job functions",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Atitles&fields=name,urn&start=0&count=1000&totals=false",
  summary: "Get all job titles (paginated)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AmemberBehaviors&fields=name,urn",
  summary: "Get all member behaviors",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUr = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUr",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Aseniorities&fields=name,urn",
  summary: "Get all seniorities",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3Askills&fields=name,urn&start=0&count=10000&totals=false",
  summary: "Get all skills (paginated)",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUse = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUse",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=adTargetingFacet&queryVersion=QUERY_USES_URNS&facet=urn%3Ali%3AadTargetingFacet%3AyearsOfExperienceRanges&fields=name,urn",
  summary: "Get all yearsOfExperience ranges",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20stat = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20stat",
  platform: "linkedin",
  method: "GET",
  path: "/adTargetingEntities?q=typeahead&query=united%20states&facet=urn%3Ali%3AadTargetingFacet%3Alocations&queryVersion=QUERY_USES_URNS&start=0&count=10",
  summary: "Get Bing Geo locations using search typeahead",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningForecastMediaPlansForecastAvgLifetimeFrequencyPostMediaPlanningActionForecastImpressions = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningForecastMediaPlansForecastAvgLifetimeFrequencyPostMediaPlanningActionForecastImpressions",
  platform: "linkedin",
  method: "POST",
  path: "/mediaPlanning?action=forecastImpressions",
  summary: "Forecast Avg Lifetime Frequency",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningForecastMediaPlansForecastImpressionCurvePostMediaPlanningActionForecastImpressions = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningForecastMediaPlansForecastImpressionCurvePostMediaPlanningActionForecastImpressions",
  platform: "linkedin",
  method: "POST",
  path: "/mediaPlanning?action=forecastImpressions",
  summary: "Forecast Impression Curve",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningForecastMediaPlansForecastReachCurvePostMediaPlanningActionForecastReaches = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningForecastMediaPlansForecastReachCurvePostMediaPlanningActionForecastReaches",
  platform: "linkedin",
  method: "POST",
  path: "/mediaPlanning?action=forecastReaches",
  summary: "Forecast Reach Curve",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningForecastMediaPlansForecastReachPercentageCurvePostMediaPlanningActionForecastReaches = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningForecastMediaPlansForecastReachPercentageCurvePostMediaPlanningActionForecastReaches",
  platform: "linkedin",
  method: "POST",
  path: "/mediaPlanning?action=forecastReaches",
  summary: "Forecast Reach Percentage Curve",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningManageMediaPlansCreateAMediaPlanPostMediaPlansForecastMetricTypeReach = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningManageMediaPlansCreateAMediaPlanPostMediaPlansForecastMetricTypeReach",
  platform: "linkedin",
  method: "POST",
  path: "/mediaPlans?forecastMetricType=REACH",
  summary: "Create a Media Plan",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningManageMediaPlansFetchAllMediaPlansInAnAdAccountGetMediaPlansQGetAllMediaPlansAccountUrnUrn3Ali3AsponsoredAc = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningManageMediaPlansFetchAllMediaPlansInAnAdAccountGetMediaPlansQGetAllMediaPlansAccountUrnUrn3Ali3AsponsoredAc",
  platform: "linkedin",
  method: "GET",
  path: "/mediaPlans?q=getAllMediaPlans&accountUrn=urn%3Ali%3AsponsoredAccount%3A123456",
  summary: "Fetch all Media Plans in an Ad Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const media_planning_mediaPlanningManageMediaPlansFetchAMediaPlanGetMediaPlansUrn3Ali3AmediaPlan3A123456AccountUrnUrn3Ali3AsponsoredAccount3A = defineEndpointDescriptor({
  id: "media-planning.mediaPlanningManageMediaPlansFetchAMediaPlanGetMediaPlansUrn3Ali3AmediaPlan3A123456AccountUrnUrn3Ali3AsponsoredAccount3A",
  platform: "linkedin",
  method: "GET",
  path: "/mediaPlans/urn%3Ali%3AmediaPlan%3A123456?accountUrn=urn%3Ali%3AsponsoredAccount%3A123456",
  summary: "Fetch a Media Plan",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.media.planning"],
  rateLimitBucket: "api.media.planning",
  parameters: [],
  inputSchema: Schema.Struct({

  }),
  outputSchema: Schema.Unknown,
});

export const refreshOAuthToken = defineEndpointDescriptor({
  id: "refreshOAuthToken",
  platform: "linkedin",
  method: "POST",
  path: "https://www.linkedin.com/oauth/v2/accessToken",
  summary: "refresh O Auth Token",
  effect: "write",
  execution: "inline",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["oauth"],
  rateLimitBucket: "oauth",
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesAdAnalyticsByConversionCampaignWithCampaignNameTypeStatusCampaignGroupProjectionGetAdAnalyticsQStati = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesAdAnalyticsByConversionCampaignWithCampaignNameTypeStatusCampaignGroupProjectionGetAdAnalyticsQStati",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivots=List(CONVERSION,CAMPAIGN)&fields=externalWebsiteConversions,externalWebsitePostClickConversions,externalWebsitePostViewConversions,costInLocalCurrency,externalWebsiteConversions,costInLocalCurrency,dateRange,pivotValues",
  summary: "By Conversion + Campaign with campaign name, type, status, campaign group projection",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesAdAnalyticsByCreativeCampaignWithCreativeTypeStatusCampaignNameTypeStatusCampaignGroupProjectionGetA = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesAdAnalyticsByCreativeCampaignWithCreativeTypeStatusCampaignNameTypeStatusCampaignGroupProjectionGetA",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivots=List(CREATIVE,CAMPAIGN)&fields=impressions,clicks,totalEngagements,comments,shares,reactions,approximateUniqueImpressions,externalWebsiteConversions,externalWebsitePostClickConversions,externalWebsitePostViewConversions,conversionValueInLocalCurrency,oneClickLeads",
  summary: "By Creative + Campaign with creative type,status & campaign name, type, status, campaign group projection",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesAdAnalyticsByCreativeWithContentProjectionForDifferentCreativeTypesGetAdAnalyticsQAnalyticsDateRange = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesAdAnalyticsByCreativeWithContentProjectionForDifferentCreativeTypesGetAdAnalyticsQAnalyticsDateRange",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=CREATIVE&fields=pivotValues,impressions,likes,clicks,externalWebsiteConversions",
  summary: "By Creative with content projection for different creative types",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesAdAnalyticsByMemberCompanyWithNameWebsiteProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Y = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesAdAnalyticsByMemberCompanyWithNameWebsiteProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Y",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=MONTHLY&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=MEMBER_COMPANY&fields=impressions,approximateUniqueImpressions,clicks,landingPageClicks,totalEngagements,likes,comments,follows,shares,externalWebsiteConversions,pivotValue,dateRange&projection=(*,elements*(*,approximateUniqueImpressions,%20pivotValue~(vanityName,localizedName,localizedWebsite)))",
  summary: "By Member Company with name & website projection",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesAdAnalyticsByMemberIndustryWithNameProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Year202 = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesAdAnalyticsByMemberIndustryWithNameProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Year202",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&dateRange=(start:(day:1,month:1,year:2023),end:(day:30,month:3,year:2023))&timeGranularity=ALL&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&pivot=MEMBER_INDUSTRY&fields=impressions,clicks,landingPageClicks,totalEngagements,likes,comments,follows,shares,externalWebsiteConversions,pivotValues",
  summary: "By Member Industry with name projection",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesAbmMetricsAccountEngagementBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeStar = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesAbmMetricsAccountEngagementBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeStar",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=pivotValues,impressions,totalEngagements",
  summary: "Account Engagement Bundle",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesAbmMetricsAccountPerformanceBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeSta = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesAbmMetricsAccountPerformanceBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeSta",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=externalWebsiteConversions,pivotValues,impressions,totalEngagements,oneClickLeads",
  summary: "Account Performance Bundle",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveBasicConversionTypeGetAdAnalyticsQStatisticsPivotsListValueCampaignVa = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveBasicConversionTypeGetAdAnalyticsQStatisticsPivotsListValueCampaignVa",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&pivots=List((value:CAMPAIGN),(value:CONVERSION))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,externalWebsitePostClickConversions,externalWebsitePostViewConversions",
  summary: "Basic Conversion Type",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyD = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyD",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Company",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanySizeGetAdAnalyticsQAnalyticsPivotMemberComp = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanySizeGetAdAnalyticsQAnalyticsPivotMemberComp",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY_SIZE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Company Size",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberFunctionGetAdAnalyticsQAnalyticsPivotMemberJobFunc = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberFunctionGetAdAnalyticsQAnalyticsPivotMemberJobFunc",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_JOB_FUNCTION&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Function",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberIndustryGetAdAnalyticsQAnalyticsPivotMemberIndustr = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberIndustryGetAdAnalyticsQAnalyticsPivotMemberIndustr",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_INDUSTRY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Industry",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberJobTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitl = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberJobTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitl",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_JOB_TITLE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Job Title",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSenior = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSenior",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_SENIORITY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues",
  summary: "Conversions by Member Seniority",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsThroughFunnelGetAdAnalyticsQStatisticsPivotsListValueConve = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsThroughFunnelGetAdAnalyticsQStatisticsPivotsListValueConve",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&pivots=List((value:CONVERSION),(value:CAMPAIGN),(value:CREATIVE))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,clicks,oneClickLeads,externalWebsiteConversions,pivotValues",
  summary: "Conversions through Funnel",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQStatisticsPivo = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQStatisticsPivo",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&pivots=List(ACCOUNT,CAMPAIGN_GROUP,CAMPAIGN)&dateRange=(start:(day:25,month:5,year:2024),end:(day:24,month:5,year:2025))&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&timeGranularity=ALL&fields=dateRange,pivotValues,impressions,clicks,costInLocalCurrency,externalWebsiteConversions,oneClickLeadFormOpens,oneClickLeads,videoViews,sends,opens,registrations",
  summary: "Ad Metrics By Ad Account + Campaign Group + Campaign",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountGetAdAnalyticsQAnalyticsPivotAccountDateRangeStart = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountGetAdAnalyticsQAnalyticsPivotAccountDateRangeStart",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=ACCOUNT&dateRange=(start:(day:24,month:5,year:2024),end:(day:23,month:5,year:2025))&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&timeGranularity=ALL&fields=dateRange,pivotValues,impressions,clicks,costInLocalCurrency,externalWebsiteConversions,oneClickLeadFormOpens,oneClickLeads,videoViews,sends,opens,registrations",
  summary: "Ad Metrics By Ad Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQAttribute = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQAttribute",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=attributedRevenueMetrics&pivots=List(ACCOUNT,CAMPAIGN_GROUP,CAMPAIGN)&dateRange=(start:(day:25,month:5,year:2024),end:(day:24,month:5,year:2025))&account=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=dateRange,pivotValues,revenueAttributionMetrics",
  summary: "Revenue Metrics By Ad Account + Campaign Group + Campaign",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountGetAdAnalyticsQAttributedRevenueMetricsPivots = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountGetAdAnalyticsQAttributedRevenueMetricsPivots",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=attributedRevenueMetrics&pivots=List(ACCOUNT)&dateRange=(start:(day:24,month:5,year:2024),end:(day:23,month:5,year:2025))&account=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredaccount_id})&fields=dateRange,pivotValues,revenueAttributionMetrics",
  summary: "Revenue Metrics By Ad Account",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredaccount_id","wireName":"sponsoredaccount_id","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredaccount_id: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRa = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRa",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_COMPANY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
  summary: "Demographics - Member Company",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberFuntionGetAdAnalyticsQAnalyticsPivotMemberJobFunctionDa = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberFuntionGetAdAnalyticsQAnalyticsPivotMemberJobFunctionDa",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_JOB_FUNCTION&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
  summary: "Demographics - Member Funtion",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSeniorityDa = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSeniorityDa",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_SENIORITY&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
  summary: "Demographics - Member Seniority",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitleDateRan = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitleDateRan",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=MEMBER_JOB_TITLE&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=externalWebsiteConversions,pivotValues,impressions,clicks,totalEngagements,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency",
  summary: "Demographics - Member Title",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCampaignGetAdAnalyticsQAnalyticsPivotValueCampaignDateRangeS = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCampaignGetAdAnalyticsQAnalyticsPivotValueCampaignDateRangeS",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=(value:CAMPAIGN)&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
  summary: "Performance - by Campaign",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCreativeGetAdAnalyticsQAnalyticsPivotValueCreativeDateRangeS = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCreativeGetAdAnalyticsQAnalyticsPivotValueCreativeDateRangeS",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&pivot=(value:CREATIVE)&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
  summary: "Performance - by Creative",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByObjectiveGetAdAnalyticsQStatisticsPivotsListValueObjectiveTy = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByObjectiveGetAdAnalyticsQStatisticsPivotsListValueObjectiveTy",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=statistics&pivots=List((value:OBJECTIVE_TYPE),(value:CAMPAIGN))&dateRange=(start:(day:1,month:1,year:2022),end:(day:31,month:12,year:2022))&timeGranularity=(value:ALL)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,totalEngagements,pivotValues,videoViews,videoCompletions,sends,opens",
  summary: "Performance - by Objective",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceDashboardOverviewGetAdAnalyticsQAnalyticsDateRangeStartYear202 = defineEndpointDescriptor({
  id: "reporting-roi.reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceDashboardOverviewGetAdAnalyticsQAnalyticsDateRangeStartYear202",
  platform: "linkedin",
  method: "GET",
  path: "/adAnalytics?q=analytics&dateRange=(start:(year:2023,month:4,day:1),end:(year:2023,month:4,day:18))&timeGranularity=(value:DAILY)&accounts=List(urn%3Ali%3AsponsoredAccount%3A{sponsoredAccount})&pivot=(value:CAMPAIGN)&fields=impressions,approximateUniqueImpressions,clicks,oneClickLeads,costInLocalCurrency,costInUsd,dateRange,conversionValueInLocalCurrency,externalWebsiteConversions,pivotValues",
  summary: "Performance - Dashboard Overview",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["api.reporting.roi"],
  rateLimitBucket: "api.reporting.roi",
  parameters: [
    {"name":"sponsoredAccount","wireName":"sponsoredAccount","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    sponsoredAccount: Schema.String,
  }),
  outputSchema: Schema.Unknown,
});

export const updatePostCommentary = defineEndpointDescriptor({
  id: "updatePostCommentary",
  platform: "linkedin",
  method: "POST",
  path: "/posts/{postUrn}",
  summary: "update Post Commentary",
  effect: "publish",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: ["w_member_social","w_organization_social"],
  capabilities: ["post.publish"],
  rateLimitBucket: "post.publish",
  parameters: [
    {"name":"postUrn","wireName":"postUrn","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    postUrn: Schema.String,
    body: Schema.Unknown,
  }),
  outputSchema: Schema.Literal(true),
});

export const endpointDescriptors = [audience_insights_audienceInsightsAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets, audience_insights_audienceInsightsAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU, audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ, audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersion, audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer, audience_insights_audienceInsightsAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQ, audience_insights_audienceInsightsAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacet, audience_insights_audienceInsightsAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU, audience_insights_audienceInsightsAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac, audience_insights_audienceInsightsAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesU, audience_insights_audienceInsightsAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns, audience_insights_audienceInsightsAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFace, audience_insights_audienceInsightsAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns, audience_insights_audienceInsightsAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuery, audience_insights_audienceInsightsAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20s, audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopInterestsOfDirectorsInFinanceAndInTheUsPostTargetingAudienceInsightsAc, audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopJobFunctionsAmongMembersWithProductManagementSkillsInNyPostTargetingAu, audience_insights_audienceInsightsFetchAudienceInsightsWhatAreTheTopSkillsOfSotwareEngineersInTheUsPostTargetingAudienceInsightsActionAudi, audience_insights_audienceInsightsFetchAudienceInsightsWhatTopYearOfExperienceRangesDoUsMembersWhoAreInterestedInComputerProgrammingHavePo, audiences_audiencesUseCasesCsvListUploadAccountContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSear, audiences_audiencesUseCasesCsvListUploadAccountContactTargeting6CreateListUploadDmpSegmentPostDmpSegments, audiences_audiencesUseCasesCsvListUploadAccountContactTargeting7AttachTheUploadedListToTheListUploadDmpSegmentPostDmpSegmentsListu, audiences_audiencesUseCasesCsvListUploadAccountContactTargeting8MonitorStatusOfTheListUploadDmpSegmentsGetDmpSegmentsQAccountAccou, audiences_audiencesUseCasesPredictiveAudiences1RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchTypeValuesListB, audiences_audiencesUseCasesPredictiveAudiences2CreateAPredictiveAudienceDmpSegmentPostDmpSegments, audiences_audiencesUseCasesPredictiveAudiences3CreatePredictiveAudiencePostDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudience, audiences_audiencesUseCasesPredictiveAudiences4RetrieveThePredictiveAudienceGetDmpSegmentsPaDmpSegmentIdBusinessObjectiveBasedAudi, audiences_audiencesUseCasesStreamingCompaniesAccountTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearch, audiences_audiencesUseCasesStreamingCompaniesAccountTargeting4FetchExistingAudiencesForChosenAdAccountsGetDmpSegmentsQAccountAccou, audiences_audiencesUseCasesStreamingCompaniesAccountTargeting6CreateACompanyDmpSegmentPostDmpSegments, audiences_audiencesUseCasesStreamingCompaniesAccountTargeting7StreamCompanyDataAddOrRemoveMultipleCompaniesPostDmpSegmentsCompanyS, audiences_audiencesUseCasesStreamingCompaniesAccountTargeting8MonitorStatusOfTheCompanyDmpSegmentsGetDmpSegmentsQAccountAccountUrn, audiences_audiencesUseCasesStreamingUsersContactTargeting2RetrieveTheUserSAdAccountsSponsoredAccountGetAdAccountsQSearchSearchType, audiences_audiencesUseCasesStreamingUsersContactTargeting4FetchExistingAudiencesForTheChosenAdAccountGetDmpSegmentsQAccountAccount, audiences_audiencesUseCasesStreamingUsersContactTargeting6CreateAUserDmpSegmentSkipThisStepIfTheUserChoseToUpdateAnExistingAudienc, audiences_audiencesUseCasesStreamingUsersContactTargeting7StreamUserDataAddOrRemoveMultipleUsersPostDmpSegmentsUserSegmentIdUsers, audiences_audiencesUseCasesStreamingUsersContactTargeting8MonitorStatusOfTheUserDmpSegmentsGetDmpSegmentsQAccountAccountUrn3Ali3As, batchGetSocialMetadata, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementCreateAnAdAccountPostAdAccounts, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementCreateATestAdAccountPostAdAccounts, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementFetchTheAdAccountByIdGetAdAccountsSponsoredaccountId, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementSearchAccountByTypeGetAdAccountsQSearchSearchTypeValuesListBu, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementSearchAccountsByStatusGetAdAccountsQSearchSearchStatusValuesL, campaign_management_campaignManagementUseCasesAccountStructureAccountManagementUpdateAdAccountNamePostAdAccountsSponsoredaccountId, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateACampaignGroupPostAdAccountsAdAccountsIdAdCampaig, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementCreateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteACampaignGroupDeleteAdAccountsAdAccountsIdAdCampa, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementDeleteMultipleCampaignGroupsDeleteAdAccountsAdAccountsI, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchACampaignGroupByIdGetAdAccountsAdAccountsIdAdCampa, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementFetchMultipleCampaignGroupsByIdGetAdAccountsAdAccountsI, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementSearchForCampaignGroupsGetAdAccountsAdAccountsIdAdCampa, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateCampaignGroupPostAdAccountsAdAccountsIdAdCampaign, campaign_management_campaignManagementUseCasesAccountStructureCampaignGroupManagementUpdateMultipleCampaignGroupsPostAdAccountsAdAccountsIdA, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementArchiveACampaignPostAdAccountsAdAccountsIdAdCampaignsCampaign, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementCreateCampaignSponsoredUpdatesPostAdAccountsAdAccountsIdAdCam, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementCreateMultipleCampaignUsingBatchPostAdAccountsAdAccountsIdAdC, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementDeleteCampaignUsingCampaignIdDeleteAdAccountsAdAccountsIdAdCa, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementDeleteMultipleCampaignsUsingBatchDeleteAdAccountsAdAccountsId, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementFetchACampaignUsingCampaignIdGetAdAccountsAdAccountsIdAdCampa, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementReactivateACampaignPostAdAccountsAdAccountsIdAdCampaignsCampa, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementSearchForCampaignUsingCriteriaGetAdAccountsAdAccountsIdAdCamp, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementUpdateCampaignUsingCampaignIdPostAdAccountsAdAccountsIdAdCamp, campaign_management_campaignManagementUseCasesAccountStructureCampaignMangementUpdateMultipleCampaignsUsingBatchPostAdAccountsAdAccountsIdAd, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementCreateACreativePostAdAccountsAdAccountsIdCreatives, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementCreateMultipleCreativesUsingBatchPostAdAccountsAdAccountsIdC, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementDeleteCreativeUsingCreativeIdDeleteAdAccountsAdAccountsIdCre, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementDeleteMultipleCreativesUsingBatchDeleteAdAccountsAdAccountsI, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementFetchACreativeUsingCreativeIdGetAdAccountsAdAccountsIdCreati, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementFetchMultipleCreativesUsingBatchGetAdAccountsAdAccountsIdCre, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementSearchCreativeUsingCriteriaGetAdAccountsAdAccountsIdCreative, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementUpdateCreativeUsingCreativeIdPostAdAccountsAdAccountsIdCreat, campaign_management_campaignManagementUseCasesAccountStructureCreativeManagementUpdateMultipleCreativeUsingBatchPostAdAccountsAdAccountsIdCr, campaign_management_campaignManagementUseCasesAccountStructureUserAccessCreateAdAccountUserPutAdAccountUsersAccountUrn3Ali3AsponsoredAccount, campaign_management_campaignManagementUseCasesAccountStructureUserAccessDeleteAnAdAccountUserDeleteAdAccountUsersAccountUrn3Ali3AsponsoredAc, campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchAnAdAccountUserGetAdAccountUsersAccountUrn3Ali3AsponsoredAccoun, campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSAdAccountsGetAdAccountUsersQAuthenticatedU, campaign_management_campaignManagementUseCasesAccountStructureUserAccessFetchTheAuthenticatedUserSOrganizationRolesGetOrganizationAclsQRoleA, campaign_management_campaignManagementUseCasesAccountStructureUserAccessFindAdAccountUsersByAccountsGetAdAccountUsersQAccountsAccountsListUr, campaign_management_campaignManagementUseCasesAccountStructureUserAccessUpdateExistingAdAccountUserPostAdAccountUsersAccountUrn3Ali3Asponsor, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation2RegisterDocumentUploadPostDocumentsActionI, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation3UploadTheDocumentFileSelectADocumentFileIn, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation4CheckTheStatusOfTheUploadGetAssetsDocument, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation5CreatePostPostPosts, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation6CreateACampaignForTheDocumentAdPostAdCampa, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationDocumentAdCreation7CreateACreativeForTheDocumentAdPostCreativ, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares2RegisterUploa, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares3UploadTheImag, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares4CheckTheStatu, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares5CreateADarkSh, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares6CreateACampai, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationDirectSponsoredContentDarkShares7CreateACreati, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent2RegisterUploadPostAssetsActio, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent3UploadTheImageFileSelectAnIma, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent5CreateASharePostShares, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent6CreateACampaignForTheImageAdP, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationImageAdCreationSponsoredContent7CreateACreativeForTheImageAdP, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent2RegisterVideoUploadPostAssets, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent3UploadTheVideoFileSelectAVide, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent4CheckTheStatusOfTheUploadGetA, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent5CreatePostPostPosts, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent6CreateACampaignForTheVideoAdP, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdCreationVideoAdCreationSponsoredContent7CreateACreativeForTheVideoAdP, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsForecastingAdSupplyForecastApiGetAdSupplyForecastsQCriteriaV2Account, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFetchTheAdTargetingFacetsGetAdTargetingFacets, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByFacetSenioritiesGetAdTargetingEntitiesQAdTarg, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesBySimilarEntitiesGetAdTargetingEntitiesQSimilar, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByTypeaheadSuggestionsGetAdTargetingEntitiesQTy, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAdsTargetingFindEntitiesByUrnsGetAdTargetingEntitiesQUrnsQueryVersionQu, campaign_management_campaignManagementUseCasesAdvertisingAndTargetingAudienceCountsFindAudienceCountByTargetingCriteriaGetAudienceCountsQTar, community_management_communityManagementUseCasesMemberPostAnalyticsAggregateAnalyticsForMemberPostsPostMemberCreatorPostAnalyticsQMeQueryType, community_management_communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberPostPostMemberCreatorPostAnalyticsQEntityEntityS, community_management_communityManagementUseCasesMemberPostAnalyticsAnalyticsForSpecificMemberVideoPostPostMemberCreatorVideoAnalyticsQEntityE, community_management_communityManagementUseCasesMemberProfileAnalyticsFollowersCountByDataRangeGetMemberFollowersCountQDateRangeDateRangeStar, community_management_communityManagementUseCasesMemberProfileAnalyticsTotalFollowersCountGetMemberFollowersCountQMe, community_management_communityManagementUseCasesOrganizationAccessControlsFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssign, community_management_communityManagementUseCasesOrganizationAccessControlsFindOrganizationAccessControlGetOrganizationAclsQOrganizationOrgani, community_management_communityManagementUseCasesOrganizationAccessControlsFindOrganizationAdministratorsGetOrganizationAclsQOrganizationOrgan, community_management_communityManagementUseCasesOrganizationFollowersSearchByKeywordGetPeopleTypeaheadQOrganizationFollowersKeywordsChrisOrga, community_management_communityManagementUseCasesOrganizationFollowersSearchByVanityUrlGetVanityUrlQVanityUrlAsOrganizationVanityUrlHttps3AWww, community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnAdministeredOrganizationBrandsGetOrganizationBr, community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsBatchGetOnNonAdministeredOrganizationBrandsGetOrganizatio, community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsFindAdministeredOrganizationBrandsByParentOrgGetOrganizat, community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsFindOrganizationBrandByVanityNameGetOrganizationBrandsQVa, community_management_communityManagementUseCasesOrganizationLookupOrganizationBrandsRetrieveAnAdministeredOrganizationBrandGetOrganizationBra, community_management_communityManagementUseCasesOrganizationLookupOrganizationsBatchGetByAdministeredOrgIdsGetOrganizationsIdsListOrganizatio, community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindNonAdministeredOrganizationGetOrganizationsLookupIdsListOr, community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByEmailDomainGetOrganizationsQEmailDomainEmail, community_management_communityManagementUseCasesOrganizationLookupOrganizationsFindOrganizationByVanityNameGetOrganizationsQVanityNameVanityN, community_management_communityManagementUseCasesOrganizationLookupOrganizationsLookupByOrganizationPrimaryTypeGetOrganizationsOrganizationIdP, community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationByIdGetOrganizationsOrganizationId, community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationFollowerCountGetNetworkSizesUrnLiOrganizat, community_management_communityManagementUseCasesOrganizationLookupOrganizationsRetrieveOrganizationUsingProjectionGetOrganizationsOrganizatio, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow2CreateAShareWith, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPullWorkflow3RetrieveNotifica, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow2CreateAShareWith, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow3CreateASubscript, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow4RetrieveSubscrip, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow5RetrieveSubscrip, community_management_communityManagementUseCasesSocialActionsNotificationsOrganizationSocialActionsNotificationsPushWorkflow6RemoveASubscript, community_management_communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsLifetimeFollowerStatisticsGetOrganizationalEntity, community_management_communityManagementUseCasesStatisticsApisOrganizationFollowerStatisticsTimeBoundFollowerStatisticsGetOrganizationalEntit, community_management_communityManagementUseCasesStatisticsApisOrganizationPageStatisticsLifetimePageStatisticsGetOrganizationPageStatisticsQO, community_management_communityManagementUseCasesStatisticsApisOrganizationPageStatisticsTimeBoundOrganizationPageStatisticsGetOrganizationPag, community_management_communityManagementUseCasesStatisticsApisOrganizationShareStatisticsLifetimeShareStatisticsGetOrganizationalEntityShareS, community_management_communityManagementUseCasesStatisticsApisOrganizationShareStatisticsTimeBoundShareStatisticsGetOrganizationalEntityShare, company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingAdSegmentFilterGetAccountIntelligenceQAccountStart0Count10Account, company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingCampaignFilterGetAccountIntelligenceQAccountStart0Count10AccountU, company_intelligence_api_companyIntelligenceApiFetchAccountIntelligenceDataUsingLookbackWindowFilterGetAccountIntelligenceQAccountStart0Count10Ac, company_intelligence_api_companyIntelligenceApiFetchAllAdAccountsOfTheAuthenticatedUserGetAdAccountUsersQAuthenticatedUser, company_intelligence_api_companyIntelligenceApiFetchExistingAdSegmentsBasedOnAdAccountGetAdSegmentsQAccountAccountsListUrn3Ali3AsponsoredAccount3, company_intelligence_api_companyIntelligenceApiSearchForCampaignsUsingSearchCriteriaGetAdAccountsAdAccountsIdAdCampaignsQSearchSearchCampaignGrou, content_apis_contentApisUseCasesConversationAdSponsoredConversationsCreateASponsoredConversationPostHttpsBaseUrlConversationAds, content_apis_contentApisUseCasesConversationAdSponsoredConversationsGetASponsoredConversationGetHttpsBaseUrlConversationAdsConversati, content_apis_contentApisUseCasesConversationAdSponsoredConversationsGetMultipleSponsoredConversationsGetHttpsBaseUrlConversationAdsId, content_apis_contentApisUseCasesConversationAdSponsoredConversationsUpdateASponsoredConversationPostHttpsBaseUrlConversationAdsConver, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchCreateSponsoredMessageContentPostHttpsBaseUrlConversationA, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchDeleteSponsoredMessageContentDeleteHttpsBaseUrlConversatio, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsCo, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsBatchUpdateSponsoredMessageContentPostHttpsBaseUrlConversationA, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsCreateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsGetAllSponsoredMessageContentGetHttpsBaseUrlConversationAdsConv, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsGetSponsoredMessageContentGetHttpsBaseUrlConversationAdsConvers, content_apis_contentApisUseCasesConversationAdSponsoredMessageContentsUpdateSponsoredMessageContentPostHttpsBaseUrlConversationAdsCon, content_apis_contentApisUseCasesCreativesCreateAnOrganicCreativePostHttpsBaseUrlCreatives, content_apis_contentApisUseCasesCreativesCreateAnSponsoredCreativePostHttpsBaseUrlCreativesActionCreateInline, content_apis_contentApisUseCasesCreativesDeleteACreativeDeleteHttpsBaseUrlCreativesCreative20Id, content_apis_contentApisUseCasesCreativesGetASponsoredCreativeGetHttpsBaseUrlCreativesUrnCreatives, content_apis_contentApisUseCasesCreativesSearchForCreativeGetHttpsBaseUrlCreativesAccountsListId1Id2Id3CampaignsListId1Id2Id3ContentR, content_apis_contentApisUseCasesCreativesUpdateACreativePostHttpsBaseUrlCreativesCreative20Id, content_apis_contentApisUseCasesDocumentAdCreateDocumentContentPostPosts, content_apis_contentApisUseCasesDocumentAdFetchMultipleDocumentContentGetPostsIdsListEncoded20postIdEncoded20postId, content_apis_contentApisUseCasesDocumentAdGetASingleDocumentGetDocumentsDocumentAssetId, content_apis_contentApisUseCasesDocumentAdGetMultipleDocumentsGetRestImagesIdsListDocumentUrn1DocumentUrn2, content_apis_contentApisUseCasesDocumentAdInitializeDocumentUploadPostDocumentsActionInitializeUpload, content_apis_contentApisUseCasesDocumentAdUploadTheDocumentFileSelectADocumentFileInTheBodyForPostmanToUsePutDocumentUploadurl, content_apis_contentApisUseCasesDynamicFollowerAdCreateADynamicFollowerAdPostHttpsBaseUrlCreatives, content_apis_contentApisUseCasesDynamicFollowerAdDeleteADynamicFollowerAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesDynamicFollowerAdGetADynamicFollowerAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesDynamicFollowerAdUpdateADynamicFollowerAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesImageAdCreateImageContentGetHttpsBaseUrlRestPosts, content_apis_contentApisUseCasesImageAdFetchMultipleImageContentGetHttpsBaseUrlRestPostsIdsListEncoded20postIdEncoded20postId, content_apis_contentApisUseCasesImageAdGetASingleImageGetHttpsBaseUrlRestImagesImageUrn, content_apis_contentApisUseCasesImageAdGetImageContentGetHttpsBaseUrlRestPostsPostId, content_apis_contentApisUseCasesImageAdGetMultipleImagesGetRestImagesIdsListImageUrn1ImageUrn2, content_apis_contentApisUseCasesImageAdInitializeImageUploadPostImagesActionInitializeUpload, content_apis_contentApisUseCasesImageAdUploadAnImagePutUploadUrl, content_apis_contentApisUseCasesInMailContentBatchGetInMailContentGetHttpsBaseUrlRestInMailContentsIdsEncoded20adInMailContentIdIdsEn, content_apis_contentApisUseCasesInMailContentCreateInMailContentPostHttpsBaseUrlRestInMailContents, content_apis_contentApisUseCasesInMailContentGetInMailContentGetHttpsBaseUrlRestInMailContentsAdInMailContentId, content_apis_contentApisUseCasesInMailContentSendTestInMailPostHttpsBaseUrlRestInMailContentsActionSendTestInMail, content_apis_contentApisUseCasesInMailContentUpdateInMailContentPostHttpsBaseUrlRestInMailContentsAdInMailContentId, content_apis_contentApisUseCasesPostsCreateOrganicPostPostHttpsBaseUrlPosts, content_apis_contentApisUseCasesPostsDeleteAPostDeleteHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn, content_apis_contentApisUseCasesPostsFindPostByAccountGetHttpsBaseUrlPostsDscAdAccountEncode20dscAdAccountQDscAdAccount, content_apis_contentApisUseCasesPostsGetMultiplePostByUrnGetHttpsBaseUrlPostsIdsListEncoded20ugcPostUrnEncoded20ugcPostUrn, content_apis_contentApisUseCasesPostsGetPostsByUrnGetHttpsBaseUrlPostsEncoded20ugcPostUrnShareUrn, content_apis_contentApisUseCasesPostsUpdateAPostPostHttpsBaseUrlPostsShared20IdUgcPosts20Id, content_apis_contentApisUseCasesSpotlightAdCreateADynamicSpotlightAdPostHttpsBaseUrlCreatives, content_apis_contentApisUseCasesSpotlightAdDeleteADynamicSpotlightAdDeleteHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesSpotlightAdGetADynamicSpotlightAdGetHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesSpotlightAdUpdateADynamicSpotlightAdPostHttpsBaseUrlCreativesSponsoredCreativeUrn, content_apis_contentApisUseCasesVideoAdGetASingleVideoGetHttpsBaseUrlImagesImageUrn, content_apis_contentApisUseCasesVideoAdGetMultipleVideosGetHttpsBaseUrlImagesIdsListImageUrn1ImageUrn2, content_apis_contentApisUseCasesVideoAdInitializeVideoUploadPostHttpsBaseUrlVideosActionInitializeUpload, content_apis_contentApisUseCasesVideoAdUploadAVideoPutUploadUrl, conversions_api_conversionsApiConversionEventsStreamingWorkflow2RetrieveAuthenticatedUserSSponsoredAdAccountsGetAdAccountUsersQAuthentic, conversions_api_conversionsApiConversionEventsStreamingWorkflow4FetchExistingConversionRulesForCapiInTheSelectedAdAccountGetConversionsQ, conversions_api_conversionsApiConversionEventsStreamingWorkflow6aCreateANewConversionRuleWithAutoAssociationToAllCampaignsPostConversion, conversions_api_conversionsApiConversionEventsStreamingWorkflow6bCreateANewConversionRuleWithAutoAssociationToCampaignsBasedOnConversion, conversions_api_conversionsApiConversionEventsStreamingWorkflow6cCreateANewConversionRuleWithNoCampaignsAssociationPostConversions, conversions_api_conversionsApiConversionEventsStreamingWorkflow7aFetchActiveCampaignsGetAdAccountsSponsoredaccountIdAdCampaignsQSearchSe, conversions_api_conversionsApiConversionEventsStreamingWorkflow7cAssociateCampaignsToConversionRulePutCampaignConversionsCampaignUrn3Ali, conversions_api_conversionsApiConversionEventsStreamingWorkflow7dBatchAssociateMultipleCampaignsToConversionRulePutCampaignConversionsId, conversions_api_conversionsApiConversionEventsStreamingWorkflow8aStreamConversionEventToTheConversionRulePostConversionEvents, conversions_api_conversionsApiConversionEventsStreamingWorkflow8bStreamMultipleConversionEventsToTheConversionRulePostConversionEvents, createComment, createPost, deletePost, events_management_api_eventsManagementApiUseCasesCreateOrganizationOwnedEventPostEvents, events_management_api_eventsManagementApiUseCasesCreatePersonOwnedEventPostEvents, events_management_api_eventsManagementApiUseCasesFindAMemberSOrganizationAccessControlGetOrganizationAclsQRoleAssignee, events_management_api_eventsManagementApiUseCasesFindEventsByOrganizerGetEventsQEventsByOrganizerOrganizerUrn3Ali3Aorganization3A7185861Start0, events_management_api_eventsManagementApiUseCasesFindEventsWithLeadGenFormByOrganizerGetEventsOrganizerUrn3Ali3Aorganization3A7185861Start0Cou, events_management_api_eventsManagementApiUseCasesGetEventByIdGetEventsId, exchangeOAuthCode, finalizeVideoUpload, getMemberPostAnalytics, getOpenIdUserInfo, getOrganization, getOrganizationShareStatistics, getPost, getSocialMetadata, initializeImageUpload, initializeVideoUpload, lead_sync_leadSyncUseCasesOrganic3GetTheUserSOrganizationSCompanyPagesGetOrganizationAclsQRoleAssigneeStateApprovedCount10Start0, lead_sync_leadSyncUseCasesOrganic5GetFormsForTheUserSOrganizationGetLeadFormsOwnerOrganizationUrn3Ali3Aorganization3AOrganizationI, lead_sync_leadSyncUseCasesOrganic7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerOrganiza, lead_sync_leadSyncUseCasesOrganic8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerOrganizationUrn3Ali3Aorg, lead_sync_leadSyncUseCasesOrganic8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications, lead_sync_leadSyncUseCasesOrganic9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfoAs, lead_sync_leadSyncUseCasesOrganicPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id, lead_sync_leadSyncUseCasesSponsored2GetTheUserSSponsoredAccountsAdAccountsGetAdAccountsQSearchSearchStatusValuesListActiveTestFals, lead_sync_leadSyncUseCasesSponsored4ValidateTheUserSOrganizationRoleGetOrganizationAclsQRoleAssigneeStateApproved, lead_sync_leadSyncUseCasesSponsored5GetFormsForTheChosenSponsoredAccountGetLeadFormsQOwnerOwnerSponsoredAccountUrn3Ali3AsponsoredA, lead_sync_leadSyncUseCasesSponsored7AllowTheUserToPullBackPastLeadsOneTimeToGetAnyMissedLeadsGetLeadFormResponsesQOwnerOwnerSponso, lead_sync_leadSyncUseCasesSponsored8PullSchedulePeriodicFormResponseLeadPullsGetLeadFormResponsesQOwnerOwnerSponsoredAccountUrn3Al, lead_sync_leadSyncUseCasesSponsored8PushSubscribeForLeadNotificationWebhooksPostLeadNotifications, lead_sync_leadSyncUseCasesSponsored9PushFetchFullLeadDataAfterALeadNotificationIsReceivedGetLeadFormResponsesLeadIdFieldsOwnerInfo, lead_sync_leadSyncUseCasesSponsoredPushDeleteARegisteredWebhookByIdDeleteLeadnotificationsWebhook20id, listOrganizationAcls, listPostsByAuthor, media_planning_mediaPlanningAdTargetingEntitiesGetAListOfAvailableAdTargetingFacetsGetAdTargetingFacets, media_planning_mediaPlanningAdTargetingEntitiesGetAllAgeRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3, media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyGrowthRateCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer, media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyRankingListCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQue, media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyRevenueCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUs, media_planning_mediaPlanningAdTargetingEntitiesGetAllCompanyStaffCountCategoriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQuer, media_planning_mediaPlanningAdTargetingEntitiesGetAllIndustriesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn, media_planning_mediaPlanningAdTargetingEntitiesGetAllInterestsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUrn3, media_planning_mediaPlanningAdTargetingEntitiesGetAllJobFunctionsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetU, media_planning_mediaPlanningAdTargetingEntitiesGetAllJobTitlesPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrns, media_planning_mediaPlanningAdTargetingEntitiesGetAllMemberBehaviorsGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac, media_planning_mediaPlanningAdTargetingEntitiesGetAllSenioritiesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFacetUr, media_planning_mediaPlanningAdTargetingEntitiesGetAllSkillsPaginatedGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUsesUrnsFac, media_planning_mediaPlanningAdTargetingEntitiesGetAllYearsOfExperienceRangesGetAdTargetingEntitiesQAdTargetingFacetQueryVersionQueryUse, media_planning_mediaPlanningAdTargetingEntitiesGetBingGeoLocationsUsingSearchTypeaheadGetAdTargetingEntitiesQTypeaheadQueryUnited20stat, media_planning_mediaPlanningForecastMediaPlansForecastAvgLifetimeFrequencyPostMediaPlanningActionForecastImpressions, media_planning_mediaPlanningForecastMediaPlansForecastImpressionCurvePostMediaPlanningActionForecastImpressions, media_planning_mediaPlanningForecastMediaPlansForecastReachCurvePostMediaPlanningActionForecastReaches, media_planning_mediaPlanningForecastMediaPlansForecastReachPercentageCurvePostMediaPlanningActionForecastReaches, media_planning_mediaPlanningManageMediaPlansCreateAMediaPlanPostMediaPlansForecastMetricTypeReach, media_planning_mediaPlanningManageMediaPlansFetchAllMediaPlansInAnAdAccountGetMediaPlansQGetAllMediaPlansAccountUrnUrn3Ali3AsponsoredAc, media_planning_mediaPlanningManageMediaPlansFetchAMediaPlanGetMediaPlansUrn3Ali3AmediaPlan3A123456AccountUrnUrn3Ali3AsponsoredAccount3A, refreshOAuthToken, reporting_roi_reportingRoiUseCasesAdAnalyticsByConversionCampaignWithCampaignNameTypeStatusCampaignGroupProjectionGetAdAnalyticsQStati, reporting_roi_reportingRoiUseCasesAdAnalyticsByCreativeCampaignWithCreativeTypeStatusCampaignNameTypeStatusCampaignGroupProjectionGetA, reporting_roi_reportingRoiUseCasesAdAnalyticsByCreativeWithContentProjectionForDifferentCreativeTypesGetAdAnalyticsQAnalyticsDateRange, reporting_roi_reportingRoiUseCasesAdAnalyticsByMemberCompanyWithNameWebsiteProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Y, reporting_roi_reportingRoiUseCasesAdAnalyticsByMemberIndustryWithNameProjectionGetAdAnalyticsQAnalyticsDateRangeStartDay1Month1Year202, reporting_roi_reportingRoiUseCasesB2BTemplatesAbmMetricsAccountEngagementBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeStar, reporting_roi_reportingRoiUseCasesB2BTemplatesAbmMetricsAccountPerformanceBundleGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRangeSta, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveBasicConversionTypeGetAdAnalyticsQStatisticsPivotsListValueCampaignVa, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyD, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberCompanySizeGetAdAnalyticsQAnalyticsPivotMemberComp, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberFunctionGetAdAnalyticsQAnalyticsPivotMemberJobFunc, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberIndustryGetAdAnalyticsQAnalyticsPivotMemberIndustr, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberJobTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitl, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsByMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSenior, reporting_roi_reportingRoiUseCasesB2BTemplatesConversionsDeepDiveConversionsThroughFunnelGetAdAnalyticsQStatisticsPivotsListValueConve, reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQStatisticsPivo, reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionAdMetricsByAdAccountGetAdAnalyticsQAnalyticsPivotAccountDateRangeStart, reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountCampaignGroupCampaignGetAdAnalyticsQAttribute, reporting_roi_reportingRoiUseCasesB2BTemplatesRevenueAttributionRevenueMetricsByAdAccountGetAdAnalyticsQAttributedRevenueMetricsPivots, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberCompanyGetAdAnalyticsQAnalyticsPivotMemberCompanyDateRa, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberFuntionGetAdAnalyticsQAnalyticsPivotMemberJobFunctionDa, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberSeniorityGetAdAnalyticsQAnalyticsPivotMemberSeniorityDa, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsDemographicsMemberTitleGetAdAnalyticsQAnalyticsPivotMemberJobTitleDateRan, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCampaignGetAdAnalyticsQAnalyticsPivotValueCampaignDateRangeS, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByCreativeGetAdAnalyticsQAnalyticsPivotValueCreativeDateRangeS, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceByObjectiveGetAdAnalyticsQStatisticsPivotsListValueObjectiveTy, reporting_roi_reportingRoiUseCasesB2BTemplatesStandardMetricsPerformanceDashboardOverviewGetAdAnalyticsQAnalyticsDateRangeStartYear202, updatePostCommentary] as const;
