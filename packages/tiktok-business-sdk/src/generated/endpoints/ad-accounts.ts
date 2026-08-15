// @generated
// fingerprint: sha256:30f59100d55e498857995f6a22118955830d42b9bb401daf2574521de9890dc8
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Ad Accounts — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { Oauth2AdvertiserGetParams, Oauth2AdvertiserGetResponse, AdvertiserInfoParams, AdvertiserInfoResponse } from "../types/ad-accounts.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createAdAccounts(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get authorized ad accounts */
    async getAdvertiser(params: Oauth2AdvertiserGetParams): Promise<Oauth2AdvertiserGetResponse> {
      return get<Oauth2AdvertiserGetResponse>("/open_api/v1.3/oauth2/advertiser/get/", params as unknown as Record<string, unknown>);
    },

    /** Get ad account details */
    async advertiserInfo(params: AdvertiserInfoParams): Promise<AdvertiserInfoResponse> {
      return get<AdvertiserInfoResponse>("/open_api/v1.3/advertiser/info/", params as unknown as Record<string, unknown>);
    },
  };
}
