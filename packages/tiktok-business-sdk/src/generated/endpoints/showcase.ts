// @generated
// fingerprint: sha256:8e975e6f0f8337b04b50469d97681ce9c5bb921df15503f4bbe0c48d09de7924
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Showcase — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { ShowcaseIdentityGetParams, ShowcaseIdentityGetResponse, ShowcaseRegionGetParams, ShowcaseRegionGetResponse, ShowcaseProductGetParams, ShowcaseProductGetResponse } from "../types/showcase.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createShowcase(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get identities with Showcase permission under an ad account */
    async getIdentity(params: ShowcaseIdentityGetParams): Promise<ShowcaseIdentityGetResponse> {
      return get<ShowcaseIdentityGetResponse>("/open_api/v1.3/showcase/identity/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the available regions for a Showcase via identity */
    async getRegion(params: ShowcaseRegionGetParams): Promise<ShowcaseRegionGetResponse> {
      return get<ShowcaseRegionGetResponse>("/open_api/v1.3/showcase/region/get/", params as unknown as Record<string, unknown>);
    },

    /** Get the available products in a Showcase */
    async getProduct(params: ShowcaseProductGetParams): Promise<ShowcaseProductGetResponse> {
      return get<ShowcaseProductGetResponse>("/open_api/v1.3/showcase/product/get/", params as unknown as Record<string, unknown>);
    },
  };
}
