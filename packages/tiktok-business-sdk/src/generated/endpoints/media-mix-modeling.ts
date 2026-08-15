// @generated
// fingerprint: sha256:6f19147bbec91d7241f27347b11a8875377ad6a47d79c6a3faf67535e6df38a4
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Media Mix Modeling — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { MmmApiCreateParams, MmmApiCreateResponse, MmmApiCheckParams, MmmApiCheckResponse, MmmApiDownloadParams, MmmApiDownloadResponse, MmmApiHistoryParams, MmmApiHistoryResponse } from "../types/media-mix-modeling.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMediaMixModeling(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create an MMM data request */
    async createApi(params: MmmApiCreateParams): Promise<MmmApiCreateResponse> {
      return post<MmmApiCreateResponse>("/open_api/v1.3/mmm/api/create/", params as unknown as Record<string, unknown>);
    },

    /** Check the status of an MMM data request */
    async apiCheck(params: MmmApiCheckParams): Promise<MmmApiCheckResponse> {
      return get<MmmApiCheckResponse>("/open_api/v1.3/mmm/api/check/", params as unknown as Record<string, unknown>);
    },

    /** Obtain the download URL for MMM data */
    async apiDownload(params: MmmApiDownloadParams): Promise<MmmApiDownloadResponse> {
      return get<MmmApiDownloadResponse>("/open_api/v1.3/mmm/api/download/", params as unknown as Record<string, unknown>);
    },

    /** Get the MMM data request history */
    async apiHistory(params: MmmApiHistoryParams): Promise<MmmApiHistoryResponse> {
      return get<MmmApiHistoryResponse>("/open_api/v1.3/mmm/api/history/", params as unknown as Record<string, unknown>);
    },
  };
}
