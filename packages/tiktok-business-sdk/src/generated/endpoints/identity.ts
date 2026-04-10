// Auto-generated client for Identity — do not edit
import type { IdentityCreateParams, IdentityCreateResponse, IdentityDeleteParams, IdentityDeleteResponse, IdentityGetParams, IdentityGetResponse, IdentityInfoParams, IdentityInfoResponse, IdentityVideoGetParams, IdentityVideoGetResponse, IdentityLiveGetParams, IdentityLiveGetResponse, IdentityMusicAuthorizationParams, IdentityMusicAuthorizationResponse, IdentityVideoInfoParams, IdentityVideoInfoResponse } from "../types/identity.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createIdentity(opts: { accessToken: string; advertiserId: string }) {
  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetch(`${TT_API_BASE}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetch(`${TT_API_BASE}${path}`, {
      method: "POST",
      headers: { "Access-Token": opts.accessToken, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const responseBody = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || responseBody.code !== 0) {
      throw new Error(`TikTok API error: ${responseBody.message} (code ${responseBody.code}, request_id ${responseBody.request_id})`);
    }
    return responseBody.data;
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
