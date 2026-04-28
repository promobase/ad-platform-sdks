export type LinkedInUrn =
  | `urn:li:person:${string}`
  | `urn:li:organization:${string}`
  | `urn:li:image:${string}`
  | `urn:li:video:${string}`
  | `urn:li:share:${string}`
  | `urn:li:ugcPost:${string}`
  | string;

export type LinkedInVisibility = "PUBLIC" | "CONNECTIONS";

export type LinkedInCallToActionLabel =
  | "APPLY"
  | "DOWNLOAD"
  | "LEARN_MORE"
  | "SIGN_UP"
  | "SUBSCRIBE"
  | "REGISTER"
  | "JOIN"
  | "ATTEND"
  | "REQUEST_DEMO"
  | "SEE_MORE"
  | "BUY_NOW"
  | "SHOP_NOW"
  | "VIEW_QUOTE";

export interface LinkedInCallToAction {
  label: LinkedInCallToActionLabel;
  url: string;
}

export interface LinkedInPostOptions {
  visibility?: LinkedInVisibility;
  isReshareDisabledByAuthor?: boolean;
  callToAction?: LinkedInCallToAction;
  altText?: string;
}

export interface LinkedInDistribution {
  feedDistribution: "MAIN_FEED" | "NONE";
  targetEntities?: unknown[];
  thirdPartyDistributionChannels?: string[];
}

export interface LinkedInPostResult {
  postUrn: string;
  body: unknown;
}

export interface LinkedInPost {
  id: string;
  author: string;
  commentary?: string;
  visibility?: LinkedInVisibility;
  distribution?: LinkedInDistribution;
  lifecycleState?: "DRAFT" | "PUBLISHED" | "PUBLISH_REQUESTED" | "PUBLISH_FAILED" | string;
  publishedAt?: number;
  createdAt?: number;
  lastModifiedAt?: number;
  content?: Record<string, unknown>;
  isReshareDisabledByAuthor?: boolean;
}

export interface LinkedInTextPostParams {
  authorUrn: LinkedInUrn;
  commentary: string;
  options?: LinkedInPostOptions;
}

export interface LinkedInImagePostParams extends LinkedInTextPostParams {
  imageUrn: LinkedInUrn;
}

export interface LinkedInMultiImagePostParams extends LinkedInTextPostParams {
  images: Array<{ urn: LinkedInUrn; altText?: string }>;
}

export interface LinkedInVideoPostParams extends LinkedInTextPostParams {
  videoUrn: LinkedInUrn;
  title?: string;
}

export interface LinkedInImageUploadSession {
  uploadUrl: string;
  imageUrn: LinkedInUrn;
  uploadUrlExpiresAt?: number;
}

export interface LinkedInVideoUploadInstruction {
  uploadUrl: string;
  firstByte: number;
  lastByte: number;
}

export interface LinkedInVideoUploadSession {
  videoUrn: LinkedInUrn;
  uploadInstructions: LinkedInVideoUploadInstruction[];
  uploadToken?: string;
  uploadUrlsExpireAt?: number;
}

export interface LinkedInUserInfo {
  sub: string;
  name: string;
  given_name?: string;
  family_name?: string;
  picture?: string;
  email?: string;
  email_verified?: boolean;
  locale?: {
    country: string;
    language: string;
  };
}

export interface LinkedInTokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token?: string;
  refresh_token_expires_in?: number;
  scope?: string;
  token_type: string;
}

export interface LinkedInOAuthConfig {
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  fetch?: typeof fetch;
}
