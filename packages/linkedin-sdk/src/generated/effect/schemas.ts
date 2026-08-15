// This file is generated. Do not edit by hand.
import { Schema } from "effect";

export interface LinkedInCallToAction {
  readonly label: LinkedInCallToActionLabel;
  readonly url: string;
}
export interface LinkedInCallToActionEncoded {
  readonly label: LinkedInCallToActionLabelEncoded;
  readonly url: string;
}
export const LinkedInCallToAction: Schema.Schema<LinkedInCallToAction, LinkedInCallToActionEncoded, never> = Schema.Struct({
  label: Schema.suspend(() => LinkedInCallToActionLabel),
  url: Schema.String,
});

export type LinkedInCallToActionLabel = "APPLY" | "DOWNLOAD" | "LEARN_MORE" | "SIGN_UP" | "SUBSCRIBE" | "REGISTER" | "JOIN" | "ATTEND" | "REQUEST_DEMO" | "SEE_MORE" | "BUY_NOW" | "SHOP_NOW" | "VIEW_QUOTE";
export type LinkedInCallToActionLabelEncoded = "APPLY" | "DOWNLOAD" | "LEARN_MORE" | "SIGN_UP" | "SUBSCRIBE" | "REGISTER" | "JOIN" | "ATTEND" | "REQUEST_DEMO" | "SEE_MORE" | "BUY_NOW" | "SHOP_NOW" | "VIEW_QUOTE";
export const LinkedInCallToActionLabel: Schema.Schema<LinkedInCallToActionLabel, LinkedInCallToActionLabelEncoded, never> = Schema.Literal("APPLY", "DOWNLOAD", "LEARN_MORE", "SIGN_UP", "SUBSCRIBE", "REGISTER", "JOIN", "ATTEND", "REQUEST_DEMO", "SEE_MORE", "BUY_NOW", "SHOP_NOW", "VIEW_QUOTE");

export interface LinkedInDistribution {
  readonly feedDistribution: "MAIN_FEED" | "NONE";
  readonly targetEntities?: ReadonlyArray<unknown>;
  readonly thirdPartyDistributionChannels?: ReadonlyArray<string>;
}
export interface LinkedInDistributionEncoded {
  readonly feedDistribution: "MAIN_FEED" | "NONE";
  readonly targetEntities?: ReadonlyArray<unknown>;
  readonly thirdPartyDistributionChannels?: ReadonlyArray<string>;
}
export const LinkedInDistribution: Schema.Schema<LinkedInDistribution, LinkedInDistributionEncoded, never> = Schema.Struct({
  feedDistribution: Schema.Union(Schema.Literal("MAIN_FEED"), Schema.Literal("NONE")),
  targetEntities: Schema.optional(Schema.Array(Schema.Unknown)),
  thirdPartyDistributionChannels: Schema.optional(Schema.Array(Schema.String)),
});

export interface LinkedInImageUploadSession {
  readonly uploadUrl: string;
  readonly imageUrn: LinkedInUrn;
  readonly uploadUrlExpiresAt?: number;
}
export interface LinkedInImageUploadSessionEncoded {
  readonly uploadUrl: string;
  readonly imageUrn: LinkedInUrnEncoded;
  readonly uploadUrlExpiresAt?: number;
}
export const LinkedInImageUploadSession: Schema.Schema<LinkedInImageUploadSession, LinkedInImageUploadSessionEncoded, never> = Schema.Struct({
  uploadUrl: Schema.String,
  imageUrn: Schema.suspend(() => LinkedInUrn),
  uploadUrlExpiresAt: Schema.optional(Schema.Number),
});

export type LinkedInLifecycleState = "DRAFT" | "PUBLISHED" | "PUBLISH_REQUESTED" | "PUBLISH_FAILED" | string;
export type LinkedInLifecycleStateEncoded = "DRAFT" | "PUBLISHED" | "PUBLISH_REQUESTED" | "PUBLISH_FAILED" | string;
export const LinkedInLifecycleState: Schema.Schema<LinkedInLifecycleState, LinkedInLifecycleStateEncoded, never> = Schema.Union(Schema.Literal("DRAFT", "PUBLISHED", "PUBLISH_REQUESTED", "PUBLISH_FAILED"), Schema.String);

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
export interface LinkedInPostEncoded {
  readonly id: string;
  readonly author: string;
  readonly commentary?: string;
  readonly visibility?: LinkedInVisibilityEncoded;
  readonly distribution?: LinkedInDistributionEncoded;
  readonly lifecycleState?: LinkedInLifecycleStateEncoded;
  readonly publishedAt?: number;
  readonly createdAt?: number;
  readonly lastModifiedAt?: number;
  readonly content?: Readonly<Record<string, unknown>>;
  readonly isReshareDisabledByAuthor?: boolean;
}
export const LinkedInPost: Schema.Schema<LinkedInPost, LinkedInPostEncoded, never> = Schema.Struct({
  id: Schema.String,
  author: Schema.String,
  commentary: Schema.optional(Schema.String),
  visibility: Schema.optional(Schema.suspend(() => LinkedInVisibility)),
  distribution: Schema.optional(Schema.suspend(() => LinkedInDistribution)),
  lifecycleState: Schema.optional(Schema.suspend(() => LinkedInLifecycleState)),
  publishedAt: Schema.optional(Schema.Number),
  createdAt: Schema.optional(Schema.Number),
  lastModifiedAt: Schema.optional(Schema.Number),
  content: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.Unknown })),
  isReshareDisabledByAuthor: Schema.optional(Schema.Boolean),
});

export interface LinkedInPostOptions {
  readonly visibility?: LinkedInVisibility;
  readonly isReshareDisabledByAuthor?: boolean;
  readonly callToAction?: LinkedInCallToAction;
  readonly altText?: string;
}
export interface LinkedInPostOptionsEncoded {
  readonly visibility?: LinkedInVisibilityEncoded;
  readonly isReshareDisabledByAuthor?: boolean;
  readonly callToAction?: LinkedInCallToActionEncoded;
  readonly altText?: string;
}
export const LinkedInPostOptions: Schema.Schema<LinkedInPostOptions, LinkedInPostOptionsEncoded, never> = Schema.Struct({
  visibility: Schema.optional(Schema.suspend(() => LinkedInVisibility)),
  isReshareDisabledByAuthor: Schema.optional(Schema.Boolean),
  callToAction: Schema.optional(Schema.suspend(() => LinkedInCallToAction)),
  altText: Schema.optional(Schema.String),
});

export interface LinkedInPostResult {
  readonly postUrn: string;
  readonly body: unknown;
}
export interface LinkedInPostResultEncoded {
  readonly postUrn: string;
  readonly body: unknown;
}
export const LinkedInPostResult: Schema.Schema<LinkedInPostResult, LinkedInPostResultEncoded, never> = Schema.Struct({
  postUrn: Schema.String,
  body: Schema.Unknown,
});

export interface LinkedInTokenResponse {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token?: string;
  readonly refresh_token_expires_in?: number;
  readonly scope?: string;
  readonly token_type: string;
}
export interface LinkedInTokenResponseEncoded {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token?: string;
  readonly refresh_token_expires_in?: number;
  readonly scope?: string;
  readonly token_type: string;
}
export const LinkedInTokenResponse: Schema.Schema<LinkedInTokenResponse, LinkedInTokenResponseEncoded, never> = Schema.Struct({
  access_token: Schema.String,
  expires_in: Schema.Number,
  refresh_token: Schema.optional(Schema.String),
  refresh_token_expires_in: Schema.optional(Schema.Number),
  scope: Schema.optional(Schema.String),
  token_type: Schema.String,
});

export type LinkedInUrn = string;
export type LinkedInUrnEncoded = string;
export const LinkedInUrn: Schema.Schema<LinkedInUrn, LinkedInUrnEncoded, never> = Schema.String;

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
export interface LinkedInUserInfoEncoded {
  readonly sub: string;
  readonly name: string;
  readonly given_name?: string;
  readonly family_name?: string;
  readonly picture?: string;
  readonly email?: string;
  readonly email_verified?: boolean;
  readonly locale?: Readonly<Record<string, string>>;
}
export const LinkedInUserInfo: Schema.Schema<LinkedInUserInfo, LinkedInUserInfoEncoded, never> = Schema.Struct({
  sub: Schema.String,
  name: Schema.String,
  given_name: Schema.optional(Schema.String),
  family_name: Schema.optional(Schema.String),
  picture: Schema.optional(Schema.String),
  email: Schema.optional(Schema.String),
  email_verified: Schema.optional(Schema.Boolean),
  locale: Schema.optional(Schema.Record({ key: Schema.String, value: Schema.String })),
});

export interface LinkedInVideoUploadInstruction {
  readonly uploadUrl: string;
  readonly firstByte: number;
  readonly lastByte: number;
}
export interface LinkedInVideoUploadInstructionEncoded {
  readonly uploadUrl: string;
  readonly firstByte: number;
  readonly lastByte: number;
}
export const LinkedInVideoUploadInstruction: Schema.Schema<LinkedInVideoUploadInstruction, LinkedInVideoUploadInstructionEncoded, never> = Schema.Struct({
  uploadUrl: Schema.String,
  firstByte: Schema.Number,
  lastByte: Schema.Number,
});

export interface LinkedInVideoUploadOptions {
  readonly uploadCaptions?: boolean;
  readonly uploadThumbnail?: boolean;
  readonly templateName?: string;
  readonly linkbackContext?: string;
}
export interface LinkedInVideoUploadOptionsEncoded {
  readonly uploadCaptions?: boolean;
  readonly uploadThumbnail?: boolean;
  readonly templateName?: string;
  readonly linkbackContext?: string;
}
export const LinkedInVideoUploadOptions: Schema.Schema<LinkedInVideoUploadOptions, LinkedInVideoUploadOptionsEncoded, never> = Schema.Struct({
  uploadCaptions: Schema.optional(Schema.Boolean),
  uploadThumbnail: Schema.optional(Schema.Boolean),
  templateName: Schema.optional(Schema.String),
  linkbackContext: Schema.optional(Schema.String),
});

export interface LinkedInVideoUploadSession {
  readonly videoUrn: LinkedInUrn;
  readonly uploadInstructions: ReadonlyArray<LinkedInVideoUploadInstruction>;
  readonly uploadToken?: string;
  readonly uploadUrlsExpireAt?: number;
}
export interface LinkedInVideoUploadSessionEncoded {
  readonly videoUrn: LinkedInUrnEncoded;
  readonly uploadInstructions: ReadonlyArray<LinkedInVideoUploadInstructionEncoded>;
  readonly uploadToken?: string;
  readonly uploadUrlsExpireAt?: number;
}
export const LinkedInVideoUploadSession: Schema.Schema<LinkedInVideoUploadSession, LinkedInVideoUploadSessionEncoded, never> = Schema.Struct({
  videoUrn: Schema.suspend(() => LinkedInUrn),
  uploadInstructions: Schema.Array(Schema.suspend(() => LinkedInVideoUploadInstruction)),
  uploadToken: Schema.optional(Schema.String),
  uploadUrlsExpireAt: Schema.optional(Schema.Number),
});

export type LinkedInVisibility = "PUBLIC" | "CONNECTIONS";
export type LinkedInVisibilityEncoded = "PUBLIC" | "CONNECTIONS";
export const LinkedInVisibility: Schema.Schema<LinkedInVisibility, LinkedInVisibilityEncoded, never> = Schema.Literal("PUBLIC", "CONNECTIONS");
