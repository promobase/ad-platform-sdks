// @generated
// fingerprint: sha256:9ebfeca1f9531a0964a7ca720c6eff350d311833334c29d5cd8a9091c80a33c2
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Diagnosis — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { ToolDiagnosisGetParams, ToolDiagnosisGetResponse } from "../types/ad-diagnosis.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdDiagnosis(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get diagnoses for ad groups */
    async getDiagnosis(params: ToolDiagnosisGetParams): Promise<ToolDiagnosisGetResponse> {
      return get<ToolDiagnosisGetResponse>("/open_api/v1.3/tool/diagnosis/get/", params as unknown as Record<string, unknown>);
    },
  };
}
