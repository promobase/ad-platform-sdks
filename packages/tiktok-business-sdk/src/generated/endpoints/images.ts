// @generated
// fingerprint: sha256:5d6cd184b34f7600985f704e216aab214ab97e7a8f87aea9b99b91b2fa10f781
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Images — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { FileImageAdUploadParams, FileImageAdUploadResponse, FileImageAdUpdateParams, FileImageAdUpdateResponse, FileImageAdInfoParams, FileImageAdInfoResponse, FileImageAdSearchParams, FileImageAdSearchResponse } from "../types/images.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createImages(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Upload an image */
    async adUpload(params: FileImageAdUploadParams): Promise<FileImageAdUploadResponse> {
      return post<FileImageAdUploadResponse>("/open_api/v1.3/file/image/ad/upload/", params as unknown as Record<string, unknown>);
    },

    /** Update the name of an image */
    async updateAd(params: FileImageAdUpdateParams): Promise<FileImageAdUpdateResponse> {
      return post<FileImageAdUpdateResponse>("/open_api/v1.3/file/image/ad/update/", params as unknown as Record<string, unknown>);
    },

    /** Get info about images */
    async adInfo(params: FileImageAdInfoParams): Promise<FileImageAdInfoResponse> {
      return get<FileImageAdInfoResponse>("/open_api/v1.3/file/image/ad/info/", params as unknown as Record<string, unknown>);
    },

    /** Search for images */
    async adSearch(params: FileImageAdSearchParams): Promise<FileImageAdSearchResponse> {
      return get<FileImageAdSearchResponse>("/open_api/v1.3/file/image/ad/search/", params as unknown as Record<string, unknown>);
    },
  };
}
