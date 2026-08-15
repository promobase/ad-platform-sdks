// This file is generated. Do not edit by hand.
import * as v from "valibot";

export type LinkedInCallToAction = {
  readonly label: LinkedInCallToActionLabel;
  readonly url: string;
};
export const LinkedInCallToActionSchema: v.GenericSchema<unknown, LinkedInCallToAction> = v.looseObject({
  label: v.lazy(() => LinkedInCallToActionLabelSchema),
  url: v.string(),
});

export type LinkedInCallToActionLabel = "APPLY" | "DOWNLOAD" | "LEARN_MORE" | "SIGN_UP" | "SUBSCRIBE" | "REGISTER" | "JOIN" | "ATTEND" | "REQUEST_DEMO" | "SEE_MORE" | "BUY_NOW" | "SHOP_NOW" | "VIEW_QUOTE";
export const LinkedInCallToActionLabelSchema: v.GenericSchema<unknown, LinkedInCallToActionLabel> = v.picklist(["APPLY", "DOWNLOAD", "LEARN_MORE", "SIGN_UP", "SUBSCRIBE", "REGISTER", "JOIN", "ATTEND", "REQUEST_DEMO", "SEE_MORE", "BUY_NOW", "SHOP_NOW", "VIEW_QUOTE"]);

export type LinkedInDistribution = {
  readonly feedDistribution: "MAIN_FEED" | "NONE";
  readonly targetEntities?: ReadonlyArray<unknown>;
  readonly thirdPartyDistributionChannels?: ReadonlyArray<string>;
};
export const LinkedInDistributionSchema: v.GenericSchema<unknown, LinkedInDistribution> = v.looseObject({
  feedDistribution: v.union([v.literal("MAIN_FEED"), v.literal("NONE")]),
  targetEntities: v.optional(v.array(v.unknown())),
  thirdPartyDistributionChannels: v.optional(v.array(v.string())),
});

export type LinkedInImageUploadSession = {
  readonly uploadUrl: string;
  readonly imageUrn: LinkedInUrn;
  readonly uploadUrlExpiresAt?: number;
};
export const LinkedInImageUploadSessionSchema: v.GenericSchema<unknown, LinkedInImageUploadSession> = v.looseObject({
  uploadUrl: v.string(),
  imageUrn: v.lazy(() => LinkedInUrnSchema),
  uploadUrlExpiresAt: v.optional(v.number()),
});

export type LinkedInLifecycleState = "DRAFT" | "PUBLISHED" | "PUBLISH_REQUESTED" | "PUBLISH_FAILED" | string;
export const LinkedInLifecycleStateSchema: v.GenericSchema<unknown, LinkedInLifecycleState> = v.union([v.picklist(["DRAFT", "PUBLISHED", "PUBLISH_REQUESTED", "PUBLISH_FAILED"]), v.string()]);

export type LinkedInPost = {
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
};
export const LinkedInPostSchema: v.GenericSchema<unknown, LinkedInPost> = v.looseObject({
  id: v.string(),
  author: v.string(),
  commentary: v.optional(v.string()),
  visibility: v.optional(v.lazy(() => LinkedInVisibilitySchema)),
  distribution: v.optional(v.lazy(() => LinkedInDistributionSchema)),
  lifecycleState: v.optional(v.lazy(() => LinkedInLifecycleStateSchema)),
  publishedAt: v.optional(v.number()),
  createdAt: v.optional(v.number()),
  lastModifiedAt: v.optional(v.number()),
  content: v.optional(v.record(v.string(), v.unknown())),
  isReshareDisabledByAuthor: v.optional(v.boolean()),
});

export type LinkedInPostOptions = {
  readonly visibility?: LinkedInVisibility;
  readonly isReshareDisabledByAuthor?: boolean;
  readonly callToAction?: LinkedInCallToAction;
  readonly altText?: string;
};
export const LinkedInPostOptionsSchema: v.GenericSchema<unknown, LinkedInPostOptions> = v.looseObject({
  visibility: v.optional(v.lazy(() => LinkedInVisibilitySchema)),
  isReshareDisabledByAuthor: v.optional(v.boolean()),
  callToAction: v.optional(v.lazy(() => LinkedInCallToActionSchema)),
  altText: v.optional(v.string()),
});

export type LinkedInPostResult = {
  readonly postUrn: string;
  readonly body: unknown;
};
export const LinkedInPostResultSchema: v.GenericSchema<unknown, LinkedInPostResult> = v.looseObject({
  postUrn: v.string(),
  body: v.unknown(),
});

export type LinkedInTokenResponse = {
  readonly access_token: string;
  readonly expires_in: number;
  readonly refresh_token?: string;
  readonly refresh_token_expires_in?: number;
  readonly scope?: string;
  readonly token_type: string;
};
export const LinkedInTokenResponseSchema: v.GenericSchema<unknown, LinkedInTokenResponse> = v.looseObject({
  access_token: v.string(),
  expires_in: v.number(),
  refresh_token: v.optional(v.string()),
  refresh_token_expires_in: v.optional(v.number()),
  scope: v.optional(v.string()),
  token_type: v.string(),
});

export type LinkedInUrn = string;
export const LinkedInUrnSchema: v.GenericSchema<unknown, LinkedInUrn> = v.string();

export type LinkedInUserInfo = {
  readonly sub: string;
  readonly name: string;
  readonly given_name?: string;
  readonly family_name?: string;
  readonly picture?: string;
  readonly email?: string;
  readonly email_verified?: boolean;
  readonly locale?: Readonly<Record<string, string>>;
};
export const LinkedInUserInfoSchema: v.GenericSchema<unknown, LinkedInUserInfo> = v.looseObject({
  sub: v.string(),
  name: v.string(),
  given_name: v.optional(v.string()),
  family_name: v.optional(v.string()),
  picture: v.optional(v.string()),
  email: v.optional(v.string()),
  email_verified: v.optional(v.boolean()),
  locale: v.optional(v.record(v.string(), v.string())),
});

export type LinkedInVideoUploadInstruction = {
  readonly uploadUrl: string;
  readonly firstByte: number;
  readonly lastByte: number;
};
export const LinkedInVideoUploadInstructionSchema: v.GenericSchema<unknown, LinkedInVideoUploadInstruction> = v.looseObject({
  uploadUrl: v.string(),
  firstByte: v.number(),
  lastByte: v.number(),
});

export type LinkedInVideoUploadOptions = {
  readonly uploadCaptions?: boolean;
  readonly uploadThumbnail?: boolean;
  readonly templateName?: string;
  readonly linkbackContext?: string;
};
export const LinkedInVideoUploadOptionsSchema: v.GenericSchema<unknown, LinkedInVideoUploadOptions> = v.looseObject({
  uploadCaptions: v.optional(v.boolean()),
  uploadThumbnail: v.optional(v.boolean()),
  templateName: v.optional(v.string()),
  linkbackContext: v.optional(v.string()),
});

export type LinkedInVideoUploadSession = {
  readonly videoUrn: LinkedInUrn;
  readonly uploadInstructions: ReadonlyArray<LinkedInVideoUploadInstruction>;
  readonly uploadToken?: string;
  readonly uploadUrlsExpireAt?: number;
};
export const LinkedInVideoUploadSessionSchema: v.GenericSchema<unknown, LinkedInVideoUploadSession> = v.looseObject({
  videoUrn: v.lazy(() => LinkedInUrnSchema),
  uploadInstructions: v.array(v.lazy(() => LinkedInVideoUploadInstructionSchema)),
  uploadToken: v.optional(v.string()),
  uploadUrlsExpireAt: v.optional(v.number()),
});

export type LinkedInVisibility = "PUBLIC" | "CONNECTIONS";
export const LinkedInVisibilitySchema: v.GenericSchema<unknown, LinkedInVisibility> = v.picklist(["PUBLIC", "CONNECTIONS"]);
