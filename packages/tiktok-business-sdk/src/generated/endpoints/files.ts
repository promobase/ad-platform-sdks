// @generated
// fingerprint: sha256:b31a3dfee1fbb44fb3610ec0e59b5e560fa3675ab68eaadcf5915c971e0c5898
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Files — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { FileTemporarilyUploadParams, FileTemporarilyUploadResponse, FileStartUploadParams, FileStartUploadResponse, FileTransferUploadParams, FileTransferUploadResponse, FileFinishUploadParams, FileFinishUploadResponse, FileNameCheckParams, FileNameCheckResponse } from "../types/files.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createFiles(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
