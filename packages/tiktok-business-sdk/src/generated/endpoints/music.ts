// @generated
// fingerprint: sha256:f24916f2fc6277a44642982919c7e241a906747e3e8d452247e8469b30fff06d
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Music — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { FileMusicUploadParams, FileMusicUploadResponse, FileMusicGetParams, FileMusicGetResponse } from "../types/music.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createMusic(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Upload a piece of music */
    async musicUpload(params: FileMusicUploadParams): Promise<FileMusicUploadResponse> {
      return post<FileMusicUploadResponse>("/open_api/v1.3/file/music/upload/", params as unknown as Record<string, unknown>);
    },

    /** Get the music list */
    async getMusic(params: FileMusicGetParams): Promise<FileMusicGetResponse> {
      return get<FileMusicGetResponse>("/open_api/v1.3/file/music/get/", params as unknown as Record<string, unknown>);
    },
  };
}
