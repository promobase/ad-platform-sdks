// Auto-generated client for Files — do not edit
import type { FileTemporarilyUploadParams, FileTemporarilyUploadResponse, FileStartUploadParams, FileStartUploadResponse, FileTransferUploadParams, FileTransferUploadResponse, FileFinishUploadParams, FileFinishUploadResponse, FileNameCheckParams, FileNameCheckResponse } from "../types/files.ts";

interface TikTokResponse<T> {
  code: number;
  message: string;
  request_id: string;
  data: T;
}

const TT_API_BASE = "https://business-api.tiktok.com";

export function createFiles(opts: { accessToken: string; advertiserId: string }) {
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
    /** Upload a file */
    async temporarilyUpload(params: FileTemporarilyUploadParams): Promise<FileTemporarilyUploadResponse> {
      return post<FileTemporarilyUploadResponse>("/open_api/v1.3/file/temporarily/upload/", params as unknown as Record<string, unknown>);
    },

    /** Start a file chunk upload task */
    async startUpload(params: FileStartUploadParams): Promise<FileStartUploadResponse> {
      return post<FileStartUploadResponse>("/open_api/v1.3/file/start/upload/", params as unknown as Record<string, unknown>);
    },

    /** Transfer a file chunk */
    async transferUpload(params: FileTransferUploadParams): Promise<FileTransferUploadResponse> {
      return post<FileTransferUploadResponse>("/open_api/v1.3/file/transfer/upload/", params as unknown as Record<string, unknown>);
    },

    /** Finish a chunk upload task */
    async finishUpload(params: FileFinishUploadParams): Promise<FileFinishUploadResponse> {
      return post<FileFinishUploadResponse>("/open_api/v1.3/file/finish/upload/", params as unknown as Record<string, unknown>);
    },

    /** Check the names of files */
    async nameCheck(params: FileNameCheckParams): Promise<FileNameCheckResponse> {
      return get<FileNameCheckResponse>("/open_api/v1.3/file/name/check/", params as unknown as Record<string, unknown>);
    },
  };
}
