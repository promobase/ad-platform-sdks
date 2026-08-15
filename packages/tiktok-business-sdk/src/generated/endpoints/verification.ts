// @generated
// fingerprint: sha256:c1f0ac978046c2a2dcfe5b7a6269481cd6bfe062eba4f91659da9a6cd5ccee22
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Verification — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { AccountVerificationFiletypeParams, AccountVerificationFiletypeResponse, AccountVerificationUploadParams, AccountVerificationUploadResponse, AccountVerificationSubmitParams, AccountVerificationSubmitResponse, AccountVerificationStatusParams, AccountVerificationStatusResponse } from "../types/verification.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createVerification(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get available verification document types for a region */
    async verificationFiletype(params: AccountVerificationFiletypeParams): Promise<AccountVerificationFiletypeResponse> {
      return get<AccountVerificationFiletypeResponse>("/open_api/v1.3/account/verification/filetype/", params as unknown as Record<string, unknown>);
    },

    /** Upload verification documents */
    async verificationUpload(params: AccountVerificationUploadParams): Promise<AccountVerificationUploadResponse> {
      return post<AccountVerificationUploadResponse>("/open_api/v1.3/account/verification/upload/", params as unknown as Record<string, unknown>);
    },

    /** Submit a verification request for your account */
    async verificationSubmit(params: AccountVerificationSubmitParams): Promise<AccountVerificationSubmitResponse> {
      return post<AccountVerificationSubmitResponse>("/open_api/v1.3/account/verification/submit/", params as unknown as Record<string, unknown>);
    },

    /** Check the verification status of your account */
    async verificationStatus(params: AccountVerificationStatusParams): Promise<AccountVerificationStatusResponse> {
      return get<AccountVerificationStatusResponse>("/open_api/v1.3/account/verification/status/", params as unknown as Record<string, unknown>);
    },
  };
}
