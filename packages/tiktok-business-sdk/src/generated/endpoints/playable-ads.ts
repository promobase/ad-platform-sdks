// @generated
// fingerprint: sha256:6f876aed1eab36386a382fb19c1f706b5bf45596d40c15ba89c3ba8df6c6031c
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Playable Ads — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { PlayableUploadParams, PlayableUploadResponse, PlayableValidateParams, PlayableValidateResponse, PlayableSaveParams, PlayableSaveResponse, PlayableGetParams, PlayableGetResponse, PlayableDeleteParams, PlayableDeleteResponse } from "../types/playable-ads.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPlayableAds(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Upload a playable asset */
    async playableUpload(params: PlayableUploadParams): Promise<PlayableUploadResponse> {
      return post<PlayableUploadResponse>("/open_api/v1.3/playable/upload/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of a playable asset */
    async playableValidate(params: PlayableValidateParams): Promise<PlayableValidateResponse> {
      return get<PlayableValidateResponse>("/open_api/v1.3/playable/validate/", params as unknown as Record<string, unknown>);
    },

    /** Save a playable asset */
    async playableSave(params: PlayableSaveParams): Promise<PlayableSaveResponse> {
      return post<PlayableSaveResponse>("/open_api/v1.3/playable/save/", params as unknown as Record<string, unknown>);
    },

    /** Get playable assets */
    async getPlayable(params: PlayableGetParams): Promise<PlayableGetResponse> {
      return get<PlayableGetResponse>("/open_api/v1.3/playable/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete a playable asset */
    async deletePlayable(params: PlayableDeleteParams): Promise<PlayableDeleteResponse> {
      return post<PlayableDeleteResponse>("/open_api/v1.3/playable/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
