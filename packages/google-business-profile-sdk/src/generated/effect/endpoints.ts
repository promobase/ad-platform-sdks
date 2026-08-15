// @generated
// fingerprint: sha256:dea17043c551515299e590a396b5199c6bbc4f2b4bd5385196fd9d320ddd1e0e
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

export const google_business_profile_businesscalls_locations_businesscallsinsights_list = defineEndpointDescriptor({
  id: "google-business-profile.businesscalls.locations.businesscallsinsights.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinesscalls.googleapis.com/v1/{parent}/businesscallsinsights",
  summary: "List business call insights for a location",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: ["https://www.googleapis.com/auth/business.manage"],
  capabilities: ["business-calls.read"],
  rateLimitBucket: "google-business-profile-business-calls",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    filter: Schema.optional(Schema.String),
  }),
  outputSchema: Schema.Unknown,
});

export const google_business_profile_businessprofileperformance_locations_fetchMultiDailyMetricsTimeSeries = defineEndpointDescriptor({
  id: "google-business-profile.businessprofileperformance.locations.fetchMultiDailyMetricsTimeSeries",
  platform: "google-business-profile",
  method: "GET",
  path: "https://businessprofileperformance.googleapis.com/v1/{+location}:fetchMultiDailyMetricsTimeSeries",
  summary: " Returns the values for each date from a given time range that are associated with the specific daily metrics. Note: Only daily data is available. Hourly metrics are not supported. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:fetchMultiDailyMetricsTimeSeries?dailyMetrics=WEBSITE_CLICKS&dailyMetrics=CALL_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["performance.read"],
  rateLimitBucket: "google-business-profile-performance",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"dailyMetrics","wireName":"dailyMetrics","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.day","wireName":"dailyRange.endDate.day","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.month","wireName":"dailyRange.endDate.month","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.year","wireName":"dailyRange.endDate.year","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.day","wireName":"dailyRange.startDate.day","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.month","wireName":"dailyRange.startDate.month","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.year","wireName":"dailyRange.startDate.year","location":"query","required":false,"nullable":false},
    {"name":"location","wireName":"location","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dailyMetrics: Schema.optional(Schema.Union(Schema.Literal("DAILY_METRIC_UNKNOWN"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), Schema.Literal("BUSINESS_CONVERSATIONS"), Schema.Literal("BUSINESS_DIRECTION_REQUESTS"), Schema.Literal("CALL_CLICKS"), Schema.Literal("WEBSITE_CLICKS"), Schema.Literal("BUSINESS_BOOKINGS"), Schema.Literal("BUSINESS_FOOD_ORDERS"), Schema.Literal("BUSINESS_FOOD_MENU_CLICKS"))),
    "dailyRange.endDate.day": Schema.optional(Schema.Int),
    "dailyRange.endDate.month": Schema.optional(Schema.Int),
    "dailyRange.endDate.year": Schema.optional(Schema.Int),
    "dailyRange.startDate.day": Schema.optional(Schema.Int),
    "dailyRange.startDate.month": Schema.optional(Schema.Int),
    "dailyRange.startDate.year": Schema.optional(Schema.Int),
    location: Schema.String,
  }),
  outputSchema: Models.PerformanceFetchMultiDailyMetricsTimeSeriesResponse,
});

export const google_business_profile_businessprofileperformance_locations_getDailyMetricsTimeSeries = defineEndpointDescriptor({
  id: "google-business-profile.businessprofileperformance.locations.getDailyMetricsTimeSeries",
  platform: "google-business-profile",
  method: "GET",
  path: "https://businessprofileperformance.googleapis.com/v1/{+name}:getDailyMetricsTimeSeries",
  summary: " Returns the values for each date from a given time range that are associated with the specific daily metric. Note: Only daily data is available. Hourly metrics are not supported. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345:getDailyMetricsTimeSeries?dailyMetric=WEBSITE_CLICKS&daily_range.start_date.year=2022&daily_range.start_date.month=1&daily_range.start_date.day=1&daily_range.end_date.year=2022&daily_range.end_date.month=3&daily_range.end_date.day=31`",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["performance.read"],
  rateLimitBucket: "google-business-profile-performance",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"dailyMetric","wireName":"dailyMetric","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.day","wireName":"dailyRange.endDate.day","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.month","wireName":"dailyRange.endDate.month","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.endDate.year","wireName":"dailyRange.endDate.year","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.day","wireName":"dailyRange.startDate.day","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.month","wireName":"dailyRange.startDate.month","location":"query","required":false,"nullable":false},
    {"name":"dailyRange.startDate.year","wireName":"dailyRange.startDate.year","location":"query","required":false,"nullable":false},
    {"name":"dailySubEntityType.dayOfWeek","wireName":"dailySubEntityType.dayOfWeek","location":"query","required":false,"nullable":false},
    {"name":"dailySubEntityType.timeOfDay.hours","wireName":"dailySubEntityType.timeOfDay.hours","location":"query","required":false,"nullable":false},
    {"name":"dailySubEntityType.timeOfDay.minutes","wireName":"dailySubEntityType.timeOfDay.minutes","location":"query","required":false,"nullable":false},
    {"name":"dailySubEntityType.timeOfDay.nanos","wireName":"dailySubEntityType.timeOfDay.nanos","location":"query","required":false,"nullable":false},
    {"name":"dailySubEntityType.timeOfDay.seconds","wireName":"dailySubEntityType.timeOfDay.seconds","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    dailyMetric: Schema.optional(Schema.Union(Schema.Literal("DAILY_METRIC_UNKNOWN"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_DESKTOP_SEARCH"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_MAPS"), Schema.Literal("BUSINESS_IMPRESSIONS_MOBILE_SEARCH"), Schema.Literal("BUSINESS_CONVERSATIONS"), Schema.Literal("BUSINESS_DIRECTION_REQUESTS"), Schema.Literal("CALL_CLICKS"), Schema.Literal("WEBSITE_CLICKS"), Schema.Literal("BUSINESS_BOOKINGS"), Schema.Literal("BUSINESS_FOOD_ORDERS"), Schema.Literal("BUSINESS_FOOD_MENU_CLICKS"))),
    "dailyRange.endDate.day": Schema.optional(Schema.Int),
    "dailyRange.endDate.month": Schema.optional(Schema.Int),
    "dailyRange.endDate.year": Schema.optional(Schema.Int),
    "dailyRange.startDate.day": Schema.optional(Schema.Int),
    "dailyRange.startDate.month": Schema.optional(Schema.Int),
    "dailyRange.startDate.year": Schema.optional(Schema.Int),
    "dailySubEntityType.dayOfWeek": Schema.optional(Schema.Union(Schema.Literal("DAY_OF_WEEK_UNSPECIFIED"), Schema.Literal("MONDAY"), Schema.Literal("TUESDAY"), Schema.Literal("WEDNESDAY"), Schema.Literal("THURSDAY"), Schema.Literal("FRIDAY"), Schema.Literal("SATURDAY"), Schema.Literal("SUNDAY"))),
    "dailySubEntityType.timeOfDay.hours": Schema.optional(Schema.Int),
    "dailySubEntityType.timeOfDay.minutes": Schema.optional(Schema.Int),
    "dailySubEntityType.timeOfDay.nanos": Schema.optional(Schema.Int),
    "dailySubEntityType.timeOfDay.seconds": Schema.optional(Schema.Int),
    name: Schema.String,
  }),
  outputSchema: Models.PerformanceGetDailyMetricsTimeSeriesResponse,
});

export const google_business_profile_businessprofileperformance_locations_searchkeywords_impressions_monthly_list = defineEndpointDescriptor({
  id: "google-business-profile.businessprofileperformance.locations.searchkeywords.impressions.monthly.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://businessprofileperformance.googleapis.com/v1/{+parent}/searchkeywords/impressions/monthly",
  summary: "Returns the search keywords used to find a business in search or maps. Each search keyword is accompanied by impressions which are aggregated on a monthly basis. Example request: `GET https://businessprofileperformance.googleapis.com/v1/locations/12345/searchkeywords/impressions/monthly?monthly_range.start_month.year=2022&monthly_range.start_month.month=1&monthly_range.end_month.year=2022&monthly_range.end_month.month=3`",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["performance.read"],
  rateLimitBucket: "google-business-profile-performance",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"monthlyRange.endMonth.day","wireName":"monthlyRange.endMonth.day","location":"query","required":false,"nullable":false},
    {"name":"monthlyRange.endMonth.month","wireName":"monthlyRange.endMonth.month","location":"query","required":false,"nullable":false},
    {"name":"monthlyRange.endMonth.year","wireName":"monthlyRange.endMonth.year","location":"query","required":false,"nullable":false},
    {"name":"monthlyRange.startMonth.day","wireName":"monthlyRange.startMonth.day","location":"query","required":false,"nullable":false},
    {"name":"monthlyRange.startMonth.month","wireName":"monthlyRange.startMonth.month","location":"query","required":false,"nullable":false},
    {"name":"monthlyRange.startMonth.year","wireName":"monthlyRange.startMonth.year","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    "monthlyRange.endMonth.day": Schema.optional(Schema.Int),
    "monthlyRange.endMonth.month": Schema.optional(Schema.Int),
    "monthlyRange.endMonth.year": Schema.optional(Schema.Int),
    "monthlyRange.startMonth.day": Schema.optional(Schema.Int),
    "monthlyRange.startMonth.month": Schema.optional(Schema.Int),
    "monthlyRange.startMonth.year": Schema.optional(Schema.Int),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.PerformanceListSearchKeywordImpressionsMonthlyResponse,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_admins_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.admins.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+parent}/admins",
  summary: "Invites the specified user to become an administrator for the specified account. The invitee must accept the invitation in order to be granted access to the account. See AcceptInvitation to programmatically accept an invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.AccountManagementAdmin,
  }),
  outputSchema: Models.AccountManagementAdmin,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_admins_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.admins.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Removes the specified admin from the specified account.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.AccountManagementEmpty,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_admins_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.admins.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+parent}/admins",
  summary: "Lists the admins for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-management.read"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
  }),
  outputSchema: Models.AccountManagementListAccountAdminsResponse,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_admins_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.admins.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Updates the Admin for the specified Account Admin.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.AccountManagementAdmin,
  }),
  outputSchema: Models.AccountManagementAdmin,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
  summary: "Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.AccountManagementAccount,
  }),
  outputSchema: Models.AccountManagementAccount,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-management.read"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.AccountManagementAccount,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_invitations_accept = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.invitations.accept",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}:accept",
  summary: "Accepts the specified invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.AccountManagementAcceptInvitationRequest,
  }),
  outputSchema: Models.AccountManagementEmpty,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_invitations_decline = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.invitations.decline",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}:decline",
  summary: "Declines the specified invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.AccountManagementDeclineInvitationRequest,
  }),
  outputSchema: Models.AccountManagementEmpty,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_invitations_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.invitations.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+parent}/invitations",
  summary: "Lists pending invitations for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-management.read"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.AccountManagementListInvitationsResponse,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/accounts",
  summary: "Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-management.read"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parentAccount","wireName":"parentAccount","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parentAccount: Schema.optional(Schema.String),
  }),
  outputSchema: Models.AccountManagementListAccountsResponse,
});

export const google_business_profile_mybusinessaccountmanagement_accounts_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.accounts.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Updates the specified business account. Personal accounts cannot be updated using this method.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.AccountManagementAccount,
  }),
  outputSchema: Models.AccountManagementAccount,
});

export const google_business_profile_mybusinessaccountmanagement_locations_admins_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.locations.admins.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+parent}/admins",
  summary: "Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.AccountManagementAdmin,
  }),
  outputSchema: Models.AccountManagementAdmin,
});

export const google_business_profile_mybusinessaccountmanagement_locations_admins_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.locations.admins.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Removes the specified admin as a manager of the specified location.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.AccountManagementEmpty,
});

export const google_business_profile_mybusinessaccountmanagement_locations_admins_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.locations.admins.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+parent}/admins",
  summary: "Lists all of the admins for the specified location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["account-management.read"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
  }),
  outputSchema: Models.AccountManagementListLocationAdminsResponse,
});

export const google_business_profile_mybusinessaccountmanagement_locations_admins_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.locations.admins.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}",
  summary: "Updates the Admin for the specified location. Only the AdminRole of the Admin can be updated.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.AccountManagementAdmin,
  }),
  outputSchema: Models.AccountManagementAdmin,
});

export const google_business_profile_mybusinessaccountmanagement_locations_transfer = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessaccountmanagement.locations.transfer",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessaccountmanagement.googleapis.com/v1/{+name}:transfer",
  summary: "Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["account-management.manage"],
  rateLimitBucket: "google-business-profile-account-management",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.AccountManagementTransferLocationRequest,
  }),
  outputSchema: Models.AccountManagementEmpty,
});

export const google_business_profile_mybusiness_accounts_admins_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.admins.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/admins",
  summary: "Invites the specified user to become an administrator for the specified account. The invitee must accept the invitation in order to be granted access to the account. See AcceptInvitation to programmatically accept an invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4Admin,
  }),
  outputSchema: Models.LegacyV4Admin,
});

export const google_business_profile_mybusiness_accounts_admins_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.admins.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Removes the specified admin from the specified account.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_admins_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.admins.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/admins",
  summary: "Lists the admins for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListAccountAdminsResponse,
});

export const google_business_profile_mybusiness_accounts_admins_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.admins.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the Admin for the specified Account Admin. Only the AdminRole of the Admin can be updated.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4Admin,
  }),
  outputSchema: Models.LegacyV4Admin,
});

export const google_business_profile_mybusiness_accounts_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/accounts",
  summary: "Creates an account with the specified name and type under the given parent. - Personal accounts and Organizations cannot be created. - User Groups cannot be created with a Personal account as primary owner. - Location Groups cannot be created with a primary owner of a Personal account if the Personal account is in an Organization. - Location Groups cannot own Location Groups. ",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"primaryOwner","wireName":"primaryOwner","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    primaryOwner: Schema.optional(Schema.String),
    body: Models.LegacyV4Account,
  }),
  outputSchema: Models.LegacyV4Account,
});

export const google_business_profile_mybusiness_accounts_deleteNotifications = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.deleteNotifications",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Clears the pubsub notification settings for the account.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_generateAccountNumber = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.generateAccountNumber",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:generateAccountNumber",
  summary: "Generates an account number for this account. The account number is not provisioned when an account is created. Use this request to create an account number when it is required.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4GenerateAccountNumberRequest,
  }),
  outputSchema: Models.LegacyV4Account,
});

export const google_business_profile_mybusiness_accounts_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Gets the specified account. Returns `NOT_FOUND` if the account does not exist or if the caller does not have access rights to it.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Account,
});

export const google_business_profile_mybusiness_accounts_getNotifications = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.getNotifications",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns the pubsub notification settings for the account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Notifications,
});

export const google_business_profile_mybusiness_accounts_invitations_accept = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.invitations.accept",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:accept",
  summary: "Accepts the specified invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4AcceptInvitationRequest,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_invitations_decline = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.invitations.decline",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:decline",
  summary: "Declines the specified invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4DeclineInvitationRequest,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_invitations_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.invitations.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/invitations",
  summary: "Lists pending invitations for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"targetType","wireName":"targetType","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    targetType: Schema.optional(Schema.Union(Schema.Literal("ALL"), Schema.Literal("ACCOUNTS_ONLY"), Schema.Literal("LOCATIONS_ONLY"))),
  }),
  outputSchema: Models.LegacyV4ListInvitationsResponse,
});

export const google_business_profile_mybusiness_accounts_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/accounts",
  summary: "Lists all of the accounts for the authenticated user. This includes all accounts that the user owns, as well as any accounts for which the user has management rights.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4ListAccountsResponse,
});

export const google_business_profile_mybusiness_accounts_listRecommendGoogleLocations = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.listRecommendGoogleLocations",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}:recommendGoogleLocations",
  summary: "List all the GoogleLocations that have been recommended to the specified Business Profile account. Recommendations are provided for personal accounts and location groups only, requests for all other account types will result in an error. The recommendations for location groups are based on the locations in that group. The recommendations for personal accounts are based on all of the locations that the user has access to on Business Profile (which includes locations they can access through location groups), and is a superset of all recommendations generated for the user.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4ListRecommendedGoogleLocationsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_admins_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.admins.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/admins",
  summary: "Invites the specified user to become an administrator for the specified location. The invitee must accept the invitation in order to be granted access to the location. See AcceptInvitation to programmatically accept an invitation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4Admin,
  }),
  outputSchema: Models.LegacyV4Admin,
});

export const google_business_profile_mybusiness_accounts_locations_admins_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.admins.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Removes the specified admin as a manager of the specified location.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_admins_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.admins.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/admins",
  summary: "Lists all of the admins for the specified location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListLocationAdminsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_admins_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.admins.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the Admin for the specified Location Admin. Only the AdminRole of the Admin can be updated.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4Admin,
  }),
  outputSchema: Models.LegacyV4Admin,
});

export const google_business_profile_mybusiness_accounts_locations_associate = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.associate",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:associate",
  summary: "Associates a location to a place ID. Any previous association is overwritten. This operation is only valid if the location is unverified. The association must be valid, that is, it appears in the list of `FindMatchingLocations`.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4AssociateLocationRequest,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_batchGet = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.batchGet",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}/locations:batchGet",
  summary: "Gets all of the specified locations in the given account.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4BatchGetLocationsRequest,
  }),
  outputSchema: Models.LegacyV4BatchGetLocationsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_batchGetReviews = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.batchGetReviews",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}/locations:batchGetReviews",
  summary: "Returns the paginated list of reviews for all specified locations. This operation is only valid if the specified locations are verified. *Note:* Reviews are limited to a batch size of 200 `location_names` per call.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4BatchGetReviewsRequest,
  }),
  outputSchema: Models.LegacyV4BatchGetReviewsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_clearAssociation = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.clearAssociation",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:clearAssociation",
  summary: "Clears an association between a location and its place ID. This operation is only valid if the location is unverified.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4ClearLocationAssociationRequest,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/locations",
  summary: "Creates a new location owned by the specified account, and returns it.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"requestId","wireName":"requestId","location":"query","required":false,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    requestId: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.LegacyV4Location,
  }),
  outputSchema: Models.LegacyV4Location,
});

export const google_business_profile_mybusiness_accounts_locations_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Deletes a location. *Note:* If this location cannot be deleted using the API as marked in the LocationState, use the [Business Profile](https://business.google.com/manage/) website. Returns `NOT_FOUND` if the location does not exist.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_fetchVerificationOptions = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.fetchVerificationOptions",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:fetchVerificationOptions",
  summary: "Reports all eligible verification options for a location in a specific language.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4FetchVerificationOptionsRequest,
  }),
  outputSchema: Models.LegacyV4FetchVerificationOptionsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_findMatches = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.findMatches",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:findMatches",
  summary: "Finds all of the possible locations that are a match to the specified location. This operation is only valid if the location is unverified.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4FindMatchingLocationsRequest,
  }),
  outputSchema: Models.LegacyV4FindMatchingLocationsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_followers_getMetadata = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.followers.getMetadata",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Get the followers settings for a location. NOT_FOUND is returned if either the account or the location doesn't exist. PRECONDITION_FAILED is returned if the location is not verified nor connected to Maps.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4FollowersMetadata,
});

export const google_business_profile_mybusiness_accounts_locations_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Gets the specified location. Returns `NOT_FOUND` if the location does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Location,
});

export const google_business_profile_mybusiness_accounts_locations_getFoodMenus = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.getFoodMenus",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns the food menus of a specific location. Only call this if location.location_state.can_have_food_menu is true.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4FoodMenus,
});

export const google_business_profile_mybusiness_accounts_locations_getGoogleUpdated = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.getGoogleUpdated",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}:googleUpdated",
  summary: "Gets the Google-updated version of the specified location. Returns `NOT_FOUND` if the location does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4GoogleUpdatedLocation,
});

export const google_business_profile_mybusiness_accounts_locations_getHealthProviderAttributes = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.getHealthProviderAttributes",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns the Health provider attributes of a specific location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4HealthProviderAttributes,
});

export const google_business_profile_mybusiness_accounts_locations_getLodging = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.getLodging",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns the Lodging of a specific location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4Lodging,
});

export const google_business_profile_mybusiness_accounts_locations_getServiceList = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.getServiceList",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Get the specified service list of a location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4ServiceList,
});

export const google_business_profile_mybusiness_accounts_locations_insuranceNetworks_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.insuranceNetworks.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/insuranceNetworks",
  summary: "Returns a list of all insurance networks supported by Google.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListInsuranceNetworksResponse,
});

export const google_business_profile_mybusiness_accounts_locations_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/locations",
  summary: "Lists the locations for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListLocationsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/localPosts",
  summary: "Creates a new local post associated with the specified location, and returns it.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4LocalPost,
  }),
  outputSchema: Models.LegacyV4LocalPost,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Deletes a local post. Returns `NOT_FOUND` if the local post does not exist.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Gets the specified local post. Returns `NOT_FOUND` if the local post does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4LocalPost,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/localPosts",
  summary: "Returns a list of local posts associated with a location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListLocalPostsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the specified local post and returns the updated local post.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4LocalPost,
  }),
  outputSchema: Models.LegacyV4LocalPost,
});

export const google_business_profile_mybusiness_accounts_locations_localPosts_reportInsights = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.localPosts.reportInsights",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}/localPosts:reportInsights",
  summary: "Returns insights for a set of local posts associated with a single listing. Which metrics and how they are reported are options specified in the request proto. *Note:* Insight reports are limited to 100 `local_post_names` per call.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4ReportLocalPostInsightsRequest,
  }),
  outputSchema: Models.LegacyV4ReportLocalPostInsightsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_lodging_getGoogleUpdated = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.lodging.getGoogleUpdated",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}:getGoogleUpdated",
  summary: "Returns the Google updated Lodging of a specific location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4GetGoogleUpdatedLodgingResponse,
});

export const google_business_profile_mybusiness_accounts_locations_media_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/media",
  summary: "Creates a new media item for the location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4MediaItem,
  }),
  outputSchema: Models.LegacyV4MediaItem,
});

export const google_business_profile_mybusiness_accounts_locations_media_customers_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.customers.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns metadata for the requested customer media item.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4MediaItem,
});

export const google_business_profile_mybusiness_accounts_locations_media_customers_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.customers.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/media/customers",
  summary: "Returns a list of media items associated with a location that have been contributed by customers.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListCustomerMediaItemsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_media_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Deletes the specified media item.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_media_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns metadata for the requested media item.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4MediaItem,
});

export const google_business_profile_mybusiness_accounts_locations_media_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/media",
  summary: "Returns a list of media items associated with a location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListMediaItemsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_media_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates metadata of the specified media item. This can only be used to update the Category of a media item, with the exception that the new category cannot be COVER or PROFILE.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4MediaItem,
  }),
  outputSchema: Models.LegacyV4MediaItem,
});

export const google_business_profile_mybusiness_accounts_locations_media_startUpload = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.media.startUpload",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/media:startUpload",
  summary: "Generates a `MediaItemDataRef` for media item uploading.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4StartUploadMediaItemDataRequest,
  }),
  outputSchema: Models.LegacyV4MediaItemDataRef,
});

export const google_business_profile_mybusiness_accounts_locations_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the specified location. Photos are only allowed on a location that has a Google+ page. Returns `NOT_FOUND` if the location does not exist.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"attributeMask","wireName":"attributeMask","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    attributeMask: Schema.optional(Schema.String),
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.LegacyV4Location,
  }),
  outputSchema: Models.LegacyV4Location,
});

export const google_business_profile_mybusiness_accounts_locations_questions_answers_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.answers.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/answers:delete",
  summary: "Deletes the answer written by the current user to a question.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_questions_answers_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.answers.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/answers",
  summary: "Returns the paginated list of answers for a specified question.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListAnswersResponse,
});

export const google_business_profile_mybusiness_accounts_locations_questions_answers_upsert = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.answers.upsert",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/answers:upsert",
  summary: "Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4UpsertAnswerRequest,
  }),
  outputSchema: Models.LegacyV4Answer,
});

export const google_business_profile_mybusiness_accounts_locations_questions_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/questions",
  summary: "Adds a question for the specified location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.LegacyV4Question,
  }),
  outputSchema: Models.LegacyV4Question,
});

export const google_business_profile_mybusiness_accounts_locations_questions_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Deletes a specific question written by the current user.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_questions_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/questions",
  summary: "Returns the paginated list of questions and some of its answers for a specified location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"answersPerQuestion","wireName":"answersPerQuestion","location":"query","required":false,"nullable":false},
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    answersPerQuestion: Schema.optional(Schema.Int),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListQuestionsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_questions_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.questions.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates a specific question written by the current user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4Question,
  }),
  outputSchema: Models.LegacyV4Question,
});

export const google_business_profile_mybusiness_accounts_locations_reportInsights = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.reportInsights",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}/locations:reportInsights",
  summary: "Returns a report containing insights on one or more metrics by location. *Note:* Insight reports are limited to a batch size of 10 `location_names` per call.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4ReportLocationInsightsRequest,
  }),
  outputSchema: Models.LegacyV4ReportLocationInsightsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_reviews_deleteReply = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.reviews.deleteReply",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusiness.googleapis.com/v4/{+name}/reply",
  summary: "Deletes the response to the specified review. This operation is only valid if the specified location is verified.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_accounts_locations_reviews_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.reviews.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Returns the specified review. This operation is only valid if the specified location is verified. Returns `NOT_FOUND` if the review does not exist, or has been deleted.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Review,
});

export const google_business_profile_mybusiness_accounts_locations_reviews_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.reviews.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/reviews",
  summary: "Returns the paginated list of reviews for the specified location. This operation is only valid if the specified location is verified.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListReviewsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_reviews_updateReply = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.reviews.updateReply",
  platform: "google-business-profile",
  method: "PUT",
  path: "https://mybusiness.googleapis.com/v4/{+name}/reply",
  summary: "Updates the reply to the specified review. A reply is created if one does not exist. This operation is only valid if the specified location is verified.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4ReviewReply,
  }),
  outputSchema: Models.LegacyV4ReviewReply,
});

export const google_business_profile_mybusiness_accounts_locations_transfer = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.transfer",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:transfer",
  summary: "Moves a location from an account that the user owns to another account that the same user administers. The user must be an owner of the account the location is currently associated with and must also be at least a manager of the destination account. Returns the Location with its new resource name.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4TransferLocationRequest,
  }),
  outputSchema: Models.LegacyV4Location,
});

export const google_business_profile_mybusiness_accounts_locations_updateFoodMenus = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.updateFoodMenus",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the food menus of a specific location. Only call this if location.location_state.can_have_food_menu is true.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4FoodMenus,
  }),
  outputSchema: Models.LegacyV4FoodMenus,
});

export const google_business_profile_mybusiness_accounts_locations_updateHealthProviderAttributes = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.updateHealthProviderAttributes",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the Health provider attributes of a specific location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4HealthProviderAttributes,
  }),
  outputSchema: Models.LegacyV4HealthProviderAttributes,
});

export const google_business_profile_mybusiness_accounts_locations_updateLodging = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.updateLodging",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the Lodging of a specific location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4Lodging,
  }),
  outputSchema: Models.LegacyV4Lodging,
});

export const google_business_profile_mybusiness_accounts_locations_updateServiceList = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.updateServiceList",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the specified service list of a location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LegacyV4ServiceList,
  }),
  outputSchema: Models.LegacyV4ServiceList,
});

export const google_business_profile_mybusiness_accounts_locations_verifications_complete = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.verifications.complete",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:complete",
  summary: "Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4CompleteVerificationRequest,
  }),
  outputSchema: Models.LegacyV4CompleteVerificationResponse,
});

export const google_business_profile_mybusiness_accounts_locations_verifications_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.verifications.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+parent}/verifications",
  summary: "List verifications of a location, ordered by create time.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.LegacyV4ListVerificationsResponse,
});

export const google_business_profile_mybusiness_accounts_locations_verify = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.locations.verify",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:verify",
  summary: "Starts the verification process for a location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4VerifyLocationRequest,
  }),
  outputSchema: Models.LegacyV4VerifyLocationResponse,
});

export const google_business_profile_mybusiness_accounts_update = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.update",
  platform: "google-business-profile",
  method: "PUT",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Updates the specified business account. Personal accounts cannot be updated using this method. *Note:* The only editable field for an account is `account_name`. Any other fields passed in (such as `type` or `role`) are ignored.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.LegacyV4Account,
  }),
  outputSchema: Models.LegacyV4Account,
});

export const google_business_profile_mybusiness_accounts_updateNotifications = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.accounts.updateNotifications",
  platform: "google-business-profile",
  method: "PUT",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Sets the pubsub notification settings for the account informing Business Profile which topic to send pubsub notifications for: - New reviews for locations administered by the account. - Updated reviews for locations administered by the account. - New `GoogleUpdates` for locations administered by the account. An account will only have one notification settings resource, and only one pubsub topic can be set.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4Notifications,
  }),
  outputSchema: Models.LegacyV4Notifications,
});

export const google_business_profile_mybusiness_attributes_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.attributes.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/attributes",
  summary: "Returns the list of available attributes that would be available for a location with the given primary category and country.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"categoryId","wireName":"categoryId","location":"query","required":false,"nullable":false},
    {"name":"country","wireName":"country","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryId: Schema.optional(Schema.String),
    country: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    name: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LegacyV4ListAttributeMetadataResponse,
});

export const google_business_profile_mybusinessbusinessinformation_accounts_locations_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.accounts.locations.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+parent}/locations",
  summary: "Creates a new Location that will be owned by the logged in user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["business-information.manage"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"requestId","wireName":"requestId","location":"query","required":false,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    requestId: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.BusinessInformationLocation,
  }),
  outputSchema: Models.BusinessInformationLocation,
});

export const google_business_profile_mybusinessbusinessinformation_accounts_locations_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.accounts.locations.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+parent}/locations",
  summary: "Lists the locations for the specified account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BusinessInformationListLocationsResponse,
});

export const google_business_profile_mybusinessbusinessinformation_attributes_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.attributes.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/attributes",
  summary: "Returns the list of attributes that would be available for a location with the given primary category and country.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"categoryName","wireName":"categoryName","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"showAll","wireName":"showAll","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryName: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    showAll: Schema.optional(Schema.Boolean),
  }),
  outputSchema: Models.BusinessInformationListAttributeMetadataResponse,
});

export const google_business_profile_mybusinessbusinessinformation_categories_batchGet = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.categories.batchGet",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/categories:batchGet",
  summary: "Returns a list of business categories for the provided language and GConcept ids.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"names","wireName":"names","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"view","wireName":"view","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    names: Schema.optional(Schema.Array(Schema.String)),
    regionCode: Schema.optional(Schema.String),
    view: Schema.optional(Schema.Union(Schema.Literal("CATEGORY_VIEW_UNSPECIFIED"), Schema.Literal("BASIC"), Schema.Literal("FULL"))),
  }),
  outputSchema: Models.BusinessInformationBatchGetCategoriesResponse,
});

export const google_business_profile_mybusinessbusinessinformation_categories_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.categories.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/categories",
  summary: "Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"view","wireName":"view","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    view: Schema.optional(Schema.Union(Schema.Literal("CATEGORY_VIEW_UNSPECIFIED"), Schema.Literal("BASIC"), Schema.Literal("FULL"))),
  }),
  outputSchema: Models.BusinessInformationListCategoriesResponse,
});

export const google_business_profile_mybusinessbusinessinformation_chains_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.chains.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.BusinessInformationChain,
});

export const google_business_profile_mybusinessbusinessinformation_chains_search = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.chains.search",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/chains:search",
  summary: "Searches the chain based on chain name.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"chainName","wireName":"chainName","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    chainName: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
  }),
  outputSchema: Models.BusinessInformationSearchChainsResponse,
});

export const google_business_profile_mybusinessbusinessinformation_googleLocations_search = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.googleLocations.search",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/googleLocations:search",
  summary: "Search all of the possible locations that are a match to the specified request.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["business-information.manage"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.BusinessInformationSearchGoogleLocationsRequest,
  }),
  outputSchema: Models.BusinessInformationSearchGoogleLocationsResponse,
});

export const google_business_profile_mybusinessbusinessinformation_locations_attributes_getGoogleUpdated = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.attributes.getGoogleUpdated",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}:getGoogleUpdated",
  summary: "Retrieves attributes for a location as they appear live on Google Maps and Search. This consumer-facing view may have been updated by Google or user-generated content and may differ from the merchant's version.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.BusinessInformationAttributes,
});

export const google_business_profile_mybusinessbusinessinformation_locations_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["business-information.manage"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.BusinessInformationEmpty,
});

export const google_business_profile_mybusinessbusinessinformation_locations_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Returns the specified location as last set by the merchant. It may not reflect updates from Google or user-generated content that are live on Google Maps.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BusinessInformationLocation,
});

export const google_business_profile_mybusinessbusinessinformation_locations_getAttributes = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.getAttributes",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Retrieves attributes for a location as last set by the merchant. It may not reflect updates from Google or user-generated content that are live on Google Maps.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.BusinessInformationAttributes,
});

export const google_business_profile_mybusinessbusinessinformation_locations_getGoogleUpdated = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.getGoogleUpdated",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}:getGoogleUpdated",
  summary: "Returns the specified location as it appears live on Google Maps and Search. This consumer-facing view may have been updated by Google or user-generated content and may differ from the merchant's version. The returned GoogleUpdatedLocation contains masks that indicate which fields differ from the merchant's information.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["business-information.read"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.BusinessInformationGoogleUpdatedLocation,
});

export const google_business_profile_mybusinessbusinessinformation_locations_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Updates the specified location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["business-information.manage"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"validateOnly","wireName":"validateOnly","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    validateOnly: Schema.optional(Schema.Boolean),
    body: Models.BusinessInformationLocation,
  }),
  outputSchema: Models.BusinessInformationLocation,
});

export const google_business_profile_mybusinessbusinessinformation_locations_updateAttributes = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessbusinessinformation.locations.updateAttributes",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessbusinessinformation.googleapis.com/v1/{+name}",
  summary: "Update attributes for a given location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["business-information.manage"],
  rateLimitBucket: "google-business-profile-business-information",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"attributeMask","wireName":"attributeMask","location":"query","required":false,"nullable":false},
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    attributeMask: Schema.optional(Schema.String),
    name: Schema.String,
    body: Models.BusinessInformationAttributes,
  }),
  outputSchema: Models.BusinessInformationAttributes,
});

export const google_business_profile_mybusiness_categories_batchGet = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.categories.batchGet",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/categories:batchGet",
  summary: "Returns a list of business categories for the provided language and GConcept ids.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"categoryIds","wireName":"categoryIds","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"view","wireName":"view","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    categoryIds: Schema.optional(Schema.Array(Schema.String)),
    languageCode: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    view: Schema.optional(Schema.Union(Schema.Literal("CATEGORY_VIEW_UNSPECIFIED"), Schema.Literal("BASIC"), Schema.Literal("FULL"))),
  }),
  outputSchema: Models.LegacyV4BatchGetBusinessCategoriesResponse,
});

export const google_business_profile_mybusiness_categories_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.categories.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/categories",
  summary: "Returns a list of business categories. Search will match the category name but not the category ID. *Note:* Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"regionCode","wireName":"regionCode","location":"query","required":false,"nullable":false},
    {"name":"searchTerm","wireName":"searchTerm","location":"query","required":false,"nullable":false},
    {"name":"view","wireName":"view","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    languageCode: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    regionCode: Schema.optional(Schema.String),
    searchTerm: Schema.optional(Schema.String),
    view: Schema.optional(Schema.Union(Schema.Literal("CATEGORY_VIEW_UNSPECIFIED"), Schema.Literal("BASIC"), Schema.Literal("FULL"))),
  }),
  outputSchema: Models.LegacyV4ListBusinessCategoriesResponse,
});

export const google_business_profile_mybusiness_chains_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.chains.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/{+name}",
  summary: "Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.LegacyV4Chain,
});

export const google_business_profile_mybusiness_chains_search = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.chains.search",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusiness.googleapis.com/v4/chains:search",
  summary: "Searches the chain based on chain name.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["legacy-v4.read"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"chainDisplayName","wireName":"chainDisplayName","location":"query","required":false,"nullable":false},
    {"name":"resultCount","wireName":"resultCount","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    chainDisplayName: Schema.optional(Schema.String),
    resultCount: Schema.optional(Schema.Int),
  }),
  outputSchema: Models.LegacyV4SearchChainsResponse,
});

export const google_business_profile_mybusiness_googleLocations_report = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.googleLocations.report",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/{+name}:report",
  summary: "Report a GoogleLocation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.LegacyV4ReportGoogleLocationRequest,
  }),
  outputSchema: Models.LegacyV4Empty,
});

export const google_business_profile_mybusiness_googleLocations_search = defineEndpointDescriptor({
  id: "google-business-profile.mybusiness.googleLocations.search",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusiness.googleapis.com/v4/googleLocations:search",
  summary: "Search all of the possible locations that are a match to the specified request.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["legacy-v4.manage"],
  rateLimitBucket: "google-business-profile-legacy-v4",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.LegacyV4SearchGoogleLocationsRequest,
  }),
  outputSchema: Models.LegacyV4SearchGoogleLocationsResponse,
});

export const google_business_profile_mybusinesslodging_locations_getLodging = defineEndpointDescriptor({
  id: "google-business-profile.mybusinesslodging.locations.getLodging",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinesslodging.googleapis.com/v1/{+name}",
  summary: "Returns the Lodging of a specific location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["lodging.read"],
  rateLimitBucket: "google-business-profile-lodging",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LodgingLodging,
});

export const google_business_profile_mybusinesslodging_locations_lodging_getGoogleUpdated = defineEndpointDescriptor({
  id: "google-business-profile.mybusinesslodging.locations.lodging.getGoogleUpdated",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinesslodging.googleapis.com/v1/{+name}:getGoogleUpdated",
  summary: "Returns the Google updated Lodging of a specific location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["lodging.read"],
  rateLimitBucket: "google-business-profile-lodging",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"readMask","wireName":"readMask","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    readMask: Schema.optional(Schema.String),
  }),
  outputSchema: Models.LodgingGetGoogleUpdatedLodgingResponse,
});

export const google_business_profile_mybusinesslodging_locations_updateLodging = defineEndpointDescriptor({
  id: "google-business-profile.mybusinesslodging.locations.updateLodging",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinesslodging.googleapis.com/v1/{+name}",
  summary: "Updates the Lodging of a specific location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["lodging.manage"],
  rateLimitBucket: "google-business-profile-lodging",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.LodgingLodging,
  }),
  outputSchema: Models.LodgingLodging,
});

export const google_business_profile_mybusinessnotifications_accounts_getNotificationSetting = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessnotifications.accounts.getNotificationSetting",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessnotifications.googleapis.com/v1/{+name}",
  summary: "Returns the pubsub notification settings for the account.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["notifications.read"],
  rateLimitBucket: "google-business-profile-notifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.NotificationsNotificationSetting,
});

export const google_business_profile_mybusinessnotifications_accounts_updateNotificationSetting = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessnotifications.accounts.updateNotificationSetting",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessnotifications.googleapis.com/v1/{+name}",
  summary: "Sets the pubsub notification setting for the account informing Google which topic to send pubsub notifications for. Use the notification_types field within notification_setting to manipulate the events an account wants to subscribe to. An account will only have one notification setting resource, and only one pubsub topic can be set. To delete the setting, update with an empty notification_types",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["notifications.manage"],
  rateLimitBucket: "google-business-profile-notifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.NotificationsNotificationSetting,
  }),
  outputSchema: Models.NotificationsNotificationSetting,
});

export const google_business_profile_mybusinessplaceactions_locations_placeActionLinks_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.locations.placeActionLinks.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessplaceactions.googleapis.com/v1/{+parent}/placeActionLinks",
  summary: "Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["place-actions.manage"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.PlaceActionsPlaceActionLink,
  }),
  outputSchema: Models.PlaceActionsPlaceActionLink,
});

export const google_business_profile_mybusinessplaceactions_locations_placeActionLinks_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.locations.placeActionLinks.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessplaceactions.googleapis.com/v1/{+name}",
  summary: "Deletes a place action link from the specified location.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["place-actions.manage"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.PlaceActionsEmpty,
});

export const google_business_profile_mybusinessplaceactions_locations_placeActionLinks_get = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.locations.placeActionLinks.get",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessplaceactions.googleapis.com/v1/{+name}",
  summary: "Gets the specified place action link.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["place-actions.read"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.PlaceActionsPlaceActionLink,
});

export const google_business_profile_mybusinessplaceactions_locations_placeActionLinks_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.locations.placeActionLinks.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessplaceactions.googleapis.com/v1/{+parent}/placeActionLinks",
  summary: "Lists the place action links for the specified location.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["place-actions.read"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.PlaceActionsListPlaceActionLinksResponse,
});

export const google_business_profile_mybusinessplaceactions_locations_placeActionLinks_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.locations.placeActionLinks.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessplaceactions.googleapis.com/v1/{+name}",
  summary: "Updates the specified place action link and returns it.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["place-actions.manage"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.PlaceActionsPlaceActionLink,
  }),
  outputSchema: Models.PlaceActionsPlaceActionLink,
});

export const google_business_profile_mybusinessplaceactions_placeActionTypeMetadata_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessplaceactions.placeActionTypeMetadata.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessplaceactions.googleapis.com/v1/placeActionTypeMetadata",
  summary: "Returns the list of available place action types for a location or country.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["place-actions.read"],
  rateLimitBucket: "google-business-profile-place-actions",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"languageCode","wireName":"languageCode","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    filter: Schema.optional(Schema.String),
    languageCode: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
  }),
  outputSchema: Models.PlaceActionsListPlaceActionTypeMetadataResponse,
});

export const google_business_profile_mybusinessqanda_locations_questions_answers_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.answers.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessqanda.googleapis.com/v1/{+name}/answers:delete",
  summary: "Deletes the answer written by the current user to a question.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["q-and-a.manage"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.QAndAEmpty,
});

export const google_business_profile_mybusinessqanda_locations_questions_answers_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.answers.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessqanda.googleapis.com/v1/{+parent}/answers",
  summary: "Returns the paginated list of answers for a specified question.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["q-and-a.read"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.QAndAListAnswersResponse,
});

export const google_business_profile_mybusinessqanda_locations_questions_answers_upsert = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.answers.upsert",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessqanda.googleapis.com/v1/{+parent}/answers:upsert",
  summary: "Creates an answer or updates the existing answer written by the user for the specified question. A user can only create one answer per question.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["q-and-a.manage"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.QAndAUpsertAnswerRequest,
  }),
  outputSchema: Models.QAndAAnswer,
});

export const google_business_profile_mybusinessqanda_locations_questions_create = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.create",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessqanda.googleapis.com/v1/{+parent}",
  summary: "Adds a question for the specified location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["q-and-a.manage"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    parent: Schema.String,
    body: Models.QAndAQuestion,
  }),
  outputSchema: Models.QAndAQuestion,
});

export const google_business_profile_mybusinessqanda_locations_questions_delete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.delete",
  platform: "google-business-profile",
  method: "DELETE",
  path: "https://mybusinessqanda.googleapis.com/v1/{+name}",
  summary: "Deletes a specific question written by the current user.",
  effect: "delete",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["q-and-a.manage"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.QAndAEmpty,
});

export const google_business_profile_mybusinessqanda_locations_questions_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessqanda.googleapis.com/v1/{+parent}",
  summary: "Returns the paginated list of questions and some of its answers for a specified location. This operation is only valid if the specified location is verified.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["q-and-a.read"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"answersPerQuestion","wireName":"answersPerQuestion","location":"query","required":false,"nullable":false},
    {"name":"filter","wireName":"filter","location":"query","required":false,"nullable":false},
    {"name":"orderBy","wireName":"orderBy","location":"query","required":false,"nullable":false},
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    answersPerQuestion: Schema.optional(Schema.Int),
    filter: Schema.optional(Schema.String),
    orderBy: Schema.optional(Schema.String),
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.QAndAListQuestionsResponse,
});

export const google_business_profile_mybusinessqanda_locations_questions_patch = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessqanda.locations.questions.patch",
  platform: "google-business-profile",
  method: "PATCH",
  path: "https://mybusinessqanda.googleapis.com/v1/{+name}",
  summary: "Updates a specific question written by the current user.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["q-and-a.manage"],
  rateLimitBucket: "google-business-profile-q-and-a",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"updateMask","wireName":"updateMask","location":"query","required":false,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    updateMask: Schema.optional(Schema.String),
    body: Models.QAndAQuestion,
  }),
  outputSchema: Models.QAndAQuestion,
});

export const google_business_profile_mybusinessverifications_locations_fetchVerificationOptions = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.locations.fetchVerificationOptions",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessverifications.googleapis.com/v1/{+location}:fetchVerificationOptions",
  summary: "Reports all eligible verification options for a location in a specific language.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["verifications.manage"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"location","wireName":"location","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    location: Schema.String,
    body: Models.VerificationsFetchVerificationOptionsRequest,
  }),
  outputSchema: Models.VerificationsFetchVerificationOptionsResponse,
});

export const google_business_profile_mybusinessverifications_locations_getVoiceOfMerchantState = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.locations.getVoiceOfMerchantState",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessverifications.googleapis.com/v1/{+name}/VoiceOfMerchantState",
  summary: "Gets the VoiceOfMerchant state.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["verifications.read"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
  }),
  outputSchema: Models.VerificationsVoiceOfMerchantState,
});

export const google_business_profile_mybusinessverifications_locations_verifications_complete = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.locations.verifications.complete",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessverifications.googleapis.com/v1/{+name}:complete",
  summary: "Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["verifications.manage"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.VerificationsCompleteVerificationRequest,
  }),
  outputSchema: Models.VerificationsCompleteVerificationResponse,
});

export const google_business_profile_mybusinessverifications_locations_verifications_list = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.locations.verifications.list",
  platform: "google-business-profile",
  method: "GET",
  path: "https://mybusinessverifications.googleapis.com/v1/{+parent}/verifications",
  summary: "List verifications of a location, ordered by create time.",
  effect: "read",
  execution: "inline",
  idempotency: "safe",
  requiredScopes: [],
  capabilities: ["verifications.read"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"pageSize","wireName":"pageSize","location":"query","required":false,"nullable":false},
    {"name":"pageToken","wireName":"pageToken","location":"query","required":false,"nullable":false},
    {"name":"parent","wireName":"parent","location":"path","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    pageSize: Schema.optional(Schema.Int),
    pageToken: Schema.optional(Schema.String),
    parent: Schema.String,
  }),
  outputSchema: Models.VerificationsListVerificationsResponse,
});

export const google_business_profile_mybusinessverifications_locations_verify = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.locations.verify",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessverifications.googleapis.com/v1/{+name}:verify",
  summary: "Starts the verification process for a location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["verifications.manage"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"name","wireName":"name","location":"path","required":true,"nullable":false},
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    name: Schema.String,
    body: Models.VerificationsVerifyLocationRequest,
  }),
  outputSchema: Models.VerificationsVerifyLocationResponse,
});

export const google_business_profile_mybusinessverifications_verificationTokens_generate = defineEndpointDescriptor({
  id: "google-business-profile.mybusinessverifications.verificationTokens.generate",
  platform: "google-business-profile",
  method: "POST",
  path: "https://mybusinessverifications.googleapis.com/v1/verificationTokens:generate",
  summary: "Generate a token for the provided location data to verify the location.",
  effect: "write",
  execution: "durable",
  idempotency: "unsafe",
  requiredScopes: [],
  capabilities: ["verifications.manage"],
  rateLimitBucket: "google-business-profile-verifications",
  authSchemes: ["OAuth2"],
  protocols: ["json"],
  parameters: [
    {"name":"body","wireName":"body","location":"body","required":true,"nullable":false}
  ],
  inputSchema: Schema.Struct({
    body: Models.VerificationsGenerateInstantVerificationTokenRequest,
  }),
  outputSchema: Models.VerificationsGenerateInstantVerificationTokenResponse,
});

export const endpointDescriptors = [google_business_profile_businesscalls_locations_businesscallsinsights_list, google_business_profile_businessprofileperformance_locations_fetchMultiDailyMetricsTimeSeries, google_business_profile_businessprofileperformance_locations_getDailyMetricsTimeSeries, google_business_profile_businessprofileperformance_locations_searchkeywords_impressions_monthly_list, google_business_profile_mybusinessaccountmanagement_accounts_admins_create, google_business_profile_mybusinessaccountmanagement_accounts_admins_delete, google_business_profile_mybusinessaccountmanagement_accounts_admins_list, google_business_profile_mybusinessaccountmanagement_accounts_admins_patch, google_business_profile_mybusinessaccountmanagement_accounts_create, google_business_profile_mybusinessaccountmanagement_accounts_get, google_business_profile_mybusinessaccountmanagement_accounts_invitations_accept, google_business_profile_mybusinessaccountmanagement_accounts_invitations_decline, google_business_profile_mybusinessaccountmanagement_accounts_invitations_list, google_business_profile_mybusinessaccountmanagement_accounts_list, google_business_profile_mybusinessaccountmanagement_accounts_patch, google_business_profile_mybusinessaccountmanagement_locations_admins_create, google_business_profile_mybusinessaccountmanagement_locations_admins_delete, google_business_profile_mybusinessaccountmanagement_locations_admins_list, google_business_profile_mybusinessaccountmanagement_locations_admins_patch, google_business_profile_mybusinessaccountmanagement_locations_transfer, google_business_profile_mybusiness_accounts_admins_create, google_business_profile_mybusiness_accounts_admins_delete, google_business_profile_mybusiness_accounts_admins_list, google_business_profile_mybusiness_accounts_admins_patch, google_business_profile_mybusiness_accounts_create, google_business_profile_mybusiness_accounts_deleteNotifications, google_business_profile_mybusiness_accounts_generateAccountNumber, google_business_profile_mybusiness_accounts_get, google_business_profile_mybusiness_accounts_getNotifications, google_business_profile_mybusiness_accounts_invitations_accept, google_business_profile_mybusiness_accounts_invitations_decline, google_business_profile_mybusiness_accounts_invitations_list, google_business_profile_mybusiness_accounts_list, google_business_profile_mybusiness_accounts_listRecommendGoogleLocations, google_business_profile_mybusiness_accounts_locations_admins_create, google_business_profile_mybusiness_accounts_locations_admins_delete, google_business_profile_mybusiness_accounts_locations_admins_list, google_business_profile_mybusiness_accounts_locations_admins_patch, google_business_profile_mybusiness_accounts_locations_associate, google_business_profile_mybusiness_accounts_locations_batchGet, google_business_profile_mybusiness_accounts_locations_batchGetReviews, google_business_profile_mybusiness_accounts_locations_clearAssociation, google_business_profile_mybusiness_accounts_locations_create, google_business_profile_mybusiness_accounts_locations_delete, google_business_profile_mybusiness_accounts_locations_fetchVerificationOptions, google_business_profile_mybusiness_accounts_locations_findMatches, google_business_profile_mybusiness_accounts_locations_followers_getMetadata, google_business_profile_mybusiness_accounts_locations_get, google_business_profile_mybusiness_accounts_locations_getFoodMenus, google_business_profile_mybusiness_accounts_locations_getGoogleUpdated, google_business_profile_mybusiness_accounts_locations_getHealthProviderAttributes, google_business_profile_mybusiness_accounts_locations_getLodging, google_business_profile_mybusiness_accounts_locations_getServiceList, google_business_profile_mybusiness_accounts_locations_insuranceNetworks_list, google_business_profile_mybusiness_accounts_locations_list, google_business_profile_mybusiness_accounts_locations_localPosts_create, google_business_profile_mybusiness_accounts_locations_localPosts_delete, google_business_profile_mybusiness_accounts_locations_localPosts_get, google_business_profile_mybusiness_accounts_locations_localPosts_list, google_business_profile_mybusiness_accounts_locations_localPosts_patch, google_business_profile_mybusiness_accounts_locations_localPosts_reportInsights, google_business_profile_mybusiness_accounts_locations_lodging_getGoogleUpdated, google_business_profile_mybusiness_accounts_locations_media_create, google_business_profile_mybusiness_accounts_locations_media_customers_get, google_business_profile_mybusiness_accounts_locations_media_customers_list, google_business_profile_mybusiness_accounts_locations_media_delete, google_business_profile_mybusiness_accounts_locations_media_get, google_business_profile_mybusiness_accounts_locations_media_list, google_business_profile_mybusiness_accounts_locations_media_patch, google_business_profile_mybusiness_accounts_locations_media_startUpload, google_business_profile_mybusiness_accounts_locations_patch, google_business_profile_mybusiness_accounts_locations_questions_answers_delete, google_business_profile_mybusiness_accounts_locations_questions_answers_list, google_business_profile_mybusiness_accounts_locations_questions_answers_upsert, google_business_profile_mybusiness_accounts_locations_questions_create, google_business_profile_mybusiness_accounts_locations_questions_delete, google_business_profile_mybusiness_accounts_locations_questions_list, google_business_profile_mybusiness_accounts_locations_questions_patch, google_business_profile_mybusiness_accounts_locations_reportInsights, google_business_profile_mybusiness_accounts_locations_reviews_deleteReply, google_business_profile_mybusiness_accounts_locations_reviews_get, google_business_profile_mybusiness_accounts_locations_reviews_list, google_business_profile_mybusiness_accounts_locations_reviews_updateReply, google_business_profile_mybusiness_accounts_locations_transfer, google_business_profile_mybusiness_accounts_locations_updateFoodMenus, google_business_profile_mybusiness_accounts_locations_updateHealthProviderAttributes, google_business_profile_mybusiness_accounts_locations_updateLodging, google_business_profile_mybusiness_accounts_locations_updateServiceList, google_business_profile_mybusiness_accounts_locations_verifications_complete, google_business_profile_mybusiness_accounts_locations_verifications_list, google_business_profile_mybusiness_accounts_locations_verify, google_business_profile_mybusiness_accounts_update, google_business_profile_mybusiness_accounts_updateNotifications, google_business_profile_mybusiness_attributes_list, google_business_profile_mybusinessbusinessinformation_accounts_locations_create, google_business_profile_mybusinessbusinessinformation_accounts_locations_list, google_business_profile_mybusinessbusinessinformation_attributes_list, google_business_profile_mybusinessbusinessinformation_categories_batchGet, google_business_profile_mybusinessbusinessinformation_categories_list, google_business_profile_mybusinessbusinessinformation_chains_get, google_business_profile_mybusinessbusinessinformation_chains_search, google_business_profile_mybusinessbusinessinformation_googleLocations_search, google_business_profile_mybusinessbusinessinformation_locations_attributes_getGoogleUpdated, google_business_profile_mybusinessbusinessinformation_locations_delete, google_business_profile_mybusinessbusinessinformation_locations_get, google_business_profile_mybusinessbusinessinformation_locations_getAttributes, google_business_profile_mybusinessbusinessinformation_locations_getGoogleUpdated, google_business_profile_mybusinessbusinessinformation_locations_patch, google_business_profile_mybusinessbusinessinformation_locations_updateAttributes, google_business_profile_mybusiness_categories_batchGet, google_business_profile_mybusiness_categories_list, google_business_profile_mybusiness_chains_get, google_business_profile_mybusiness_chains_search, google_business_profile_mybusiness_googleLocations_report, google_business_profile_mybusiness_googleLocations_search, google_business_profile_mybusinesslodging_locations_getLodging, google_business_profile_mybusinesslodging_locations_lodging_getGoogleUpdated, google_business_profile_mybusinesslodging_locations_updateLodging, google_business_profile_mybusinessnotifications_accounts_getNotificationSetting, google_business_profile_mybusinessnotifications_accounts_updateNotificationSetting, google_business_profile_mybusinessplaceactions_locations_placeActionLinks_create, google_business_profile_mybusinessplaceactions_locations_placeActionLinks_delete, google_business_profile_mybusinessplaceactions_locations_placeActionLinks_get, google_business_profile_mybusinessplaceactions_locations_placeActionLinks_list, google_business_profile_mybusinessplaceactions_locations_placeActionLinks_patch, google_business_profile_mybusinessplaceactions_placeActionTypeMetadata_list, google_business_profile_mybusinessqanda_locations_questions_answers_delete, google_business_profile_mybusinessqanda_locations_questions_answers_list, google_business_profile_mybusinessqanda_locations_questions_answers_upsert, google_business_profile_mybusinessqanda_locations_questions_create, google_business_profile_mybusinessqanda_locations_questions_delete, google_business_profile_mybusinessqanda_locations_questions_list, google_business_profile_mybusinessqanda_locations_questions_patch, google_business_profile_mybusinessverifications_locations_fetchVerificationOptions, google_business_profile_mybusinessverifications_locations_getVoiceOfMerchantState, google_business_profile_mybusinessverifications_locations_verifications_complete, google_business_profile_mybusinessverifications_locations_verifications_list, google_business_profile_mybusinessverifications_locations_verify, google_business_profile_mybusinessverifications_verificationTokens_generate] as const;
