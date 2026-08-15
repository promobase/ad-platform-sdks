// @generated
// fingerprint: sha256:500efcbfb2178ad5b0d2fd85933b0ed312d4078904cb1ed1e4492cd29cb71dcb
// DO NOT EDIT: generated file; changes will be overwritten.
// Auto-generated client for Pangle — do not edit
import { tiktokRequest } from "../../clients/request.ts";
import type { PangleBlockListGetParams, PangleBlockListGetResponse, PangleBlockListUpdateParams, PangleBlockListUpdateResponse, PangleAudiencePackageGetParams, PangleAudiencePackageGetResponse } from "../types/pangle.ts";

const TT_API_BASE = "https://business-api.tiktok.com";

export function createPangle(opts: { accessToken: string; advertiserId?: string; baseUrl?: string; fetch?: typeof fetch }) {

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
    /** Get the Pangle block list */
    async getPangleBlockList(params: PangleBlockListGetParams): Promise<PangleBlockListGetResponse> {
      return get<PangleBlockListGetResponse>("/open_api/v1.3/pangle_block_list/get/", params as unknown as Record<string, unknown>);
    },

    /** Update the Pangle block list */
    async updatePangleBlockList(params: PangleBlockListUpdateParams): Promise<PangleBlockListUpdateResponse> {
      return post<PangleBlockListUpdateResponse>("/open_api/v1.3/pangle_block_list/update/", params as unknown as Record<string, unknown>);
    },

    /** Get the Pangle audience packages */
    async getPangleAudiencePackage(params: PangleAudiencePackageGetParams): Promise<PangleAudiencePackageGetResponse> {
      return get<PangleAudiencePackageGetResponse>("/open_api/v1.3/pangle_audience_package/get/", params as unknown as Record<string, unknown>);
    },
  };
}
