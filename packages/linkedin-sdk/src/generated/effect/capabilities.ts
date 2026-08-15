// @generated
// fingerprint: sha256:eab0fcedd88e2ab94522be467e8bae3a684c5b70c0f0f92b435ec8a0102c740a
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export const capabilities = [
  {
    "id": "account.read",
    "summary": "Read organizations available to the authenticated member",
    "requiredScopes": [
      "r_organization_social"
    ]
  },
  {
    "id": "post.read",
    "summary": "Read LinkedIn posts",
    "requiredScopes": [
      "r_organization_social"
    ]
  },
  {
    "id": "post.publish",
    "summary": "Publish and update LinkedIn posts",
    "requiredScopes": [
      "w_member_social",
      "w_organization_social"
    ]
  },
  {
    "id": "post.delete",
    "summary": "Delete LinkedIn posts",
    "requiredScopes": [
      "w_member_social",
      "w_organization_social"
    ]
  },
  {
    "id": "comment.publish",
    "summary": "Publish LinkedIn comments",
    "requiredScopes": [
      "w_member_social",
      "w_organization_social"
    ]
  },
  {
    "id": "media.upload",
    "summary": "Initialize and upload LinkedIn media",
    "requiredScopes": [
      "w_member_social",
      "w_organization_social"
    ]
  },
  {
    "id": "post.metrics.read",
    "summary": "Read post and organization analytics",
    "requiredScopes": [
      "r_member_postAnalytics",
      "r_organization_social"
    ]
  },
  {
    "id": "oauth",
    "summary": "Complete LinkedIn OAuth flows",
    "requiredScopes": [
      "openid",
      "profile"
    ]
  },
  {
    "id": "api.audience.insights",
    "summary": "Call operations documented by LinkedIn's Audience Insights collection",
    "requiredScopes": []
  },
  {
    "id": "api.audiences",
    "summary": "Call operations documented by LinkedIn's Audiences collection",
    "requiredScopes": []
  },
  {
    "id": "api.campaign.management",
    "summary": "Call operations documented by LinkedIn's Campaign Management collection",
    "requiredScopes": []
  },
  {
    "id": "api.community.management",
    "summary": "Call operations documented by LinkedIn's Community Management collection",
    "requiredScopes": []
  },
  {
    "id": "api.company.intelligence.api",
    "summary": "Call operations documented by LinkedIn's Company Intelligence API collection",
    "requiredScopes": []
  },
  {
    "id": "api.content.apis",
    "summary": "Call operations documented by LinkedIn's Content APIs collection",
    "requiredScopes": []
  },
  {
    "id": "api.conversions.api",
    "summary": "Call operations documented by LinkedIn's Conversions API collection",
    "requiredScopes": []
  },
  {
    "id": "api.events.management.api",
    "summary": "Call operations documented by LinkedIn's Events Management API collection",
    "requiredScopes": []
  },
  {
    "id": "api.lead.sync",
    "summary": "Call operations documented by LinkedIn's Lead Sync collection",
    "requiredScopes": []
  },
  {
    "id": "api.media.planning",
    "summary": "Call operations documented by LinkedIn's Media Planning collection",
    "requiredScopes": []
  },
  {
    "id": "api.reporting.roi",
    "summary": "Call operations documented by LinkedIn's Reporting & ROI collection",
    "requiredScopes": []
  }
] as const;
