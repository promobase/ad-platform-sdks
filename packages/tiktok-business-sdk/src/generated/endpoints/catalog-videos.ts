// @generated
// fingerprint: sha256:3f7c8aaa5637628c416c8c31f7be7e0ddb8081dfa23d6865a945ea4b6f862edb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Videos — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogVideoFileParams, CatalogVideoFileResponse, CatalogVideoLogParams, CatalogVideoLogResponse, CatalogVideoGetParams, CatalogVideoGetResponse, CatalogVideoDeleteParams, CatalogVideoDeleteResponse } from "../types/catalog-videos.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogVideos(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
