// @generated
// fingerprint: sha256:edcd2c9a33c93a087f845539f907b873edefc0c1c16b39be0a2265230555f634
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Video Templates — do not edit
import type { CatalogVideoPackageGetParams, CatalogVideoPackageGetResponse, CatalogVideoPackageCreateParams, CatalogVideoPackageCreateResponse, CatalogVideoPackageUpdateParams, CatalogVideoPackageUpdateResponse, CatalogVideoPackageDeleteParams, CatalogVideoPackageDeleteResponse, CatalogTemplateUploadParams, CatalogTemplateUploadResponse, CatalogTemplatePreviewCreateParams, CatalogTemplatePreviewCreateResponse } from "../types/catalog-video-templates.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogVideoTemplates(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {
  const apiBase = (opts.baseUrl ?? TT_API_BASE).replace(/\/$/, "");
  const fetchImpl = opts.fetch ?? fetch;

  async function get<T>(path: string, params: Record<string, unknown>): Promise<T> {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined && value !== null) {
        searchParams.set(key, typeof value === "object" ? JSON.stringify(value) : String(value));
      }
    }
    const response = await fetchImpl(`${apiBase}${path}?${searchParams.toString()}`, {
      headers: { "Access-Token": opts.accessToken },
    });
    const body = (await response.json()) as TikTokResponse<T>;
    if (!response.ok || body.code !== 0) {
      throw new Error(`TikTok API error: ${body.message} (code ${body.code}, request_id ${body.request_id})`);
    }
    return body.data;
  }

  async function post<T>(path: string, body: Record<string, unknown>): Promise<T> {
    const response = await fetchImpl(`${apiBase}${path}`, {
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
    /** Get video packages */
    async getVideoPackage(params: CatalogVideoPackageGetParams): Promise<CatalogVideoPackageGetResponse> {
      return get<CatalogVideoPackageGetResponse>("/open_api/v1.3/catalog/video_package/get/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Create a video package */
    async createVideoPackage(params: CatalogVideoPackageCreateParams): Promise<CatalogVideoPackageCreateResponse> {
      return post<CatalogVideoPackageCreateResponse>("/open_api/v1.3/catalog/video_package/create/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Update the name of a video package */
    async updateVideoPackage(params: CatalogVideoPackageUpdateParams): Promise<CatalogVideoPackageUpdateResponse> {
      return post<CatalogVideoPackageUpdateResponse>("/open_api/v1.3/catalog/video_package/update/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Delete a video package */
    async deleteVideoPackage(params: CatalogVideoPackageDeleteParams): Promise<CatalogVideoPackageDeleteResponse> {
      return post<CatalogVideoPackageDeleteResponse>("/open_api/v1.3/catalog/video_package/delete/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Upload a video template */
    async templateUpload(params: CatalogTemplateUploadParams): Promise<CatalogTemplateUploadResponse> {
      return post<CatalogTemplateUploadResponse>("/open_api/v1.3/catalog/template/upload/", params as unknown as Record<string, unknown>);
    },

    /** (Deprecated) Preview video templates */
    async createTemplatePreview(params: CatalogTemplatePreviewCreateParams): Promise<CatalogTemplatePreviewCreateResponse> {
      return post<CatalogTemplatePreviewCreateResponse>("/open_api/v1.3/catalog/template_preview/create/", params as unknown as Record<string, unknown>);
    },
  };
}
