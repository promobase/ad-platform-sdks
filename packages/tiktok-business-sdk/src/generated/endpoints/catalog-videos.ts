// Auto-generated client for Catalog Videos — do not edit
import type { CatalogVideoFileParams, CatalogVideoFileResponse, CatalogVideoLogParams, CatalogVideoLogResponse, CatalogVideoGetParams, CatalogVideoGetResponse, CatalogVideoDeleteParams, CatalogVideoDeleteResponse } from "../types/catalog-videos.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogVideos(opts: { accessToken: string; advertiserId: string }) {
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
    /** Upload catalog videos via a file URL */
    async videoFile(params: CatalogVideoFileParams): Promise<CatalogVideoFileResponse> {
      return post<CatalogVideoFileResponse>("/open_api/v1.3/catalog/video/file/", params as unknown as Record<string, unknown>);
    },

    /** Get the catalog video handling log */
    async videoLog(params: CatalogVideoLogParams): Promise<CatalogVideoLogResponse> {
      return get<CatalogVideoLogResponse>("/open_api/v1.3/catalog/video/log/", params as unknown as Record<string, unknown>);
    },

    /** Get the uploaded catalog videos within a catalog */
    async getVideo(params: CatalogVideoGetParams): Promise<CatalogVideoGetResponse> {
      return get<CatalogVideoGetResponse>("/open_api/v1.3/catalog/video/get/", params as unknown as Record<string, unknown>);
    },

    /** Delete uploaded catalog videos */
    async deleteVideo(params: CatalogVideoDeleteParams): Promise<CatalogVideoDeleteResponse> {
      return post<CatalogVideoDeleteResponse>("/open_api/v1.3/catalog/video/delete/", params as unknown as Record<string, unknown>);
    },
  };
}
