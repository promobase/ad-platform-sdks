// @generated
// fingerprint: sha256:ef7b8a972bbcec703bbed99e008b8b3b88d9dd875603ab1c18e89ed717abe558
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Reporting — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcAdvertiserAttributeParams, BcAdvertiserAttributeResponse } from "../types/bc-reporting.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcReporting(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get currencies and registration areas for ad accounts */
    async advertiserAttribute(params: BcAdvertiserAttributeParams): Promise<BcAdvertiserAttributeResponse> {
      return get<BcAdvertiserAttributeResponse>("/open_api/v1.3/bc/advertiser/attribute/", params as unknown as Record<string, unknown>);
    },
  };
}
