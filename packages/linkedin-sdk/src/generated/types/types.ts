// @generated
// fingerprint: sha256:79fd03f5e9d5c00d71dbc8b38c4b424cff77b83c2d89e12829423b5b02962d6c
// DO NOT EDIT: generated file; changes will be overwritten.
// This file is generated. Do not edit by hand.

export interface LinkedInCallToAction {
  readonly label: LinkedInCallToActionLabel;
  readonly url: string;
}

export type LinkedInCallToActionLabel = "APPLY" | "DOWNLOAD" | "LEARN_MORE" | "SIGN_UP" | "SUBSCRIBE" | "REGISTER" | "JOIN" | "ATTEND" | "REQUEST_DEMO" | "SEE_MORE" | "BUY_NOW" | "SHOP_NOW" | "VIEW_QUOTE";

export interface LinkedInDistribution {
  readonly feedDistribution: "MAIN_FEED" | "NONE";
  readonly targetEntities?: ReadonlyArray<unknown>;
  readonly thirdPartyDistributionChannels?: ReadonlyArray<string>;
}

export interface LinkedInImageUploadSession {
  readonly uploadUrl: string;
  readonly imageUrn: LinkedInUrn;
  readonly uploadUrlExpiresAt?: number;
}

export type LinkedInLifecycleState = "DRAFT" | "PUBLISHED" | "PUBLISH_REQUESTED" | "PUBLISH_FAILED" | string;

export interface LinkedInPost {
  readonly id: string;
  readonly author: string;
  readonly commentary?: string;
  readonly visibility?: LinkedInVisibility;
  readonly distribution?: LinkedInDistribution;
  readonly lifecycleState?: LinkedInLifecycleState;
  readonly publishedAt?: number;
  readonly createdAt?: number;
  readonly lastModifiedAt?: number;
  readonly content?: Readonly<Record<string, unknown>>;
  readonly isReshareDisabledByAuthor?: boolean;
}

export interface LinkedInPostOptions {
  readonly visibility?: LinkedInVisibility;
  readonly isReshareDisabledByAuthor?: boolean;
  readonly callToAction?: LinkedInCallToAction;
  readonly altText?: string;
}

export interface LinkedInPostResult {
  readonly postUrn: string;
  readonly body: unknown;
}

export interface LinkedInTokenResponse {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token?: string;
  readonly refresh_token_expires_in?: number;
  readonly scope?: string;
  readonly token_type: string;
}

export type LinkedInUrn = string;

export interface LinkedInUserInfo {
  readonly sub: string;
  readonly name: string;
  readonly given_name?: string;
  readonly family_name?: string;
  readonly picture?: string;
  readonly email?: string;
  readonly email_verified?: boolean;
  readonly locale?: Readonly<Record<string, string>>;
}

export interface LinkedInVideoUploadInstruction {
  readonly uploadUrl: string;
  readonly firstByte: number;
  readonly lastByte: number;
}

export interface LinkedInVideoUploadOptions {
  readonly uploadCaptions?: boolean;
  readonly uploadThumbnail?: boolean;
  readonly templateName?: string;
  readonly linkbackContext?: string;
}

export interface LinkedInVideoUploadSession {
  readonly videoUrn: LinkedInUrn;
  readonly uploadInstructions: ReadonlyArray<LinkedInVideoUploadInstruction>;
  readonly uploadToken?: string;
  readonly uploadUrlsExpireAt?: number;
}

export type LinkedInVisibility = "PUBLIC" | "CONNECTIONS";
