// @generated
// fingerprint: sha256:0913e1f0022ebcdc8aee7d6626c12d5ef6bea15a7845b5500d21ddfbb7a6ff51
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for BC Billing Groups — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { BcBillingGroupCreateParams, BcBillingGroupCreateResponse, BcBillingGroupUpdateParams, BcBillingGroupUpdateResponse, BcBillingGroupGetParams, BcBillingGroupGetResponse, BcBillingGroupAdvertiserListParams, BcBillingGroupAdvertiserListResponse } from "../types/bc-billing-groups.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createBcBillingGroups(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Create a Billing Group */
    async createBillingGroup(params: BcBillingGroupCreateParams): Promise<BcBillingGroupCreateResponse> {
      return post<BcBillingGroupCreateResponse>("/open_api/v1.3/bc/billing_group/create/", params as unknown as Record<string, unknown>);
    },

    /** Update a Billing Group */
    async updateBillingGroup(params: BcBillingGroupUpdateParams): Promise<BcBillingGroupUpdateResponse> {
      return post<BcBillingGroupUpdateResponse>("/open_api/v1.3/bc/billing_group/update/", params as unknown as Record<string, unknown>);
    },

    /** Get Billing Groups */
    async getBillingGroup(params: BcBillingGroupGetParams): Promise<BcBillingGroupGetResponse> {
      return get<BcBillingGroupGetResponse>("/open_api/v1.3/bc/billing_group/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the advertiser list of a Billing Group */
    async listAdvertiser(params: BcBillingGroupAdvertiserListParams): Promise<BcBillingGroupAdvertiserListResponse> {
      return get<BcBillingGroupAdvertiserListResponse>("/open_api/v1.3/bc/billing_group/advertiser/list/", params as unknown as Record<string, unknown>);
    },
  };
}
