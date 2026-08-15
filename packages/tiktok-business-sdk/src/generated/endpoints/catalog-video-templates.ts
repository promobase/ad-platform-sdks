// @generated
// fingerprint: sha256:727b2dd59fa1505079ac944225131909cc022affb10b336100489eb3ca190edd
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Catalog Video Templates — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { CatalogVideoPackageGetParams, CatalogVideoPackageGetResponse, CatalogVideoPackageCreateParams, CatalogVideoPackageCreateResponse, CatalogVideoPackageUpdateParams, CatalogVideoPackageUpdateResponse, CatalogVideoPackageDeleteParams, CatalogVideoPackageDeleteResponse, CatalogTemplateUploadParams, CatalogTemplateUploadResponse, CatalogTemplatePreviewCreateParams, CatalogTemplatePreviewCreateResponse } from "../types/catalog-video-templates.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createCatalogVideoTemplates(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
