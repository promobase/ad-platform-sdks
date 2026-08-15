// @generated
// fingerprint: sha256:e123210694b40aaabd799d87dd7b26370db5c9df1b9f5bf0db0af8a7f612870c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Identity — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { IdentityCreateParams, IdentityCreateResponse, IdentityDeleteParams, IdentityDeleteResponse, IdentityGetParams, IdentityGetResponse, IdentityInfoParams, IdentityInfoResponse, IdentityVideoGetParams, IdentityVideoGetResponse, IdentityLiveGetParams, IdentityLiveGetResponse, IdentityMusicAuthorizationParams, IdentityMusicAuthorizationResponse, IdentityVideoInfoParams, IdentityVideoInfoResponse } from "../types/identity.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createIdentity(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "GET",
      path,
      query: params,
    });
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    return tiktokRequest<T>({
      accessToken: opts.accessToken,
      baseUrl: opts.baseUrl ?? TT_API_BASE,
      fetch: opts.fetch,
    }, {
      method: "POST",
      path,
      body,
    });
  }

  return {
    /** Create an identity */
    async createIdentity(params: IdentityCreateParams): Promise<IdentityCreateResponse> {
      return post<IdentityCreateResponse>("/open_api/v1.3/identity/create/", params as unknown as Record<string, unknown>);
    },

    /** Delete an identity */
    async deleteIdentity(params: IdentityDeleteParams): Promise<IdentityDeleteResponse> {
      return post<IdentityDeleteResponse>("/open_api/v1.3/identity/delete/", params as unknown as Record<string, unknown>);
    },

    /** Get the identity list */
    async getIdentity(params: IdentityGetParams): Promise<IdentityGetResponse> {
      return get<IdentityGetResponse>("/open_api/v1.3/identity/get/", params as unknown as Record<string, unknown>);
    },

    /** Get info about an identity */
    async identityInfo(params: IdentityInfoParams): Promise<IdentityInfoResponse> {
      return get<IdentityInfoResponse>("/open_api/v1.3/identity/info/", params as unknown as Record<string, unknown>);
    },

    /** Get posts under an identity */
    async getVideo(params: IdentityVideoGetParams): Promise<IdentityVideoGetResponse> {
      return get<IdentityVideoGetResponse>("/open_api/v1.3/identity/video/get/", params as unknown as Record<string, unknown>);
    },

    /** Get live videos under an identity */
    async getLive(params: IdentityLiveGetParams): Promise<IdentityLiveGetResponse> {
      return get<IdentityLiveGetResponse>("/open_api/v1.3/identity/live/get/", params as unknown as Record<string, unknown>);
    },

    /** Get music authorization info of a video */
    async musicAuthorization(params: IdentityMusicAuthorizationParams): Promise<IdentityMusicAuthorizationResponse> {
      return get<IdentityMusicAuthorizationResponse>("/open_api/v1.3/identity/music/authorization/", params as unknown as Record<string, unknown>);
    },

    /** Get info about TikTok posts */
    async videoInfo(params: IdentityVideoInfoParams): Promise<IdentityVideoInfoResponse> {
      return get<IdentityVideoInfoResponse>("/open_api/v1.3/identity/video/info/", params as unknown as Record<string, unknown>);
    },
  };
}
