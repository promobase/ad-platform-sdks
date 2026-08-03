// This file is generated. Do not edit by hand.
import { defineEndpointDescriptor } from "@openpromo/sdk-runtime/effect";
import { Schema } from "effect";
import * as Models from "./schemas.ts";

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

export const endpointDescriptors = [batchGetSocialMetadata, createComment, createPost, deletePost, exchangeOAuthCode, finalizeVideoUpload, getMemberPostAnalytics, getOpenIdUserInfo, getOrganization, getOrganizationShareStatistics, getPost, getSocialMetadata, initializeImageUpload, initializeVideoUpload, listOrganizationAcls, listPostsByAuthor, refreshOAuthToken, updatePostCommentary] as const;
