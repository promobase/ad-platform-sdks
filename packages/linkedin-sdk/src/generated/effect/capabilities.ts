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
  }
] as const;
